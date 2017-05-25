module.exports = {
	reportOne: {
    city: 'San Francisco',
    locationType: 'Hotel/Motel',
    geolocation: { type: 'Point', coordinates: [122.41, 37.77] },
    gender: 'female',
    date: '05/12/2017',
    assaultType: ['Robbery', 'Client drunk/high'],
    assaultDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse molestie rutrum lorem. Cras feugiat nulla augue, eget fringilla odio ultrices a. Duis eu bibendum metus.',
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

	editedReportOne: {
		title: 'Listen seeing you got ritualistic',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse molestie rutrum lorem.'
    geolocation: { type: 'Point', coordinates: [122.41, 37.77] }
	},

  serviceOne: {
    name: 'St James Infirmary',
    streetAddress: '234 Eddy Street',
    city: 'San Francisco',
    state: 'CA',
    zipCode: '94102',
    phone: '4155584944',
    serviceType: 'health'
  }
};
