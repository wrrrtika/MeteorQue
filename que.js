if (Meteor.isClient) {
  Template.newTicket.events({
    'submit.new-ticket'
  })
 
  Template.ticketlist.helpers({
    tickets: [
    {title: "Ticket 1", requester: "Pete"}
    {title: "Ticket 2", requester: "Sue"}
    {title: "Ticket 3", requester: "Omar"}
    ];
   }
  });


Template.body.helpers({
  'submit .new-ticket': function(event){
   

   var title = event.target.text.value;
   
   Tickets.insert({title: title, requester:"JON"})

   return false
  }
});

Template.ticketList.helpers({
  tickets: function () {
    return Tickets.find({});
  }
  });
