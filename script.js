//const PastebinAPI = require('pastebin-ts');
import PastebinAPI from 'pastebin-ts';

const pastebin = new PastebinAPI({
    'api_dev_key' : 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    'api_user_name' : 'PastebinUserName',
    'api_user_password' : 'PastebinPassword'
});
 
pastebin
    .createPasteFromFile({
        'file': './uploadthistopastebin.txt',
        'title': 'pastebin-js test'
    })
    .then((data) => {
        // we have succesfully pasted it. Data contains the id
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });