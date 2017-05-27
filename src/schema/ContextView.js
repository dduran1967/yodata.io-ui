import React from 'react'
import { compose } from 'recompose'
import Debug from '../component/Debug'

// const SAMPLE_MESSAGE = {
//   acceptedByMember: false,
//   assignments: [
//     {
//       assignmentType: 'Lead',
//       ownerKey: 'C90059FD64E6403E9C9A7BE7AAA60C82',
//       ownerType: 'Office',
//       timestampEntered: '2017-04-22T14:40:46.0775524-05:00'
//     }
//   ],
//   contactEvent: {
//     primaryEvent: 'Updated',
//     secondaryEvents: [
//       'ExternalUpdate',
//       'Updated'
//     ]
//   },
//   contactKey: '80803473-7ddb-4fdc-be55-b29d642c7a5e',
//   emailAddresses: [
//     {
//       emailAddress: 'jennifer.kowitt@gmail.com',
//       emailAddressKey: '73881931-3e28-495f-ac05-f800adb559ec',
//       emailType: 'primary',
//       timestampEntered: '2017-04-22T14:40:46.0775524-05:00',
//       timestampModified: '2017-04-22T14:40:46.1556819-05:00',
//       usedForApm: true
//     }
//   ],
//   firstName: 'Jennifer',
//   fullName: 'Jennifer Kowitt',
//   lastName: 'Kowitt',
//   leadSources: [
//     {
//       isLead: true,
//       leadSource: 'Office Website',
//       originalReferrerUrl: '',
//       subLeadSource: 'Saved Property',
//       timestampEntered: '2017-04-22T14:40:46.0775524-05:00'
//     }
//   ],
//   middleName: '',
//   originatingSystemContactKey: '',
//   originatingSystemName: 'BrokerOffice',
//   phoneNumbers: [
//     {
//       phoneNumber: '9084192418',
//       phoneNumberKey: '7f375a61-778c-4c1b-9f6b-e1d63a19334f',
//       phoneNumberType: 'Work',
//       timestampEntered: '2017-04-22T14:40:46.0775524-05:00',
//       timestampModified: '2017-04-22T14:40:46.1556819-05:00'
//     }
//   ],
//   preferredContactMethod: 'No Preference',
//   preferredTime: '',
//   properties: [
//     {
//       bathroomsTotal: '3',
//       bedroomsTotal: '4',
//       city: 'W Hartford',
//       contactNote: 'Convenient location to West Hartford Center, schools, Stop & Shop and the Mall.  Meticulous Tudor Colonial with 2460 square feet.  Outstanding family home featuring renovated baths and ESK kitchen with SS appliances plus a den/office, lovely formal LR/FP and elegant DR, plus a 24 x 9 sunroom. Enjoy the LL Rec Rm (406 Sq. Ft/FP) and the 3rd Floor bonus room (420 Sq. Ft) in addition to 4 Bedrooms and 2.1 Baths. A/C in kitchen only and throughout the second floor. You will appreciate your deck (404 Sq. Ft) as you view and enjoy the tranquility of your professionally landscaped yard with perennials popping up all around.    This home is a pleasure to present to you.',
//       cooling: 'Central Air',
//       country: 'USA',
//       countyOrParish: 'Hartford',
//       daysOnMarket: 5,
//       directions: 'Farmington Ave to Ridgewood Road',
//       exteriorFeatures: 'Fruit Trees, Garden, Gutters, Exterior Lighting, Sidewalks, Landscaped',
//       heating: 'Gas Heat',
//       interiorFeatures: 'Attic Storage, Attic Walk-up, Smoke Alarm',
//       listAgentEmail: 'hsteel@bhhsne.com',
//       listAgentFirstName: 'Hannah',
//       listAgentFullName: 'Hannah Steel',
//       listAgentLastName: 'Steel',
//       listAgentMlsId: 'STEELH',
//       listAor: 'ctconnmls',
//       listBrokerName: 'BHHS New England Properties',
//       listBrokerPhone: '(860) 521-8100',
//       listOfficeMlsId: 'BHHS04',
//       listPrice: 545000,
//       listingContractDate: '2017-04-17T16:03:00',
//       listingId: 'G10212776',
//       listingKey: '5e4afc46-cd62-4422-a058-b27a1a57451b',
//       listingTypeName: 'Residential',
//       lotSizeArea: 0.27,
//       mlsStatus: 'Active',
//       poolFeatures: 'Pool',
//       postalCode: '06107',
//       propertySubType: 'Colonial',
//       propertyType: 'Single Family',
//       propertyUrl: 'http://www.berkshirehathawayhs.com/new-england-properties-ct301/G10212776',
//       stateOrProvince: 'CT',
//       streetName: 'Ridgewood Rd',
//       streetNumber: '50',
//       streetNumberNumeric: 50,
//       subdivisionName: 'W Hartford (2)',
//       timestampEntered: '2017-04-22T14:40:46.0775524-05:00',
//       timestampModified: '2017-04-22T14:40:46.0775524-05:00',
//       yearBuilt: 1939
//     }
//   ],
//   timestampEntered: '2017-04-22T14:40:46.0775524-05:00',
//   timestampModified: '2017-04-22T14:40:46.0775524-05:00'
// }

