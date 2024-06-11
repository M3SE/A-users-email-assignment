const gmail = {
    user: {
        name: 'Gmail',
        email: 'simonc691@gmail.com',
    },
    inbox: [
        'primary',
        'promotions',
        'social',
    ],
    starred: [
        'from',
        'Any time',
        'Has attachment',
        'To',
        'Is unread'
    ],
    sent: [
        {name: 'Tom Chang', email: 'tommyc691@yahoo.com', lastmessage: "boarding pass"},
        {name: 'CTAC', email: 'ctac@stiegleredtech.org', lastmessage: "Yes, I accept the offer."}
    ],
    drafts: [] // Added drafts mailbox
};

// Address code
let user = gmail.user;
console.log("User info:", user);

let inbox = gmail.inbox;
console.log("Mailbox info:", inbox);

let starred = gmail.starred;
console.log("Starred filters:", starred);

let sent = gmail.sent;
console.log("Emails info:", sent);

let mailboxes = Object.keys(gmail).filter(key => key !== 'user' && key !== 'sent' && key !== 'drafts');
console.log("Mailbox Names:", mailboxes);

let secondEmailText = gmail.sent[1].lastmessage;
console.log("Text of the Second Email:", secondEmailText);

// Draft message
let draftEmail = { name: 'Jane Smith', email: 'janesmith@example.com', lastmessage: "This is a draft email." };

// Function to add a draft email
function addDraft(email) {
    gmail.drafts.push(email);
    console.log("Draft email added:", email);
}

// Function to mark an email as sent
function markAsSent(email) {
    gmail.sent.push(email);
    console.log("Email sent:", email);
}


addDraft(draftEmail);


markAsSent(draftEmail);


console.log("Updated Sent Emails:", gmail.sent);
console.log("Drafts:", gmail.drafts);
