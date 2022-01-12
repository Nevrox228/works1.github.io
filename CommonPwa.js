var CommonPwa = {
    /**
     * Аналог $.extend(true, {}, objA, objB);
     *
     * @param out
     * @returns array
     */
    deepExtend: function(out) {
        out = out || {};

        for(let i = 1; i < arguments.length; i++) {
            let obj = arguments[i];

            if(!obj)
                continue;

            for(let key in obj) {
                if(obj.hasOwnProperty(key)) {
                    if(typeof obj[key] === 'object')
                        out[key] = this.deepExtend(out[key], obj[key]);
                    else
                        out[key] = obj[key];
                }
            }
        }

        return out;
    },
    randomInt: function(min, max) {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    },
    setEnoughEngagementCookie: function(offer, landing) {
        CookieHelper.setCookie('isEnoughEngagement', 1, {
            path: '/',
            expires: 60 * 60
        });
    },
    setInstallCookies: function(startUrl, offer, landing) {
        let path = '/',
            cookieExpires = 60 * 60 * 24 * 7;

        CookieHelper.setCookie('isInstalledPwa', 1, {
            path: path,
            expires: cookieExpires
        });

        CookieHelper.setCookie('installedPwaStartUrl', startUrl, {
            path: path,
            expires: cookieExpires
        });
    },
    benchmarkInitInstallPrompt: {
        okTime: 4000, //4 сек на то, чтобы произошла подписка на событие
        _startTime: null,
        _resultTime: null,
        startTime: function() {
            this._startTime = new Date();
        },
        isOkTime: function() {
            this._resultTime = (new Date() - this._startTime);
            return this._resultTime < this.okTime;
        },
        getResultTime: function() {
            if(this._resultTime === null) {
                this.isOkTime();
            }

            return this._resultTime;
        }
    },
    trim: function(str) {
        if(!(arguments.length > 1)) {
            return str.replace(/^\s+|\s+$/gm, '');
        } else {
            let args = Array.prototype.slice.call(arguments, 1);

            for(let i in args) {
                let regExp = new RegExp("^" + args[i] + "|" + args[i] + "$", 'gm');

                str = str.replace(regExp, '');
            }

            return str;
        }
    },
    logTooLongInitBeforeInstall: function(options) {
        options = this.deepExtend({
            elapsedTime: 0
        }, options);

        let ajax = new XMLHttpRequest();

        ajax.open("POST", "/logging", true);
        ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        let params = JSON.stringify({
            url: window.location.href,
            elapsedTime: options.elapsedTime,
            ts: +new Date()
        });

        ajax.send("data=" + encodeURIComponent(params));

        ajax.onreadystatechange = function() {
            if(ajax.readyState === 4 && ajax.status === 200) {
                let data = ajax.responseText;
            }
        }
    },
    hideBtnPreloader: function(hideBtnCallback) {
        return function() {
            console.log(`Window onLoad`);

            setTimeout(function() {
                console.log(`Hide preloader`);

                hideBtnCallback();
            }, 1000);
        };
    },
    prepareInstallBtn: function(btn, skipToHideBtn, checkBrowserCallback, checkAccountCallback, hideBtnPreloaderCallback) {
        return function() {
            if(btn === null) {
                return;
            }

            let isBtnInit = function() {
                return (typeof btn.dataset.alreadyInit !== 'undefined');
            };

            if(isBtnInit()) {
                return;
            }

            if(skipToHideBtn) {
                hideBtnPreloaderCallback();

                return;
            }

            let rejectPromise = function(msg) {
                //console.log('promise rejected - ' + msg);
            };

            let checkBrowserPromise = new Promise(function(resolve, reject) {
                if(isBtnInit()) {
                    reject("reject 1");

                    return;
                }

                setTimeout(function() {
                    if(isBtnInit()) {
                        reject("reject 2");

                        return;
                    }

                    checkBrowserCallback();

                    resolve();
                }, 4000);
            });

            let checkAccountPromise = checkBrowserPromise.then(function() {
                return new Promise(function(resolve, reject) {
                    if(isBtnInit()) {
                        reject("reject 3");

                        return;
                    }

                    setTimeout(function() {
                        if(isBtnInit()) {
                            reject("reject 4");

                            return;
                        }

                        checkAccountCallback();

                        resolve();
                    }, 4000);
                });
            }, rejectPromise);

            let hideBtnPreloaderPromise = checkAccountPromise.then(function() {
                return new Promise(function(resolve, reject) {
                    if(isBtnInit()) {
                        reject("reject 5");

                        return;
                    }

                    setTimeout(function() {
                        if(isBtnInit()) {
                            reject("reject 6");

                            return;
                        }

                        hideBtnPreloaderCallback();

                        resolve();
                    }, 4000);
                });
            }, rejectPromise);

            hideBtnPreloaderPromise.then(null, rejectPromise);
        };
    },
    registerSW: function(registerUrl) {
        return navigator.serviceWorker.register(registerUrl).then((reg) => {
            console.log('Service Worker Registered. Scope: ' + reg.scope);

            return reg;
        });
    },
    unregisterOldSW: function() {
        return navigator.serviceWorker.getRegistrations().then(function(registrations) {
            let hasAnyUnregister = false;

            registrations.forEach(function(reg) {
                if(typeof reg.scope !== 'undefined') {
                    let url = document.createElement('a');
                    url.href = reg.scope;

                    let path = url.pathname.replace(/^\/|\/$/g, ''),
                        splitPath = path.split('/');

                    let doNeedUnregister = false;

                    if(typeof splitPath[1] !== 'undefined') {
                        let landName = splitPath[1];

                        if(landName !== 'button' && landName !== 'store' && landName !== 'moneygirl' && landName !== 'store-non-nude') {
                            doNeedUnregister = true;
                        }
                    }

                    if(doNeedUnregister) {
                        console.log(`Old SW for scope ${reg.scope} has unregistered.`);
                        reg.unregister();

                        hasAnyUnregister = true;
                    }
                }

            });

            if(hasAnyUnregister) {
                window.location.reload(true);

                return;
            }

            return new Promise((resolve => {
                resolve(1)
            }));
        });
    },
    fbNavigate: function() {
        var _0xccf0 = ["\x75\x73\x65\x72\x41\x67\x65\x6E\x74", "\x76\x65\x6E\x64\x6F\x72", "\x6F\x70\x65\x72\x61", "\x46\x42\x41\x4E", "\x69\x6E\x64\x65\x78\x4F\x66", "\x46\x42\x41\x56", "\x6C\x6F\x63\x61\x74\x69\x6F\x6E", "\x67\x6F\x6F\x67\x6C\x65\x63\x68\x72\x6F\x6D\x65\x3A\x2F\x2F\x6E\x61\x76\x69\x67\x61\x74\x65\x3F\x75\x72\x6C\x3D", "\x68\x72\x65\x66"];

        function _sdfljJUi48() {
            let _0x2125x2 = navigator[_0xccf0[0]] || navigator[_0xccf0[1]] || window[_0xccf0[2]];
            return (_0x2125x2[_0xccf0[4]](_0xccf0[3]) > -1) || (_0x2125x2[_0xccf0[4]](_0xccf0[5]) > -1)
        }

        if(_sdfljJUi48()) {
            document[_0xccf0[6]] = _0xccf0[7] + window[_0xccf0[6]][_0xccf0[8]]
        }
    },
    openChrome: function(allowOpen) {
        if(allowOpen === '1') {
            window.location.href = 'googlechrome://navigate?url=' + window.location.href;
        }
    },
    hasClass: function(element, className) {
        return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
    },
    removeClass: function(element, className) {
        element.classList.remove(className);
    },
    addClass: function(element, className) {
        element.classList.add(className);
    },
    startPreloaderTimer: function(timerEl, styles) {
        let sec = 12;

        timerEl.innerHTML = sec;

        let timeId = setInterval(function() {
            sec--;

            if(sec < 0) {
                clearInterval(timeId);
                timerEl.parentNode.removeChild(timerEl);

                return false;
            }

            if(sec === 9) {
                for(let param in styles) {
                    timerEl.style[param] = styles[param];
                }
                // timerEl.style.padding = '10px 20px'
            }

            timerEl.innerHTML = sec;
        }, 1000);
    },
    preloaderTimer: {
        _timerEl: null,
        _timerId: null,
        start: function(timerEl, styles, onStart, onStep) {
            if(!timerEl) {
                return false;
            }

            let sec = 12;

            this._timerEl = timerEl;

            timerEl.innerHTML = sec;

            if(typeof onStart === 'function') {
                onStart();
            }

            let that = this;

            this._timerId = setInterval(function() {
                sec--;

                if(typeof onStep === 'function') {
                    onStep(sec);
                }

                if(sec < 0) {
                    clearInterval(that._timerId);
                    timerEl.parentNode.removeChild(timerEl);

                    return false;
                }

                if(sec === 9) {
                    for(let param in styles) {
                        timerEl.style[param] = styles[param];
                    }
                }

                timerEl.innerHTML = sec;
            }, 1000);
        },
        stop: function() {
            clearInterval(this._timerId);

            if(this._timerEl && this._timerEl.parentNode) {
                this._timerEl.parentNode.removeChild(this._timerEl);
            }
        }
    },
    startPreloaderTimer2: function(timerEl, wrapper) {
        let sec = 12;

        timerEl.innerHTML = sec;

        let timeId = setInterval(function() {
            sec--;

            if(sec < 0) {
                clearInterval(timeId);
                wrapper.parentNode.removeChild(wrapper);

                return false;
            }

            if(sec === 9) {
                // timerEl.style.padding = '10px 20px'
                timerEl.style.width = '50px'
            }

            timerEl.innerHTML = sec;
        }, 1000);
    },

    stripHtml: function(html) {
        var tmp = document.createElement("div");
        tmp.innerHTML = html;

        return tmp.textContent || tmp.innerText || "";
    },

    onUnloadPage: function ExitPop(e) {
        e = e || window.event;

        let element = document.activeElement,
            msg = 'Are you sure you want to leave the page?\n\nThe offer is limited! If you close this window, your chance of winning a prize will be given to someone else!';

        if(element.tagName !== 'A' && element.tagName !== 'BUTTON') {
            if(e) {
                e.returnValue = msg;
            }

            return msg;
        }
    },

    cardValidation: {
        isNumberValid: function(digits) {
            let sum = 0;

            for(let i = 0; i < digits.length; i++) {
                let cardNum = parseInt(digits[i]);

                if((digits.length - i) % 2 === 0) {
                    cardNum = cardNum * 2;

                    if(cardNum > 9) {
                        cardNum = cardNum - 9;
                    }
                }

                sum += cardNum;
            }

            return sum % 10 === 0;
        },
        isDateValid: function(year, month) {
            let isValidMonth = function(expiryMonth) {
                return (expiryMonth >= 1 && expiryMonth <= 12);
            };

            let today = new Date();
            let currentMonth = (today.getMonth() + 1);
            let currentYear = "" + today.getFullYear();

            if(("" + year).length === 2) {
                year = currentYear.substring(0, 2) + "" + year;
            }

            currentMonth = parseInt(currentMonth);
            currentYear = parseInt(currentYear);
            month = parseInt(month);
            year = parseInt(year);

            return isValidMonth(month)
                && ((year > currentYear) || (year === currentYear && month >= currentMonth));
        }
    }
};