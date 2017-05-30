module.exports = {
	reportOne: {
    city: 'San Francisco',
    locationType: 'Hotel/Motel',
    geolocation: { type: 'Point', coordinates: [122.41, 37.77] },
    gender: 'female',
    date: '2017/01/01',
    assaultType: ['Robbery', 'Client drunk/high'],
    assaultDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse molestie rutrum lorem. Green pants. Cras feugiat nulla augue, eget fringilla odio ultrices a. Duis eu bibendum metus.',
    perpetrator: {
      name: 'Bobby',
      phone: '5555555555',
      email: 'test@test.com',
      perpType: 'cop',
      gender: 'male',
      age: '32',
      race: 'white',
      height: "5'10",
      hair: 'black hair',
      attributes: 'tattoo on right arm'
    }
  },

  reportTwo: {
    city: 'Oakland',
    locationType: 'Hotel/Motel',
    geolocation: { type: 'Point', coordinates: [122.27, 37.80] },
    gender: 'female',
    date: '2016/12/01',
    assaultType: ['Assault', 'Client drunk/high'],
    assaultDescription: 'Lorem ipsum dolor rutrum blue jacket philipa sit amet, consectetur adipiscing elit. Suspendisse molestie lorem. Cras feugiat nulla augue, eget fringilla odio ultrices a. Duis eu bibendum metus.',
    perpetrator: {
      name: 'Philip',
      phone: '5555555555',
      email: 'test2@test.com',
      perpType: 'client',
      gender: 'male',
      age: '24',
      race: 'white',
      height: "5'11",
      hair: 'blond hair',
      attributes: 'scar on left arm'
    },
    edited: true,
    editedReport: {
      title: 'Listen seeing you got ritualistic',
      content: 'Lorem ipsum dolor sit amet, consectetur blue light elit. Suspendisse molestie rutrum lorem.'
    }
  },

  editedReportOne: {
    title: 'Leave feathers behind',
    content: 'Lorem ipsum blue linen, consectetur adipiscing elit. Suspendisse molestie rutrum lorem.'
  },

  serviceOne: {
    name: 'St James Infirmary',
    streetAddress: '234 Eddy Street',
    city: 'San Francisco',
    state: 'CA',
    zipCode: '94102',
    phone: '4155584944',
    type: 'health'
  },

  serviceTwo: {
    name: 'General Service',
    streetAddress: '112 Telegraph Street',
    city: 'Oakland',
    state: 'CA',
    zipCode: '94111',
    phone: '4155583333',
    type: 'legal'
  },

  adminUserOne: {
    email: 'test@test.com',
    password: '123456'
  }
};
