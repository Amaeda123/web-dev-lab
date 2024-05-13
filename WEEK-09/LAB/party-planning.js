function generateInvitations(guests, ...additionalDetails) {
  return guests.map((guest) => {
    let invitationMessage = `Dear ${guest.name},\nYou are invited to the party!`;

    // Add additional details, if provided
    if (additionalDetails.length > 0) {
      invitationMessage += `\n${additionalDetails.join("\n")}`;
    }

    return invitationMessage;
  });
}

const guests = [
  { name: "Bhumika", age: 23, rsvpStatus: "Yes" },
  { name: "Pari", age: 22, rsvpStatus: "No" },
  { name: "Preeti", age: 22, rsvpStatus: "Yes" },
];

const invitations = generateInvitations(
  guests,
  "Please bring your favorite dish!",
  "Party starts at 7:00 PM"
);

invitations.forEach((invitation) => console.log(invitation));
