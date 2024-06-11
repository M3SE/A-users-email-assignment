## A-users-email-assignment

Create an object that models the data of your favorite email application.

 

Open the email application and take a look at the application.
What items do you notice? Make a list of those items (ex. emails, my name, etc.)
Make a detailed outline of the data hierarchy.

Ex.

Gmail

-  mailboxes

    -- inbox

    -- junk

    -- sent

    -- etc.

- contacts

    -- Erin

    -- Matt

    -- Julian

- emails

4. For each bullet in your outline, decide if it is a primitive, array, or object. Create a JavaScript file and use this information to create an object literal that models the application's data. E.g. -

 

let appData = {
        name: 'Gmail',
        mailboxes: [
                'inbox',
                'junk',
                'sent',
        ],
        contacts: [
                {name: 'Erin', lastMessage: "I wont be in class today"},
                {name: 'Matt', lastMessage: "Today, we are going to rock it!"}
        ]
        
        // Etc...
}
 
 

Add as much detail as you'd like. Nest objects inside of arrays and arrays inside of objects multiple levels deep. Ask yourself if some of the primitives you've created could be objects instead.

 

5. Once you've composed your object, write some code to address it.

Get a list of mailbox names
Get a list of emails
Get the text of the second email in the visible list
Mark an email as sent
Add a draft email to the drafts mailbox
 

Complete all of the items and submit them via your GitHub repo. It might be a good idea to have one repo for all these JS assignments to push them all to one but only send the link to the file itself, not the whole repo if you do this. 