import React from 'react';

const GroupMembersList = () => {
  // Dummy data representing group members' names
  const groupMembers = [
    'Andinet Dereje',
    'Ammar Mohammed',
    'Amanuel addisu',
    'amanuel firew',
    'anteneh getnet'
  ];

  return (
    <div>
      <h2>Group Members</h2>
      <ul>
        
        {groupMembers.map((member, index) => (
          <li key={index}>{member}</li>
        ))}
      </ul>
    </div>
  );
};

export default GroupMembersList;