const CONTEXT = {
  acceptedByMember: false,
  assignments: [
    {
      assignmentType: 'Lead',
      ownerKey: 'C90059FD64E6403E9C9A7BE7AAA60C82',
      ownerType: 'Office',
      timestampEntered: '2017-04-22T14:40:46.0775524-05:00'
    }
  ],
  contactEvent: {
    primaryEvent: 'Updated',
    secondaryEvents: [
      'ExternalUpdate',
      'Updated'
    ]
  },
  contactKey: '80803473-7ddb-4fdc-be55-b29d642c7a5e',
  emailAddresses: [
    {
      emailAddress: 'jennifer.kowitt@gmail.com',
      emailAddressKey: '73881931-3e28-495f-ac05-f800adb559ec',
      emailType: 'primary',
      timestampEntered: '2017-04-22T14:40:46.0775524-05:00',
      timestampModified: '2017-04-22T14:40:46.1556819-05:00',
      usedForApm: true
    }
  ],
  firstName: 'Jennifer',
  fullName: 'Jennifer Kowitt',
  lastName: 'Kowitt',
  leadSources: [
    {
      isLead: true,
      leadSource: 'Office Website',
      originalReferrerUrl: '',
      subLeadSource: 'Saved Property',
      timestampEntered: '2017-04-22T14:40:46.0775524-05:00'
    }
  ],
  middleName: '',
  originatingSystemContactKey: '',
  originatingSystemName: 'BrokerOffice',
  phoneNumbers: [
    {
      phoneNumber: '9084192418',
      phoneNumberKey: '7f375a61-778c-4c1b-9f6b-e1d63a19334f',
      phoneNumberType: 'Work',
      timestampEntered: '2017-04-22T14:40:46.0775524-05:00',
      timestampModified: '2017-04-22T14:40:46.1556819-05:00'
    }
  ],
  preferredContactMethod: 'No Preference',
  preferredTime: '',
  properties: [
    {
      bathroomsTotal: '3',
      bedroomsTotal: '4',
      city: 'W Hartford',
      contactNote: 'Convenient location to West Hartford Center, schools, Stop & Shop and the Mall.  Meticulous Tudor Colonial with 2460 square feet.  Outstanding family home featuring renovated baths and ESK kitchen with SS appliances plus a den/office, lovely formal LR/FP and elegant DR, plus a 24 x 9 sunroom. Enjoy the LL Rec Rm (406 Sq. Ft/FP) and the 3rd Floor bonus room (420 Sq. Ft) in addition to 4 Bedrooms and 2.1 Baths. A/C in kitchen only and throughout the second floor. You will appreciate your deck (404 Sq. Ft) as you view and enjoy the tranquility of your professionally landscaped yard with perennials popping up all around.    This home is a pleasure to present to you.',
      cooling: 'Central Air',
      country: 'USA',
      countyOrParish: 'Hartford',
      daysOnMarket: 5,
      directions: 'Farmington Ave to Ridgewood Road',
      exteriorFeatures: 'Fruit Trees, Garden, Gutters, Exterior Lighting, Sidewalks, Landscaped',
      heating: 'Gas Heat',
      interiorFeatures: 'Attic Storage, Attic Walk-up, Smoke Alarm',
      listAgentEmail: 'hsteel@bhhsne.com',
      listAgentFirstName: 'Hannah',
      listAgentFullName: 'Hannah Steel',
      listAgentLastName: 'Steel',
      listAgentMlsId: 'STEELH',
      listAor: 'ctconnmls',
      listBrokerName: 'BHHS New England Properties',
      listBrokerPhone: '(860) 521-8100',
      listOfficeMlsId: 'BHHS04',
      listPrice: 545000,
      listingContractDate: '2017-04-17T16:03:00',
      listingId: 'G10212776',
      listingKey: '5e4afc46-cd62-4422-a058-b27a1a57451b',
      listingTypeName: 'Residential',
      lotSizeArea: 0.27,
      mlsStatus: 'Active',
      poolFeatures: 'Pool',
      postalCode: '06107',
      propertySubType: 'Colonial',
      propertyType: 'Single Family',
      propertyUrl: 'http://www.berkshirehathawayhs.com/new-england-properties-ct301/G10212776',
      stateOrProvince: 'CT',
      streetName: 'Ridgewood Rd',
      streetNumber: '50',
      streetNumberNumeric: 50,
      subdivisionName: 'W Hartford (2)',
      timestampEntered: '2017-04-22T14:40:46.0775524-05:00',
      timestampModified: '2017-04-22T14:40:46.0775524-05:00',
      yearBuilt: 1939
    }
  ],
  timestampEntered: '2017-04-22T14:40:46.0775524-05:00',
  timestampModified: '2017-04-22T14:40:46.0775524-05:00'
}

const ContextView = compose(
)(props => {
  return (
    <Debug context={CONTEXT}/>
  )
})

export default ContextView
