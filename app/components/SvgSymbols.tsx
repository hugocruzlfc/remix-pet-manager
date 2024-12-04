const defs = {
  bird: `<symbol viewBox="0 0 64 64" id="icon-bird"><g fill="#42ade2"><path d="M59.8 24.3s1.1-6.2-3.5-3.4c0 0-.4-6.3-4.3-1.9c0 0-2.1-3.9-4.4-.3c-3.1 4.8-5.2 12.4-3.2 25l3.8-2.5c2.7-7.9 12.4-8.8 13.7-13.1c.9-3-2.1-3.8-2.1-3.8m-37.7-6.7l-9.9 3.6C14.4 9.2 28.8 10 28.8 10s-6.8 3.2-6.7 7.6"></path><path d="m23.7 19.8l-10.5 1.4C18 10 31.9 13.9 31.9 13.9s-7.3 1.6-8.2 5.9"></path></g><path fill="#ffd93b" d="m2 29l5.4-1.4v3.6c0-.1-3.3-.6-5.4-2.2m5.4-1.5L2 24.8c3.6-2.8 7.7-1.9 7.7-1.9l-2.3 4.6z"></path><path fill="#e08828" d="M33.8 53h-2.1v7.9c-.3.1-2.1-.1-2.9-.1c-1.8 0-3.3 1.3-3.3 1.3h8.3V53M25 53h-2.1v7.9c-.3.1-2.1-.1-2.9-.1c-1.8 0-3.3 1.3-3.3 1.3H25V53"></path><path fill="#42ade2" d="M54 36.2c3.9 0-4.1 17.5-23.3 17.5c-13 0-23.9-5.2-23.9-21.5c0-10.1 6.4-18.3 19.5-15c13.3 3.5 6.5 19 27.7 19"></path><path fill="#fff" d="M37.6 51.7c-15.6 0-14-12-27.9-11.2c5.1 15.8 27.9 11.2 27.9 11.2"></path><path fill="#297b9d" d="M39.1 29.2c-10-9.8-20.2 6.2-7.9 12.6C43.3 48 51.6 37 51.6 37s-6.1-1.5-12.5-7.8"></path><circle cx="15.1" cy="24.9" r="2.5" fill="#3e4347"></circle></symbol>`,
  bunny: `<symbol viewBox="0 0 64 64" id="icon-bunny"><ellipse cx="50.9" cy="47.5" fill="#dedfe0" rx="4" ry="4.4"></ellipse><path fill="#aaacad" d="M39 58.8c1.6 1.8 11.6.3 12.2-2c3-11.3-5-14.7-5-14.7l-7.1 3.5c0-.1-2.2 10.8-.1 13.2"></path><path fill="#919191" d="M39.1 56.1c.1-.8.5-1.6 1.1-2.2c.6-.6 1.3-1.2 2.1-1.5c1.6-.7 3.4-.7 5-.1c-1.7 0-3.2.1-4.7.8c-.7.3-1.4.7-2 1.2c-.5.5-1.1 1.1-1.5 1.8"></path><g fill="#c4c5c6"><path d="M29.7 60.7c1.5 1.8 7 1.7 8.7 0c2.4-2.5 2.3-13.6 2.4-19.1l-10.2-.9c-.1 0-2.9 17.6-.9 20"></path><path d="M29.7 60.7c-1.5 1.8-7 1.7-8.7 0c-2.4-2.5-2.3-13.6-2.4-19.1l10.2-.9s2.9 17.6.9 20"></path></g><path fill="#aaacad" d="M29.7 60.7c-.3-1.4-.4-2.9-.4-4.3s.1-2.9.4-4.3c.3 1.4.4 2.9.4 4.3c-.1 1.5-.1 2.9-.4 4.3"></path><path fill="#fff" d="M38.7 48.1c0 4.5-9 9.2-9 9.2s-9-4.7-9-9.2s4-8.2 9-8.2s9 3.7 9 8.2"></path><path fill="#b5b5b5" d="M47.4 2c-1-.3-9.3 6.1-9.5 11.5c-.5 10.5-1.2 13.4-1.2 13.4l5.6 1.4s-.3-1 6.9-12C51.8 12.2 49 2.6 47.4 2"></path><path fill="#ffc5d3" d="M46 7.3c-1-.3-4.9 2.6-5.7 6.8c-1.9 10.2-2.5 13.1-2.5 13.1l3.7.9s0-.7 5.4-12.4c1.4-3 .6-7.9-.9-8.4"></path><path fill="#b5b5b5" d="M12 2c1-.3 9.3 6.1 9.5 11.5c.5 10.5 1.2 13.4 1.2 13.4l-5.6 1.4s.3-1-6.9-12C7.5 12.2 10.4 2.6 12 2"></path><path fill="#ffc5d3" d="M13.4 7.3c1-.3 4.9 2.6 5.7 6.8c1.9 10.2 2.5 13.1 2.5 13.1l-3.6 1s0-.7-5.5-12.4c-1.4-3.1-.7-8 .9-8.5"></path><path fill="#c4c5c6" d="M15 28.3c0-6 4.5-10.3 14.7-10.3c10.1 0 14.7 4.3 14.7 10.3c0 5 7.6 12.4.8 17.3c-3.3 2.4-8.9 4.5-15.5 4.5S17.5 48 14.2 45.6c-6.8-5 .8-12.3.8-17.3"></path><path fill="#fff" d="M36.6 36.6c-.2-4.8-3.5-10.6-5.6-13.3c-.9-1.2-1.7-1.2-2.6 0c-2.1 2.7-5.4 8.5-5.6 13.3c-3.8-.5-8.1-.3-9 1.7c-1.7 4 6.3 10.7 15.8 10.7c9.6 0 17.5-6.7 15.8-10.7c-.7-2-5.1-2.2-8.8-1.7"></path><path fill="#4c5359" d="M37.2 42.3c-.8.6-1.9 1-3 1.1c-1.1.1-2.3-.2-3.2-.8c-.5-.3-.9-.7-1.3-1.2c-.3.5-.8.9-1.3 1.2c-1 .6-2.1.9-3.2.8c-1.1 0-2.2-.4-3-1.1c-.5-.4 2.1 4.6 7.5 4.6s8-5 7.5-4.6"></path><path fill="#fff" d="M33.9 30.9s.3-3.3 2.9-4.3c3-1.2 5 1.7 5.5 3.3c.8 2.4-.2 5.1-.5 5.7c-.2.4-2.4 2.3-7.3.5c.1 0-1.2-2.7-.6-5.2"></path><path fill="#b2b6b8" d="M33.9 30.9c0-1.2.4-2.3 1.1-3.3c.4-.5.8-.9 1.3-1.2c.2-.2.5-.3.8-.4c.3-.1.6-.2.9-.2c1.2-.2 2.4.4 3.2 1.2c.8.8 1.5 1.9 1.8 3.1c.3 1.2.2 2.5-.1 3.7c-.1.6-.3 1.2-.6 1.7l-.1.2v.3l-.1.1c-.1.1-.2.2-.4.3c-.3.2-.5.3-.8.4c-1.1.4-2.2.4-3.3.3c-1.1-.2-2.1-.5-3.1-1c1 .2 2.1.5 3.1.5s2.1-.1 3-.5c.2-.1.4-.2.6-.4c.1-.1.2-.1.2-.2l.1-.2c.2-.5.3-1 .5-1.5c.2-1.1.3-2.2 0-3.2c-.2-1-.8-1.9-1.5-2.6c-.7-.7-1.6-1.2-2.5-1.1c-.2 0-.5 0-.7.1c-.2.1-.5.1-.7.2c-.5.2-.9.5-1.2.9c-.7.6-1.2 1.6-1.5 2.8"></path><ellipse cx="37.7" cy="32" fill="#4c5359" rx="2.6" ry="3.2"></ellipse><path fill="#fff" d="M25.5 30.9s-.3-3.3-2.9-4.3c-3-1.2-5 1.7-5.5 3.3c-.8 2.4.2 5.1.5 5.7c.2.4 2.4 2.3 7.3.5c-.1 0 1.1-2.7.6-5.2"></path><path fill="#b2b6b8" d="M25.5 30.9c-.3-1.1-.7-2.2-1.5-2.9c-.4-.4-.8-.7-1.2-.9c-.2-.1-.5-.2-.7-.2c-.2-.1-.5-.1-.7-.1c-.9 0-1.9.4-2.5 1.1c-.7.7-1.3 1.7-1.5 2.6c-.2 1-.2 2.1 0 3.2c.1.5.3 1.1.5 1.5l.1.2c.1.1.2.1.2.2c.2.1.4.3.6.4c.9.4 1.9.6 3 .5c1 0 2.1-.2 3.1-.5c-1 .5-2 .8-3.1 1c-1.1.2-2.2.1-3.3-.3c-.3-.1-.5-.2-.8-.4c-.1-.1-.3-.2-.4-.3l-.1-.1l-.1-.1v-.1l-.1-.1c-.2-.6-.4-1.1-.6-1.7c-.3-1.2-.3-2.4-.1-3.7c.3-1.2 1-2.3 1.8-3.1c.9-.8 2-1.4 3.2-1.2c.3 0 .6.1.9.2c.3.1.5.2.8.4c.5.3.9.7 1.3 1.2c.7.8 1.1 2 1.2 3.2"></path><ellipse cx="21.6" cy="32" fill="#4c5359" rx="2.6" ry="3.2"></ellipse><path fill="#fff" d="M27 40.1h5.3v4.4H27z"></path><path fill="#b2b6b8" d="M37.7 41.9c-.9.4-2 .6-3 .6c-1-.1-2-.3-2.8-.8c-.8-.5-1.4-1.2-1.5-1.9l-.7-3.4l-.7 3.4c-.2.8-.7 1.4-1.5 1.9s-1.8.8-2.8.8c-1.1 0-2.1-.1-3-.6c-.9-.4-1.7-1.1-2.1-2c.1 1 .7 1.9 1.6 2.5c.9.6 2.2 1 3.4 1.1c1.3.1 2.5-.2 3.6-.8c.6-.3 1-.7 1.4-1.2c.4.5.9.9 1.4 1.2c1.1.6 2.4.9 3.6.8c1.2 0 2.5-.4 3.4-1.1c.9-.6 1.6-1.6 1.6-2.5c-.2.8-1 1.5-1.9 2"></path><path fill="#ff94a4" d="M33.2 35.7c-.7-.6-2.9-.6-3.6-.6s-2.8 0-3.6.6c-.5.4-.1 1.4 1.2 2.3c.9.6 1.7.7 2.3.7c.7 0 1.5-.2 2.3-.7c1.6-.9 1.9-1.9 1.4-2.3"></path></symbol>`,
  cancel: `<symbol viewBox="0 0 24 24" id="icon-cancel"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"></path></symbol>`,
  cat: `<symbol viewBox="0 0 64 64" id="icon-cat"><g fill="#3e4347"><path d="M2.3 36.1c-.2-1-.3-2-.2-2.9c0-1.2.3-2.2.9-3.2c.6-1.1 1.6-2 2.7-2.5c1.1-.6 2.5-.8 3.8-.6c1.2.1 2.4.6 3.4 1.3c.9.6 1.7 1.4 2.4 2.3c1.1 1.5 1.9 3.3 2.3 5.4v.3c.2 1.3-.6 2.5-1.9 2.9c-.2.1-.4.1-.6.1c-.8.1-1.5-.1-2.1-.6c-.6-.5-1-1.1-1.1-1.9c-.2-1.4-.5-2.6-1.1-3.5c-.5-.9-1.3-1.6-2.1-1.8c-.3-.1-.7-.1-1 0c-.4.1-.7.4-.9.7c-.3.4-.5.8-.5 1.4c-.1.6-.1 1.2 0 1.8c.2 1.2.6 2.6 1.3 4c.3.6.7 1.3 1.1 2c.4.7.9 1.3 1.3 1.8c1.1 1.3 2.1 2.3 3.2 3.1c1.3.9 2.6 1.5 3.9 1.7c1.3.2 2.8.2 4.3-.3c1.2-.3 1.9.1 2.1.7c.2.5-.1 1.3-1.3 1.7h-.1c-1.8.6-3.7.8-5.4.5c-1.7-.2-3.5-1-5.2-2c-1.4-.9-2.6-2.1-3.9-3.5c-.5-.6-1-1.2-1.4-1.7L6 43c-.6-.7-1.1-1.4-1.5-2.1c-1.2-1.6-1.9-3.2-2.2-4.8m44.4 19.8c1.8 2.3 9.7 0 11-2.6c5.2-10.6 0-15.2 0-15.2l-11 1.5c0 .1-2.2 13.5 0 16.3"></path><path d="M31.8 55.9c-1.8 2.3-9.7 0-11-2.6c-5.2-10.6 0-15.2 0-15.2l11 1.5c0 .1 2.3 13.5 0 16.3"></path></g><path fill="#fff" d="M34.5 55.2c-.1 1.1-2.6 1.7-5.6 1.4c-3-.3-5.3-1.3-5.3-2.4c.1-1.1 2.4.3 5.4.5c3.1.4 5.6-.5 5.5.5m9.5 0c.1 1.1 2.6 1.7 5.6 1.4c3-.3 5.3-1.3 5.3-2.4c-.1-1.1-2.4.3-5.4.5c-3.1.4-5.6-.5-5.5.5"></path><g fill="#4c5359"><path d="M39.2 60.4c2 2.2 8.9 2.1 11.1 0c3-3 2.9-16.7 3-23.3l-13-1.1c.1 0-3.6 21.5-1.1 24.4"></path><path d="M39.3 60.4c-2 2.2-8.9 2.1-11.1 0c-3-3-2.9-16.7-3-23.3l13-1.1s3.6 21.5 1.1 24.4"></path></g><path fill="#fff" d="m34 43.7l5.3 11.2l5.3-11.2z"></path><path fill="#4c5359" d="M59.9 2.2C57.5.8 45.1 7.3 42.6 11.7l17.9 10.6c2.4-4.3 1.7-18.8-.6-20.1"></path><path fill="#f7a4a4" d="M56.2 8.8c-.9-.5-8.2 2.8-9.6 5.2l10 5.9c1.3-2.3.4-10.6-.4-11.1"></path><path fill="#4c5359" d="M18.7 2.2c-2.4 1.4-3.1 15.7-.6 20.1L36 11.7C33.6 7.4 21 .8 18.7 2.2z"></path><path fill="#f7a4a4" d="M22.5 8.8c-.9.5-1.8 8.7-.4 11.1L32 14c-1.3-2.3-8.7-5.7-9.5-5.2"></path><path fill="#4c5359" d="M39.3 9.4C18.5 9.4 16.5 24 16.5 32.1c0 3.4 10.2 13.9 22.7 13.9C51.8 46 62 35.5 62 32.1C62 24 60 9.4 39.3 9.4"></path><path fill="#bfffab" d="M33.5 28.5s-2.4 3.6-6.8 2.5s-4.6-5.4-4.6-5.4s2.4-3.6 6.8-2.5c4.4 1.2 4.6 5.4 4.6 5.4"></path><path fill="#93e67f" d="M33 26.7S30.9 29 28 29c-3.1 0-5-4.4-5-4.4s2.1-2.4 5.8-1.4c3.5.8 4.2 3.5 4.2 3.5"></path><path fill="#4c5359" d="M29.8 26.6c0 4.9-2.4 4.9-2.4 0s2.4-4.9 2.4 0"></path><path fill="#bfffab" d="M45.1 28.5s2.4 3.6 6.8 2.5s4.6-5.4 4.6-5.4s-2.4-3.6-6.8-2.5c-4.4 1.2-4.6 5.4-4.6 5.4"></path><path fill="#93e67f" d="M45.5 26.7s2.1 2.3 5 2.3c3.1 0 5-4.4 5-4.4s-2.1-2.4-5.8-1.4c-3.5.8-4.2 3.5-4.2 3.5"></path><path fill="#4c5359" d="M48.7 26.6c0 4.9 2.4 4.9 2.4 0c.1-4.9-2.4-4.9-2.4 0"></path><path fill="#fff" d="M45.9 32.5c-2-1.5-4.2-6.5-6.6-6.5s-4.7 5-6.6 6.5c-3.1 2.4-11.5 5.1-11.5 5.1s8.9 7.6 18.1 7.6c9.2 0 18.1-7.6 18.1-7.6s-8.4-2.7-11.5-5.1"></path><g fill="#4c5359"><path d="M45.7 39.3c-.7.4-1.6.6-2.4.6c-.8-.1-1.6-.3-2.2-.8c-.6-.5-1.1-1.2-1.2-1.9l-.6-3.3l-.6 3.3c-.1.8-.6 1.4-1.2 1.9s-1.4.8-2.2.8c-.9 0-1.7-.1-2.4-.6c-.7-.4-1.4-1.1-1.7-2c0 1 .6 1.9 1.3 2.5c.7.6 1.8 1 2.7 1.1c1 .1 2-.2 2.9-.8c.5-.3.8-.7 1.2-1.2c.3.5.7.9 1.2 1.2c.9.6 1.9.9 2.9.8c1 0 2-.4 2.7-1.1c.8-.6 1.3-1.6 1.3-2.5c-.3.9-.9 1.6-1.7 2"></path><path d="M42.4 33.1c-.6-.7-2.5-.8-3.1-.8c-.6 0-2.5.1-3.1.8c-.4.5-.1 1.8 1.1 3c.7.7 1.4.9 2 .9c.6 0 1.3-.2 2-.9c1.2-1.2 1.5-2.5 1.1-3"></path></g><path fill="#fff" d="M39 59.6c0 1.1-2.3 1.9-5.2 1.9c-2.9 0-5.2-.9-5.2-1.9c0-1.1 2.3.1 5.2.1c2.8 0 5.2-1.1 5.2-.1m10.9 0c0 1.1-2.3 1.9-5.2 1.9c-2.9 0-5.2-.9-5.2-1.9c0-1.1 2.3.1 5.2.1c2.9 0 5.2-1.1 5.2-.1"></path><path fill="#3e4347" d="m29.6 61.2l1.4-2.4l-.4 2.8zm3.5.8l.5-3.3l.5 3.3zm3.9-.4l-.4-2.6l1.4 2.3zm11 0l-.4-2.8l1.4 2.4zm-3.6.4l.5-3.3l.5 3.3zm-3.9-.7l1.4-2.3l-.4 2.6z"></path></symbol>`,
  "chevron-down": `<symbol viewBox="0 0 32 32" id="icon-chevron-down"><path d="M16 22L6 12l1.4-1.4l8.6 8.6l8.6-8.6L26 12z"></path></symbol>`,
  "chevron-up": `<symbol viewBox="0 0 32 32" id="icon-chevron-up"><path d="m16 10l10 10l-1.4 1.4l-8.6-8.6l-8.6 8.6L6 20z"></path></symbol>`,
  dog: `<symbol viewBox="0 0 64 64" id="icon-dog"><path fill="#947151" d="M14.1 46.2C8 45.7 3 38 3 38c0 9.5 8.4 13 12.2 11.7c3.4-1.1-1.1-3.5-1.1-3.5z"></path><path fill="#eabc92" d="M41.3 56c1.7 2 9.5 0 10.8-2.3c5.1-9.5 0-15.6 0-15.6l-10.8 3.3c0 .1-2.2 12.1 0 14.6"></path><path fill="#f5d1ac" d="M34 60.4c1.9 2.2 8.8 2.1 10.8 0c3-3 2.8-16.7 3-23.3L35.1 36S31.6 57.5 34 60.4"></path><path fill="#eabc92" d="M26.7 56c-1.7 2-9.5 0-10.8-2.3c-5.1-9.5 0-15.6 0-15.6l10.8 3.3c0 .1 2.3 12.1 0 14.6"></path><path fill="#f5d1ac" d="M34.1 60.4c-1.9 2.2-8.8 2.1-10.8 0c-3-3-2.8-16.7-3-23.3L33 36s3.5 21.5 1.1 24.4"></path><path fill="#423223" d="M34 60.5c-.3-2.1-.4-4.2-.4-6.3c0-2.1.1-4.2.4-6.3c.3 2.1.4 4.2.4 6.3c0 2.1-.1 4.2-.4 6.3"></path><path fill="#3e4347" d="M34 46.5c-10.2 0-15.4-4-15.4-4S22 51.6 34 51.6s15.4-9.1 15.4-9.1s-5.2 4-15.4 4"></path><path fill="#fff" d="M31.1 49c0-1.4.6-2.5 1.3-2.6c-.2-.2-.5-.3-.7-.3c-.9 0-1.6 1.3-1.6 2.9c0 1.6.7 2.9 1.6 2.9c.3 0 .5-.2.7-.4c-.7 0-1.3-1.1-1.3-2.5"></path><path fill="#f5d1ac" d="M19.5 43C13.4 39.2 11 24.3 13 17.6c1.5-5 7-12.4 12-14.4c4.2-1.6 13.9-1.6 18.1 0c5 1.9 10.6 9.3 12 14.4c2 6.8.5 21.6-5.6 25.4c-12.8 8-17.2 8-30 0"></path><path fill="#423223" d="M9.9 19.1c3.2 6.9 4 7.2 7.1-1c1.6-4.4.5-7 2.4-9.8c1.1-1.6 3.5-4.1 3.5-4.1S3.7 6.1 9.9 19.1"></path><path fill="#947151" d="M18 3.9c-4.8 3-15.1 1.8-9 14.8c3.2 6.9 4 7.2 7.1-1c1.6-4.4.5-7 2.4-9.8c1.1-1.6 4.4-3.7 4.4-3.7s-1.5-2.4-4.9-.3"></path><path fill="#423223" d="M58.2 19.1c-3.2 6.9-4 7.2-7.1-1c-1.6-4.4-.5-7-2.4-9.8c-1.1-1.6-3.5-4.1-3.5-4.1s19.2 1.9 13 14.9"></path><path fill="#947151" d="M50.1 3.9c4.8 3 15.2 1.8 9.1 14.8c-3.2 6.9-4 7.2-7.1-1c-1.6-4.4-.5-7-2.4-9.8c-1.1-1.6-4.4-3.7-4.4-3.7s1.4-2.4 4.8-.3"></path><path fill="#fff" d="M21.2 19.2c3 0 5.4 2.3 5.4 5.2s-2.4 5.2-5.4 5.2c-3 0-5.4-2.3-5.4-5.2s2.5-5.2 5.4-5.2"></path><ellipse cx="19.9" cy="24.4" fill="#3e4347" rx="4" ry="3.9"></ellipse><path fill="#fff" d="M52.2 24.4c0 2.9-2.4 5.2-5.4 5.2c-3 0-5.4-2.3-5.4-5.2s2.4-5.2 5.4-5.2c3 0 5.4 2.3 5.4 5.2"></path><ellipse cx="48.2" cy="24.4" fill="#3e4347" rx="4" ry="3.9"></ellipse><path fill="#7d644b" d="m24.8 40.1l4.2 4.2c2.5 2.5 7.7 2.5 10.2 0l4.2-4.2l-4.4-4.3h-9.9l-4.3 4.3"></path><path fill="#f15a61" d="M34 32.1s-4.4 6.1-3.8 9c.7 4.2 7 4.2 7.7 0c.5-2.9-3.9-9-3.9-9"></path><path fill="#ba454b" d="m34 42.7l1-5.9h-1.9l.9 5.9"></path><path fill="#423223" d="M29.5 33.8h9v4h-9z"></path><path fill="#947151" d="m48.3 34.7l-6.4-6.5c-3.9-3.9-11.8-3.9-15.6 0l-6.4 6.5c-1.8 1.8-1.8 4.8 0 6.7c1.8 1.8 4.8 1.8 6.6 0l6.4-6.5c.6-.6 1.8-.6 2.4 0l6.4 6.5c1.8 1.8 4.8 1.8 6.6 0c1.8-1.8 1.8-4.8 0-6.7"></path><path fill="#3e4347" d="M28.7 28.7c0-2.3 2.4-2.7 5.3-2.7s5.3.4 5.3 2.7c0 1.8-4.2 3.4-5.3 3.4c-1 0-5.3-1.6-5.3-3.4m-1.6 2l-.9.9l.9.9l.9-.9zM25 33.1l-.9.9l.9.9l.9-.9zm2.8.9l-.9.9l.9.9l.9-.9zM41 30.7l.9.9l-.9.9l-.9-.9zm2.1 2.4l.9.9l-.9.9l-.9-.9zm-2.8.9l.9.9l-.9.9l-.9-.9z"></path></symbol>`,
  fish: `<symbol viewBox="0 0 64 64" id="icon-fish"><path fill="#e07e1e" d="M43.1 50.6c-5.2 0-9.6-3-9.6-6.5s4.4-6.5 9.6-6.5c5.2 0 9.6 3 9.6 6.5c-.1 3.5-4.4 6.5-9.6 6.5"></path><path fill="#3e4347" d="M43.1 38.5c5.1 0 8.7 2.9 8.7 5.5s-3.6 5.5-8.7 5.5s-8.7-2.9-8.7-5.5s3.6-5.5 8.7-5.5m0-1.9c-5.7 0-10.4 3.4-10.4 7.5s4.7 7.5 10.4 7.5s10.4-3.4 10.4-7.5c0-4.2-4.7-7.5-10.4-7.5z"></path><path fill="#e07e1e" d="M28.1 25.4c-4.7 0-8.5-3.2-8.5-7.1c0-3.9 3.8-7.1 8.5-7.1s8.5 3.2 8.5 7.1c0 3.9-3.9 7.1-8.5 7.1"></path><path fill="#3e4347" d="M28.1 12.2c4.1 0 7.6 2.8 7.6 6c0 3.3-3.5 6-7.6 6s-7.6-2.8-7.6-6s3.4-6 7.6-6m0-2.2c-5.2 0-9.4 3.7-9.4 8.2s4.2 8.2 9.4 8.2s9.4-3.7 9.4-8.2s-4.2-8.2-9.4-8.2z"></path><path fill="#e07e1e" d="M45.5 31.9c-2 0-4-1-5.5-2.8c-1.4-1.6-2.2-3.7-2.4-5.8c-.1-2.1.4-3.9 1.5-5.2c1-1.2 2.4-1.8 3.9-1.8c2 0 4 1 5.5 2.8c1.4 1.6 2.2 3.7 2.4 5.8c.1 2.1-.4 3.9-1.5 5.2c-1 1.1-2.3 1.8-3.9 1.8"></path><path fill="#3e4347" d="M43.1 17.2c1.7 0 3.5.9 4.8 2.5c1.2 1.5 2 3.3 2.1 5.2c.1 1.7-.3 3.3-1.2 4.4c-1 1.2-2.3 1.5-3.2 1.5c-1.7 0-3.5-.9-4.8-2.5c-1.2-1.5-2-3.3-2.1-5.2c-.1-1.7.3-3.3 1.2-4.4c1-1.2 2.3-1.5 3.2-1.5m0-2.2c-1.7 0-3.3.7-4.5 2.1c-2.7 3.2-2.3 8.9.9 12.6c1.8 2.1 4 3.2 6.1 3.2c1.7 0 3.3-.7 4.5-2.1c2.7-3.2 2.3-8.9-.9-12.6c-1.7-2.1-4-3.2-6.1-3.2z"></path><path fill="#e07e1e" d="M28.9 52.9c-1.3 0-2.6-.3-4-.9c-3.8-1.6-6.4-5.1-5.6-7.7c.5-1.5 2.2-2.5 4.5-2.5c1.3 0 2.6.3 4 .9c1.9.8 3.6 2.2 4.7 3.7c.9 1.4 1.3 2.8.9 3.9c-.5 1.6-2.2 2.6-4.5 2.6"></path><path fill="#3e4347" d="M23.9 43c1.2 0 2.4.3 3.6.8c1.8.8 3.3 2 4.2 3.4c.7 1.1 1 2.1.8 2.8c-.3 1-1.8 1.7-3.6 1.7c-1.2 0-2.4-.3-3.6-.8c-3.5-1.5-5.5-4.5-5-6.2c.3-1 1.8-1.7 3.6-1.7m0-2.3c-2.6 0-4.7 1.2-5.4 3.2c-1 3.1 1.8 7.2 6.1 9.1c1.5.6 3 .9 4.3.9c2.6 0 4.7-1.2 5.4-3.2c1-3.1-1.8-7.2-6.1-9.1c-1.5-.6-3-.9-4.3-.9z"></path><path fill="#f29a2e" d="M35 18.4c-3.1-1.1-6.5-1.8-10.2-1.8c-1.1 0-2.1.1-3.1.2c1.8 4.6 2.7 9.6 2.7 14.7c0 5.7-1.2 11.3-3.4 16.3c1.2.2 2.5.2 3.8.2c1.7 0 3.3 0 4.8-.1c-.5-2.5-.7-5.1-.7-7.8c0-7.9 2.1-15.5 6.1-21.7m-20.2.3C5.1 23.2 2.3 33.4 2.3 33.4s.7.6 1 1.3c.3.6-1.8.9-1.2 1.9c1.7 2.8 6.7 6.9 11.9 9.3c2.3-4.3 3.5-9.2 3.5-14.4c0-4.5-.9-8.9-2.7-12.8m45.5 14.8c0-3.3 3.9-5.8 0-10.5c0 0-2.2 2.6-4.3 4.3c-.1 1.3-.2 2.7-.2 4c0 3.6.5 7.2 1.5 10.6c1.9 1 3 2 3 2c3.9-4.6 0-6.9 0-10.4m-11-6.4c-2.8-2.3-5.6-4.4-8.7-6.1c-1.6 3.9-2.5 8.1-2.5 12.5c0 4.3.8 8.4 2.3 12.2c2.9-1 6-2.5 9.7-4.5c-.7-3.2-1-6.5-1-9.9c0-1.3 0-2.8.2-4.2"></path><path fill="#fff" d="M18.4 31.5c0 5.4-1.3 10.5-3.5 14.8c1.5.6 3.2 1.1 5.1 1.4c2.2-4.8 3.5-10.3 3.5-16.1c0-5.2-1-10.1-2.8-14.5c-1.8.3-3.5.8-5 1.4c1.7 3.7 2.7 8.2 2.7 13"></path><path fill="#3e4347" d="M21.6 16.8c-.3 0-.6.1-1 .1c1.8 4.4 2.8 9.3 2.8 14.5c0 5.9-1.3 11.4-3.5 16.1c.3.1.7.1 1 .1c2.2-5 3.4-10.6 3.4-16.3c.1-4.9-.9-9.9-2.7-14.5m-3.2 14.7c0-4.7-1-9.2-2.7-13.1c-.3.1-.6.2-.9.4c1.8 3.9 2.7 8.3 2.7 12.8c0 5.2-1.2 10.1-3.5 14.4c.3.1.6.3.9.4c2.2-4.5 3.5-9.5 3.5-14.9"></path><path fill="#fff" d="M29.8 40.1c0 2.6.3 5.2.7 7.7c3-.2 5.9-.7 9-1.7c-1.5-3.8-2.4-8.1-2.4-12.5c0-4.7.9-9.1 2.5-13c-1.2-.7-2.5-1.3-3.8-1.8c-3.7 5.9-6 13.3-6 21.3"></path><path fill="#3e4347" d="M29.8 40.1c0-8 2.3-15.4 6.1-21.3c-.3-.1-.6-.2-.9-.4c-4 6.2-6.1 13.8-6.1 21.7c0 2.6.2 5.2.7 7.8c.3 0 .6 0 .9-.1c-.4-2.5-.7-5.1-.7-7.7M40.6 21c-.3-.2-.6-.3-.8-.5c-1.6 3.9-2.5 8.3-2.5 13c0 4.5.8 8.7 2.4 12.5l.9-.3c-1.5-3.8-2.3-8-2.3-12.2c-.2-4.4.6-8.6 2.3-12.5"></path><path fill="#fff" d="M50.6 28.1c-.1-.1-.3-.2-.4-.4c-.1 1.3-.2 2.5-.2 3.7c0 3.2.3 6.4 1 9.4c.2-.1.4-.3.7-.4c.8-.5 2.7.2 4.5 1c-.8-3.2-1.3-6.5-1.3-10c0-1.1.1-2.2.1-3.3c-1.5.9-3 1.2-4.4 0"></path><path fill="#3e4347" d="M50 31.4c0-1.2.1-2.4.1-3.6c-.3-.2-.6-.5-.9-.7c-.1 1.5-.2 2.9-.2 4.3c0 3.3.3 6.6 1 9.9c.3-.2.6-.3.9-.5c-.6-3.1-.9-6.2-.9-9.4m5.9-4c-.3.3-.7.5-1 .7c-.1 1.1-.1 2.2-.1 3.3c0 3.5.5 6.9 1.3 10c.4.2.8.4 1.1.6c-1-3.4-1.5-7-1.5-10.6c0-1.4.1-2.7.2-4"></path><path fill="#e07e1e" d="M25.7 28c-2.9 3-3.5 9.7 1.4 10.1c5.9.5 8.8 5 11.7 2c2.9-3 1.9-7.6-1.5-11.1c-3.4-3.6-8.6-4-11.6-1"></path><path fill="#3e4347" d="M25.8 28c-1.5 1.5-2.2 3.7-2.1 5.7c.1 1 .4 2 1.1 2.7c.6.7 1.5 1 2.5 1.1c2.2.1 4.3.9 6.2 1.8c1 .4 1.9.8 2.8 1c.9.1 1.5-.2 2.1-.9c.6-.7 1-1.5 1.2-2.4c.2-.9.1-1.8-.2-2.7c-.5-1.8-1.7-3.5-3-4.9c-1.3-1.3-3-2.4-4.9-2.9c-1-.2-2-.2-3 0c-1 .3-2 .8-2.7 1.5m-.1-.1c1.5-1.6 3.6-2.4 5.9-2.4c2.2 0 4.5.9 6.2 2.5c1.6 1.5 3 3.5 3.6 5.8c.3 1.2.3 2.4 0 3.6c-.3 1.2-.9 2.3-1.8 3.1a5 5 0 0 1-1.6 1.1c-.6.2-1.3.3-1.9.2c-1.2-.2-2.2-.8-3.1-1.2c-1.9-.9-3.7-1.7-5.7-2c-.5-.1-1.1-.2-1.6-.5s-1-.7-1.3-1.1c-.7-1-.9-2.1-.9-3.2s.3-2.2.7-3.2c.2-1 .7-1.9 1.5-2.7"></path><ellipse cx="10.8" cy="32.6" fill="#fcfcfa" rx="5.9" ry="6.3"></ellipse><ellipse cx="10.8" cy="32.6" fill="#29251c" rx="4.1" ry="4.3"></ellipse></symbol>`,
  lizard: `<symbol viewBox="0 0 64 64" id="icon-lizard"><path fill="#83bf4f" d="M58.8 25.5c-.6 0-2.7 1-3.5 1.1c-1.6.1-2.4-.6-1.8-1.8c.3-.5 2-2 2.2-2.5c.7-1.3-1.5-2.2-2.1-1c-.3.5-.4 2.7-.6 3.2c-.5 1-1.8 1.1-2.3.4c-.4-.6-1-2.8-1.4-3.3c-.9-1.2-2.8.1-1.9 1.2c.3.5 2.5 1.8 2.7 3c-2.6-.5-4.1-3-4.9-4.8c.5-.7.9-1.4 1.4-2.1c1.8 1 4 .7 5.5-.9c1.7-2.1 12.3-11.6 9.6-15.1c-2.8-3.5-14.6 4.8-17 6.1c-2 1.1-2.7 3.3-1.9 5.3c-1.6.9-3.8 1.8-6.7 2.6c-1.8-.1-6.2-.8-3.4-5.1c.8.8 1.1 3.1 1.4 3.6c.7 1.4 2.7.2 2-1.2c-.3-.5-2-2-2.4-2.6c-.4-.7.3-1.9 1.4-1.9c.6 0 2.6.8 3.2.8c1.4 0 1.5-2.3.1-2.3c-.6 0-2.7.9-3.3.9c-1.3.1-1.6-1-.8-2.3c.4-.6 2.3-2.1 2.6-2.6c.9-1.4-1-2.5-1.9-1.1c-.3.5-.8 2.8-1.2 3.5c-.8 1.3-1.9 1.6-2.5.4c-.3-.5-.5-2.7-.7-3.2c-.7-1.3-2.7-.1-2 1.1c.3.5 1.9 1.9 2.2 2.4c.5.9-.2 2.1-1.1 2.1c-.7 0-2.9-.8-3.5-.8c-1.4 0-1.5 2.3-.1 2.3c.5 0 2.7-.8 3.8-.5c-.9 1.2-4.3 6.1.2 8.8c-4.9 2.3-11.3 6.2-16.6 11.8c-1.6.4-4.1.4-3.8-3.9c1.1.2 2.6 2.1 3.1 2.4c1.3.8 2.5-1.2 1.1-2c-.5-.3-2.7-.7-3.4-1.1c-.7-.4-.7-1.8.3-2.4c.5-.3 2.7-.6 3.2-.9c1.2-.7.2-2.8-1.1-2c-.5.3-1.9 2.1-2.4 2.4c-1.1.7-1.9 0-1.9-1.6c0-.8.9-3 .9-3.6c0-1.7-2.2-1.7-2.2 0c0 .6.8 2.8.8 3.6c0 1.6-.9 2.3-2 1.6c-.5-.3-1.8-2.1-2.3-2.4c-1.2-.8-2.4 1.2-1.2 2c.5.3 2.6.7 3.2 1c.9.6.9 1.9.2 2.4c-.6.4-2.9.7-3.4 1c-1.2.7-.2 2.8 1.1 2c.4-.3 1.8-2 2.9-2.4c-.2 1.5-.5 6.7 3.9 7.4c-4.1 5.3-8.8 19.7 7.8 25.8c16.2 6 37.3-4.2 41.4-23.5c0 0-9 24-31.1 19.3c-6.7-1.4-15.4-5.8-7.2-12.2c1.1-.8 2.2-1.6 3.5-2.4c1 4.4 5.7 4.9 8.1 4.9c-.1 1.2-2.1 2.6-2.4 3.1c-.8 1.3 1.2 2.5 2 1.1c.3-.5.7-2.7 1.1-3.4c.4-.7 1.8-.7 2.4.3c.3.5.6 2.7.9 3.2c.7 1.2 2.8.2 2-1.1c-.3-.5-2.1-1.9-2.4-2.4c-.7-1.1 0-1.9 1.6-1.9c.8 0 3 .9 3.6.9c1.7 0 1.7-2.2 0-2.2c-.6 0-2.8.8-3.6.8c-1.6 0-2.3-.9-1.6-2c.3-.5 2.1-1.8 2.4-2.3c.8-1.2-1.2-2.4-2-1.2c-.3.5-.7 2.6-.9 3.2c-.6.9-1.9.9-2.4.2c-.4-.6-.7-2.9-1-3.4c-.7-1.2-2.8-.2-2 1.1c.3.5 2.2 2 2.4 3.2c-2.2-.3-3.3-1.5-3.8-3c-.1-.5-.1-1.2.5-2.1c1.4-.8 2.6-1.6 3.6-2.4c4.9-3.9 7.5-7.6 9.5-10.9c1.3 3.7 5.4 3.6 7.7 3.2c.1 1.2-1.9 2.9-2.1 3.4c-.7 1.4 1.4 2.4 2.1.9c.3-.5.4-2.8.7-3.4c.4-.7 1.7-.8 2.4 0c.3.5.9 2.6 1.2 3.1c.8 1.2 2.8-.1 1.9-1.2c-.3-.5-2.3-1.7-2.6-2.1c-.8-1-.2-1.9 1.4-2c.8 0 3 .6 3.7.6c1.3-.2 1.1-2.3-.5-2.2"></path><path fill="#e8e8e8" d="M50.4 9.5c-1.2 1-3.1.8-4.1-.4c-1-1.2-.8-3 .4-4c1.2-1 3.1-.8 4.1.4c1.1 1.2.9 3-.4 4"></path><path fill="#3e4347" d="M49.5 7.2c-.6.5-1.5.4-2-.2c-.5-.6-.4-1.5.2-2c.6-.5 1.5-.4 2 .2c.5.6.4 1.5-.2 2"></path><path fill="#e8e8e8" d="M56.3 16.6c-1.2 1-3.1.8-4.1-.4c-1-1.2-.8-3 .4-4c1.2-1 3.1-.8 4.1.4c1 1.2.8 3-.4 4"></path><path fill="#3e4347" d="M53.4 14.5c.6-.5 1.5-.4 2 .2c.5.6.4 1.5-.2 2c-.6.5-1.5.4-2-.2s-.4-1.4.2-2"></path><path fill="#c7e755" d="M39.2 56c-1.2.3-2.4.4-3.7.5c-2 2-1.8 2.6 1.8 4c1.3-.4 2.5-.9 3.8-1.4c-2.3-1-2.5-.9-1.9-3.1"></path><path fill="#6adbc6" d="M29.2 56.1c-.3 0-2.5-.6-3.4-.9c-3.3 2.5.4 4.1 1.1 6.7c0 0 1.6.3 4.9-.2c-.9-3.1-4.7-3-2.6-5.6"></path><path fill="#c7e755" d="M21.4 53.3c-1.3-.8-2.4-1.7-3-2.7c-2.9 4.1-5.6-.8-4.2 7.8c1.7 1.3 4.5 2 4.5 2c-1.7-6-2.4-4.3 2.7-7.1"></path><path fill="#6adbc6" d="M18.1 49.9c-.4-1.2-.2-2.5.9-4c-6.7-10.3-9.4-.2-12.5-1.5c-.1 1.5-.1 3 .3 4.5c6.7-.7 2.6-6.8 11.3 1"></path><path fill="#c7e755" d="M22 43.3c1.2-.9 2.6-1.7 3.9-2.6c-10.2-6.8 5.5-8-12.4-9.9c-1 1.1-2 2.2-3 3.5c13 3.2 1.5 2.7 11.5 9"></path><path fill="#6adbc6" d="M20.6 24.6c13.4 1.5-.2 4.5 9.9 13.3c2.3-1.2 3.9-2.8 3.9-2.8c-7.3-6.5 9.5-9.4-10-13c-1.8.9-3.8 2.5-3.8 2.5"></path><path fill="#c7e755" d="M31.7 18.3c11.5 4.4 4.2 5.9 7.7 11.7c2-2.2 3.2-4.7 3.2-4.7c.8-8.7-2.1-4.6-6.7-8.5c-.1.1-2.7.9-4.2 1.5"></path></symbol>`,
  "magnifying-glass": `<symbol viewBox="0 0 256 256" id="icon-magnifying-glass"><path d="m229.7 218.3l-43.3-43.2a92.2 92.2 0 1 0-11.3 11.3l43.2 43.3a8.2 8.2 0 0 0 11.4 0a8.1 8.1 0 0 0 0-11.4ZM40 116a76 76 0 1 1 76 76a76.1 76.1 0 0 1-76-76Z"></path></symbol>`,
  "paw-print": `<symbol viewBox="0 0 512 512" id="icon-paw-print"><path d="M382.825 304.576a131.562 131.562 0 0 0-253.65 0l-18.248 66.15A80 80 0 0 0 188.046 472h135.908a80 80 0 0 0 77.119-101.274Zm-20.682 116.5A47.638 47.638 0 0 1 323.954 440H188.046a48 48 0 0 1-46.272-60.765l18.248-66.149a99.563 99.563 0 0 1 191.956 0l18.248 66.149a47.636 47.636 0 0 1-8.083 41.845ZM146.1 230.31c2.784-17.4-.908-36.027-10.4-52.463s-23.78-28.947-40.237-35.236c-17.624-6.731-35.6-5.659-50.634 3.017c-29.887 17.256-37.752 59.785-17.529 94.805c9.489 16.436 23.778 28.95 40.235 35.236a64.058 64.058 0 0 0 22.863 4.371a55.133 55.133 0 0 0 27.771-7.389c15.025-8.677 24.945-23.714 27.931-42.341Zm-31.6-5.058c-1.43 8.929-5.81 15.92-12.333 19.686S87.4 249 78.95 245.775c-9.613-3.671-18.115-11.251-23.941-21.342c-11.2-19.4-8.538-42.8 5.82-51.092a23.483 23.483 0 0 1 11.847-3.058a31.951 31.951 0 0 1 11.368 2.217c9.613 3.673 18.115 11.252 23.941 21.343s8.139 21.248 6.515 31.409Zm35.066-61.235c11.362 9.083 24.337 13.813 37.458 13.812a54.965 54.965 0 0 0 11.689-1.261c33.723-7.331 54.17-45.443 45.58-84.958c-4.03-18.546-13.828-34.817-27.588-45.818c-14.735-11.78-32.189-16.239-49.147-12.551c-33.722 7.33-54.169 45.442-45.58 84.957c4.031 18.547 13.829 34.818 27.588 45.819Zm24.788-99.506a22.258 22.258 0 0 1 4.732-.5c5.948 0 12.066 2.327 17.637 6.781c8.037 6.425 13.826 16.234 16.3 27.621c4.76 21.895-4.906 43.368-21.107 46.89c-7.361 1.6-15.305-.628-22.367-6.275c-8.037-6.426-13.826-16.235-16.3-27.621c-4.761-21.901 4.905-43.374 21.105-46.896Zm292.817 81.117c-15.028-8.676-33.013-9.748-50.634-3.017c-16.457 6.287-30.746 18.8-40.235 35.236s-13.182 35.067-10.4 52.463c2.982 18.627 12.9 33.664 27.931 42.341a55.123 55.123 0 0 0 27.771 7.389a64.054 64.054 0 0 0 22.863-4.371c16.457-6.286 30.746-18.8 40.235-35.236c20.221-35.02 12.356-77.549-17.531-94.805Zm-10.18 78.805c-5.826 10.091-14.328 17.671-23.941 21.342c-8.446 3.228-16.692 2.931-23.215-.837s-10.9-10.757-12.333-19.686c-1.626-10.161.686-21.314 6.513-31.4s14.328-17.67 23.941-21.343a31.955 31.955 0 0 1 11.368-2.221a23.483 23.483 0 0 1 11.847 3.058c14.358 8.285 17.023 31.682 5.82 51.087Zm-143.704-47.865a54.965 54.965 0 0 0 11.689 1.261c13.12 0 26.1-4.729 37.458-13.812c13.759-11 23.557-27.272 27.588-45.818c8.589-39.515-11.858-77.627-45.58-84.957c-16.957-3.686-34.412.77-49.147 12.551c-13.76 11-23.558 27.272-27.588 45.817c-8.59 39.515 11.857 77.627 45.58 84.958Zm-14.31-78.16c2.474-11.387 8.263-21.2 16.3-27.621c5.572-4.454 11.689-6.781 17.637-6.781a22.258 22.258 0 0 1 4.732.5c16.2 3.522 25.866 25 21.107 46.89c-2.476 11.387-8.265 21.2-16.3 27.622c-7.061 5.646-15 7.874-22.367 6.275c-16.203-3.517-25.869-24.993-21.109-46.885Z"></path></symbol>`,
  plus: '<symbol viewBox="0 0 24 24" id="icon-plus"><path d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"></path></symbol>',
};

/** @typedef {keyof defs} SvgIconNames */

export default function SvgSymbols({}) {
  return (
    <svg
      aria-hidden="true"
      style={{
        position: "absolute",
        width: "0",
        height: "0",
        overflow: "hidden",
      }}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs dangerouslySetInnerHTML={{ __html: Object.values(defs).join() }}>
        {/* <symbol viewBox="0 0 256 256" id="icon-magnifying-glass">
          <path
           
            d="m229.7 218.3l-43.3-43.2a92.2 92.2 0 1 0-11.3 11.3l43.2 43.3a8.2 8.2 0 0 0 11.4 0a8.1 8.1 0 0 0 0-11.4ZM40 116a76 76 0 1 1 76 76a76.1 76.1 0 0 1-76-76Z"
          ></path>
        </symbol> */}
      </defs>
    </svg>
  );
}
