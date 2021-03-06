export default {
  APIReference:                     {
    description: 'Reference documentation for application programming interfaces (APIs).',
    id:          'APIReference',
    label:       'APIReference',
    subClassOf:  'TechArticle',
    test:        'test',
    type:        'Type'
  },
  AboutPage:                        {
    description: 'Web page type: About page.',
    id:          'AboutPage',
    label:       'AboutPage',
    subClassOf:  'WebPage',
    type:        'Type'
  },
  AcceptAction:                     {
    description: 'The act of committing to/adopting an object.',
    id:          'AcceptAction',
    label:       'AcceptAction',
    subClassOf:  'AllocateAction',
    type:        'Type'
  },
  Accommodation:                    {
    description: 'An accommodation is a place that can accommodate human beings, e.g. a hotel room, a camping pitch, or a meeting room. Many accommodations are for overnight stays, but this is not a mandatory requirement.\nFor more specific types of accommodations not defined in schema.org, one can use additionalType with external vocabularies.\n',
    id:          'Accommodation',
    label:       'Accommodation',
    source:      'https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology',
    subClassOf:  'Place',
    type:        'Type'
  },
  AccountingService:                {
    description: 'Accountancy business.\nAs a LocalBusiness it can be described as a provider of one or more Service(s).',
    id:          'AccountingService',
    label:       'AccountingService',
    subClassOf:  'FinancialService',
    type:        'Type'
  },
  AchieveAction:                    {
    description: 'The act of accomplishing something via previous efforts. It is an instantaneous action rather than an ongoing process.',
    id:          'AchieveAction',
    label:       'AchieveAction',
    subClassOf:  'Action',
    type:        'Type'
  },
  Action:                           {
    description: 'An action performed by a direct agent and indirect participants upon a direct object.    Optionally happens at a location with the help of an inanimate instrument.  The execution of the action may produce a result. Specific action sub-type documentation specifies the exact expectation of each argument/role \n \n',
    id:          'Action',
    label:       'Action',
    source:      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_ActionCollabClass',
    subClassOf:  'Thing',
    type:        'Type'
  },
  ActionStatusType:                 {
    description: 'The status of an Action.',
    id:          'ActionStatusType',
    label:       'ActionStatusType',
    subClassOf:  'Enumeration',
    type:        'Type'
  },
  ActivateAction:                   {
    description: 'The act of starting or activating a device or application (e.g. starting a timer or turning on a flashlight).',
    id:          'ActivateAction',
    label:       'ActivateAction',
    subClassOf:  'ControlAction',
    type:        'Type'
  },
  ActiveActionStatus:               {
    description: [
      'An in-progress action (e.g, while watching the movie, or driving to a location).'
    ],
    id:          'ActiveActionStatus',
    label:       [
      'ActiveActionStatus'
    ],
    type:        [
      'ActionStatusType'
    ]
  },
  AddAction:                        {
    description: 'The act of editing by adding an object to a collection.',
    id:          'AddAction',
    label:       'AddAction',
    subClassOf:  'UpdateAction',
    type:        'Type'
  },
  AdministrativeArea:               {
    description: 'A geographical region, typically under the jurisdiction of a particular government.',
    id:          'AdministrativeArea',
    label:       'AdministrativeArea',
    subClassOf:  'Place',
    type:        'Type'
  },
  AdultEntertainment:               {
    description: 'An adult entertainment establishment.',
    id:          'AdultEntertainment',
    label:       'AdultEntertainment',
    subClassOf:  'EntertainmentBusiness',
    type:        'Type'
  },
  AggregateOffer:                   {
    description: 'When a single product is associated with multiple offers (for example, the same pair of shoes is offered by different merchants), then AggregateOffer can be used.',
    id:          'AggregateOffer',
    label:       'AggregateOffer',
    subClassOf:  'Offer',
    type:        'Type'
  },
  AggregateRating:                  {
    description: 'The average rating based on multiple ratings or reviews.',
    id:          'AggregateRating',
    label:       'AggregateRating',
    subClassOf:  'Rating',
    type:        'Type'
  },
  AgreeAction:                      {
    description: 'The act of expressing a consistency of opinion with the object. An agent agrees to/about an object (a proposition, topic or theme) with participants.',
    id:          'AgreeAction',
    label:       'AgreeAction',
    subClassOf:  'ReactAction',
    type:        'Type'
  },
  Airline:                          {
    description: 'An organization that provides flights for passengers.',
    id:          'Airline',
    label:       'Airline',
    subClassOf:  'Organization',
    type:        'Type'
  },
  Airport:                          {
    description: 'An airport.',
    id:          'Airport',
    label:       'Airport',
    subClassOf:  'CivicStructure',
    type:        'Type'
  },
  AlbumRelease:                     {
    description: [
      'AlbumRelease.'
    ],
    id:          'AlbumRelease',
    label:       [
      'AlbumRelease'
    ],
    source:      [
      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ'
    ],
    type:        [
      'MusicAlbumReleaseType'
    ]
  },
  AlignmentObject:                  {
    description: 'An intangible item that describes an alignment between a learning resource and a node in an educational framework.',
    id:          'AlignmentObject',
    label:       'AlignmentObject',
    source:      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_LRMIClass',
    subClassOf:  'Intangible',
    type:        'Type'
  },
  AllWheelDriveConfiguration:       {
    description: [
      'All-wheel Drive is a transmission layout where the engine drives all four wheels.'
    ],
    id:          'AllWheelDriveConfiguration',
    label:       [
      'AllWheelDriveConfiguration'
    ],
    source:      [
      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group'
    ],
    type:        [
      'DriveWheelConfigurationValue'
    ]
  },
  AllocateAction:                   {
    description: 'The act of organizing tasks/objects/events by associating resources to it.',
    id:          'AllocateAction',
    label:       'AllocateAction',
    subClassOf:  'OrganizeAction',
    type:        'Type'
  },
  AmusementPark:                    {
    description: 'An amusement park.',
    id:          'AmusementPark',
    label:       'AmusementPark',
    subClassOf:  'EntertainmentBusiness',
    type:        'Type'
  },
  AnimalShelter:                    {
    description: 'Animal shelter.',
    id:          'AnimalShelter',
    label:       'AnimalShelter',
    subClassOf:  'LocalBusiness',
    type:        'Type'
  },
  Answer:                           {
    description: 'An answer offered to a question; perhaps correct, perhaps opinionated or wrong.',
    id:          'Answer',
    label:       'Answer',
    source:      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_QAStackExchange',
    subClassOf:  'Comment',
    type:        'Type'
  },
  Apartment:                        {
    description: 'An apartment (in American English) or flat (in British English) is a self-contained housing unit (a type of residential real estate) that occupies only part of a building (Source: Wikipedia, the free encyclopedia, see <a href="http://en.wikipedia.org/wiki/Apartment">http://en.wikipedia.org/wiki/Apartment</a>).',
    id:          'Apartment',
    label:       'Apartment',
    source:      'https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology',
    subClassOf:  'Accommodation',
    type:        'Type'
  },
  ApartmentComplex:                 {
    description: 'Residence type: Apartment complex.',
    id:          'ApartmentComplex',
    label:       'ApartmentComplex',
    subClassOf:  'Residence',
    type:        'Type'
  },
  AppendAction:                     {
    description: 'The act of inserting at the end if an ordered collection.',
    id:          'AppendAction',
    label:       'AppendAction',
    subClassOf:  'InsertAction',
    type:        'Type'
  },
  ApplyAction:                      {
    description: '<p>The act of registering to an organization/service without the guarantee to receive it.</p>\n<p>Related actions:</p>\n<ul>\n<li><a class="localLink" href="/RegisterAction">RegisterAction</a>: Unlike RegisterAction, ApplyAction has no guarantees that the application will be accepted.</li>\n</ul>',
    id:          'ApplyAction',
    label:       'ApplyAction',
    subClassOf:  'OrganizeAction',
    type:        'Type'
  },
  Aquarium:                         {
    description: 'Aquarium.',
    id:          'Aquarium',
    label:       'Aquarium',
    subClassOf:  'CivicStructure',
    type:        'Type'
  },
  ArriveAction:                     {
    description: 'The act of arriving at a place. An agent arrives at a destination from a fromLocation, optionally with participants.',
    id:          'ArriveAction',
    label:       'ArriveAction',
    subClassOf:  'MoveAction',
    type:        'Type'
  },
  ArtGallery:                       {
    description: 'An art gallery.',
    id:          'ArtGallery',
    label:       'ArtGallery',
    subClassOf:  'EntertainmentBusiness',
    type:        'Type'
  },
  Article:                          {
    description: 'An article, such as a news article or piece of investigative report. Newspapers and magazines have articles of many different types and this is intended to cover them all.</p>\n<p>See also <a href="http://blog.schema.org/2014/09/schemaorg-support-for-bibliographic_2.html">blog post</a>.',
    id:          'Article',
    label:       'Article',
    source:      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_rNews',
    subClassOf:  'CreativeWork',
    type:        'Type'
  },
  AskAction:                        {
    description: '<p>The act of posing a question / favor to someone.</p>\n<p>Related actions:</p>\n<ul>\n<li><a class="localLink" href="/ReplyAction">ReplyAction</a>: Appears generally as a response to AskAction.</li>\n</ul>',
    id:          'AskAction',
    label:       'AskAction',
    subClassOf:  'CommunicateAction',
    type:        'Type'
  },
  AssessAction:                     {
    description: 'The act of forming one\'s opinion, reaction or sentiment.',
    id:          'AssessAction',
    label:       'AssessAction',
    subClassOf:  'Action',
    type:        'Type'
  },
  AssignAction:                     {
    description: 'The act of allocating an action/event/task to some destination (someone or something).',
    id:          'AssignAction',
    label:       'AssignAction',
    subClassOf:  'AllocateAction',
    type:        'Type'
  },
  Attorney:                         {
    description: 'Professional service: Attorney. </p>\n<p>This type is deprecated - <a class="localLink" href="/LegalService">LegalService</a> is more inclusive and less ambiguous.',
    id:          'Attorney',
    label:       'Attorney',
    subClassOf:  'LegalService',
    type:        'Type'
  },
  Audience:                         {
    description: 'Intended audience for an item, i.e. the group for whom the item was created.',
    id:          'Audience',
    label:       'Audience',
    subClassOf:  'Intangible',
    type:        'Type'
  },
  AudioObject:                      {
    description: 'An audio file.',
    id:          'AudioObject',
    label:       'AudioObject',
    source:      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_rNews',
    subClassOf:  'MediaObject',
    type:        'Type'
  },
  AudiobookFormat:                  {
    description: [
      'Book format: Audiobook. This is an enumerated value for use with the bookFormat property. There is also a type \'Audiobook\' in the bib extension which includes Audiobook specific properties.'
    ],
    id:          'AudiobookFormat',
    label:       [
      'AudiobookFormat'
    ],
    type:        [
      'BookFormatType'
    ]
  },
  AuthorizeAction:                  {
    description: 'The act of granting permission to an object.',
    id:          'AuthorizeAction',
    label:       'AuthorizeAction',
    subClassOf:  'AllocateAction',
    type:        'Type'
  },
  AutoBodyShop:                     {
    description: 'Auto body shop.',
    id:          'AutoBodyShop',
    label:       'AutoBodyShop',
    subClassOf:  'AutomotiveBusiness',
    type:        'Type'
  },
  AutoDealer:                       {
    description: 'An car dealership.',
    id:          'AutoDealer',
    label:       'AutoDealer',
    subClassOf:  'AutomotiveBusiness',
    type:        'Type'
  },
  AutoPartsStore:                   {
    description: 'An auto parts store.',
    id:          'AutoPartsStore',
    label:       'AutoPartsStore',
    subClassOf:  [
      'AutomotiveBusiness',
      'Store'
    ],
    type:        'Type'
  },
  AutoRental:                       {
    description: 'A car rental business.',
    id:          'AutoRental',
    label:       'AutoRental',
    subClassOf:  'AutomotiveBusiness',
    type:        'Type'
  },
  AutoRepair:                       {
    description: 'Car repair business.',
    id:          'AutoRepair',
    label:       'AutoRepair',
    subClassOf:  'AutomotiveBusiness',
    type:        'Type'
  },
  AutoWash:                         {
    description: 'A car wash business.',
    id:          'AutoWash',
    label:       'AutoWash',
    subClassOf:  'AutomotiveBusiness',
    type:        'Type'
  },
  AutomatedTeller:                  {
    description: 'ATM/cash machine.',
    id:          'AutomatedTeller',
    label:       'AutomatedTeller',
    subClassOf:  'FinancialService',
    type:        'Type'
  },
  AutomotiveBusiness:               {
    description: 'Car repair, sales, or parts.',
    id:          'AutomotiveBusiness',
    label:       'AutomotiveBusiness',
    subClassOf:  'LocalBusiness',
    type:        'Type'
  },
  Bakery:                           {
    description: 'A bakery.',
    id:          'Bakery',
    label:       'Bakery',
    subClassOf:  'FoodEstablishment',
    type:        'Type'
  },
  BankAccount:                      {
    description: 'A product or service offered by a bank whereby one may deposit, withdraw or transfer money and in some cases be paid interest.',
    id:          'BankAccount',
    label:       'BankAccount',
    source:      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO',
    subClassOf:  'FinancialProduct',
    type:        'Type'
  },
  BankOrCreditUnion:                {
    description: 'Bank or credit union.',
    id:          'BankOrCreditUnion',
    label:       'BankOrCreditUnion',
    subClassOf:  'FinancialService',
    type:        'Type'
  },
  BarOrPub:                         {
    description: 'A bar or pub.',
    id:          'BarOrPub',
    label:       'BarOrPub',
    subClassOf:  'FoodEstablishment',
    type:        'Type'
  },
  Barcode:                          {
    description: 'An image of a visual machine-readable code such as a barcode or QR code.',
    id:          'Barcode',
    label:       'Barcode',
    subClassOf:  'ImageObject',
    type:        'Type'
  },
  Beach:                            {
    description: 'Beach.',
    id:          'Beach',
    label:       'Beach',
    subClassOf:  'CivicStructure',
    type:        'Type'
  },
  BeautySalon:                      {
    description: 'Beauty salon.',
    id:          'BeautySalon',
    label:       'BeautySalon',
    subClassOf:  'HealthAndBeautyBusiness',
    type:        'Type'
  },
  BedAndBreakfast:                  {
    description: 'Bed and breakfast.\n<br /><br />\nSee also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.',
    id:          'BedAndBreakfast',
    label:       'BedAndBreakfast',
    subClassOf:  'LodgingBusiness',
    type:        'Type'
  },
  BedDetails:                       {
    description: 'An entity holding detailed information about the available bed types, e.g. the quantity of twin beds for a hotel room. For the single case of just one bed of a certain type, you can use bed directly with a text. See also <a class="localLink" href="/BedType">BedType</a> (under development).',
    id:          'BedDetails',
    label:       'BedDetails',
    source:      'https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology',
    subClassOf:  'Intangible',
    type:        'Type'
  },
  BefriendAction:                   {
    description: '<p>The act of forming a personal connection with someone (object) mutually/bidirectionally/symmetrically.</p>\n<p>Related actions:</p>\n<ul>\n<li><a class="localLink" href="/FollowAction">FollowAction</a>: Unlike FollowAction, BefriendAction implies that the connection is reciprocal.</li>\n</ul>',
    id:          'BefriendAction',
    label:       'BefriendAction',
    subClassOf:  'InteractAction',
    type:        'Type'
  },
  BikeStore:                        {
    description: 'A bike store.',
    id:          'BikeStore',
    label:       'BikeStore',
    subClassOf:  'Store',
    type:        'Type'
  },
  Blog:                             {
    description: 'A blog.',
    id:          'Blog',
    label:       'Blog',
    subClassOf:  'CreativeWork',
    type:        'Type'
  },
  BlogPosting:                      {
    description: 'A blog post.',
    id:          'BlogPosting',
    label:       'BlogPosting',
    subClassOf:  'SocialMediaPosting',
    type:        'Type'
  },
  BoardingPolicyType:               {
    description: 'A type of boarding policy used by an airline.',
    id:          'BoardingPolicyType',
    label:       'BoardingPolicyType',
    subClassOf:  'Enumeration',
    type:        'Type'
  },
  BodyOfWater:                      {
    description: 'A body of water, such as a sea, ocean, or lake.',
    id:          'BodyOfWater',
    label:       'BodyOfWater',
    subClassOf:  'Landform',
    type:        'Type'
  },
  Book:                             {
    description: 'A book.',
    id:          'Book',
    label:       'Book',
    subClassOf:  'CreativeWork',
    type:        'Type'
  },
  BookFormatType:                   {
    description: 'The publication format of the book.',
    id:          'BookFormatType',
    label:       'BookFormatType',
    subClassOf:  'Enumeration',
    type:        'Type'
  },
  BookSeries:                       {
    description: 'A series of books. Included books can be indicated with the hasPart property.',
    id:          'BookSeries',
    label:       'BookSeries',
    subClassOf:  'CreativeWorkSeries',
    type:        'Type'
  },
  BookStore:                        {
    description: 'A bookstore.',
    id:          'BookStore',
    label:       'BookStore',
    subClassOf:  'Store',
    type:        'Type'
  },
  BookmarkAction:                   {
    description: 'An agent bookmarks/flags/labels/tags/marks an object.',
    id:          'BookmarkAction',
    label:       'BookmarkAction',
    subClassOf:  'OrganizeAction',
    type:        'Type'
  },
  Boolean:                          {
    description: 'Boolean: True or False.',
    id:          'Boolean',
    label:       'Boolean',
    type:        [
      'DataType',
      'Type'
    ]
  },
  BorrowAction:                     {
    description: '<p>The act of obtaining an object under an agreement to return it at a later date. Reciprocal of LendAction.</p>\n<p>Related actions:</p>\n<ul>\n<li><a class="localLink" href="/LendAction">LendAction</a>: Reciprocal of BorrowAction.</li>\n</ul>',
    id:          'BorrowAction',
    label:       'BorrowAction',
    subClassOf:  'TransferAction',
    type:        'Type'
  },
  BowlingAlley:                     {
    description: 'A bowling alley.',
    id:          'BowlingAlley',
    label:       'BowlingAlley',
    subClassOf:  'SportsActivityLocation',
    type:        'Type'
  },
  Brand:                            {
    description: 'A brand is a name used by an organization or business person for labeling a product, product group, or similar.',
    id:          'Brand',
    label:       'Brand',
    source:      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass',
    subClassOf:  'Intangible',
    type:        'Type'
  },
  BreadcrumbList:                   {
    description: 'A BreadcrumbList is an ItemList consisting of a chain of linked Web pages, typically described using at least their URL and their name, and typically ending with the current page.</p>\n<p>The <a class="localLink" href="/position">position</a> property is used to reconstruct the order of the items in a BreadcrumbList The convention is that a breadcrumb list has an <a class="localLink" href="/itemListOrder">itemListOrder</a> of <a class="localLink" href="/ItemListOrderAscending">ItemListOrderAscending</a> (lower values listed first), and that the first items in this list correspond to the "top" or beginning of the breadcrumb trail, e.g. with a site or section homepage. The specific values of \'position\' are not assigned meaning for a BreadcrumbList, but they should be integers, e.g. beginning with \'1\' for the first item in the list.',
    id:          'BreadcrumbList',
    label:       'BreadcrumbList',
    subClassOf:  'ItemList',
    type:        'Type'
  },
  Brewery:                          {
    description: 'Brewery.',
    id:          'Brewery',
    label:       'Brewery',
    subClassOf:  'FoodEstablishment',
    type:        'Type'
  },
  Bridge:                           {
    description: 'A bridge.',
    id:          'Bridge',
    label:       'Bridge',
    subClassOf:  'CivicStructure',
    type:        'Type'
  },
  BroadcastChannel:                 {
    description: 'A unique instance of a BroadcastService on a CableOrSatelliteService lineup.',
    id:          'BroadcastChannel',
    label:       'BroadcastChannel',
    subClassOf:  'Intangible',
    type:        'Type'
  },
  BroadcastEvent:                   {
    description: 'An over the air or online broadcast event.',
    id:          'BroadcastEvent',
    label:       'BroadcastEvent',
    subClassOf:  'PublicationEvent',
    type:        'Type'
  },
  BroadcastRelease:                 {
    description: [
      'BroadcastRelease.'
    ],
    id:          'BroadcastRelease',
    label:       [
      'BroadcastRelease'
    ],
    source:      [
      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ'
    ],
    type:        [
      'MusicAlbumReleaseType'
    ]
  },
  BroadcastService:                 {
    description: 'A delivery service through which content is provided via broadcast over the air or online.',
    id:          'BroadcastService',
    label:       'BroadcastService',
    subClassOf:  'Service',
    type:        'Type'
  },
  BuddhistTemple:                   {
    description: 'A Buddhist temple.',
    id:          'BuddhistTemple',
    label:       'BuddhistTemple',
    subClassOf:  'PlaceOfWorship',
    type:        'Type'
  },
  BusReservation:                   {
    description: `A reservation for bus travel. </p>\n<p>Note: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use <a class="localLink" href="/Offer">Offer</a>.`,
    id:          'BusReservation',
    label:       'BusReservation',
    subClassOf:  'Reservation',
    type:        'Type'
  },
  BusStation:                       {
    description: 'A bus station.',
    id:          'BusStation',
    label:       'BusStation',
    subClassOf:  'CivicStructure',
    type:        'Type'
  },
  BusStop:                          {
    description: 'A bus stop.',
    id:          'BusStop',
    label:       'BusStop',
    subClassOf:  'CivicStructure',
    type:        'Type'
  },
  BusTrip:                          {
    description: 'A trip on a commercial bus line.',
    id:          'BusTrip',
    label:       'BusTrip',
    subClassOf:  'Intangible',
    type:        'Type'
  },
  BusinessAudience:                 {
    description: 'A set of characteristics belonging to businesses, e.g. who compose an item\'s target audience.',
    id:          'BusinessAudience',
    label:       'BusinessAudience',
    subClassOf:  'Audience',
    type:        'Type'
  },
  BusinessEntityType:               {
    description: '<p>A business entity type is a conceptual entity representing the legal form, the size, the main line of business, the position in the value chain, or any combination thereof, of an organization or business person.</p>\n<p>Commonly used values:</p>\n<ul>\n<li>http://purl.org/goodrelations/v1#Business</li>\n<li>http://purl.org/goodrelations/v1#Enduser</li>\n<li>http://purl.org/goodrelations/v1#PublicInstitution</li>\n<li>http://purl.org/goodrelations/v1#Reseller</li>\n</ul>',
    id:          'BusinessEntityType',
    label:       'BusinessEntityType',
    source:      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass',
    subClassOf:  'Enumeration',
    type:        'Type'
  },
  BusinessEvent:                    {
    description: 'Event type: Business event.',
    id:          'BusinessEvent',
    label:       'BusinessEvent',
    subClassOf:  'Event',
    type:        'Type'
  },
  BusinessFunction:                 {
    description: '<p>The business function specifies the type of activity or access (i.e., the bundle of rights) offered by the organization or business person through the offer. Typical are sell, rental or lease, maintenance or repair, manufacture / produce, recycle / dispose, engineering / construction, or installation. Proprietary specifications of access rights are also instances of this class.</p>\n<p>Commonly used values:</p>\n<ul>\n<li>http://purl.org/goodrelations/v1#ConstructionInstallation</li>\n<li>http://purl.org/goodrelations/v1#Dispose</li>\n<li>http://purl.org/goodrelations/v1#LeaseOut</li>\n<li>http://purl.org/goodrelations/v1#Maintain</li>\n<li>http://purl.org/goodrelations/v1#ProvideService</li>\n<li>http://purl.org/goodrelations/v1#Repair</li>\n<li>http://purl.org/goodrelations/v1#Sell</li>\n<li>http://purl.org/goodrelations/v1#Buy</li>\n</ul>',
    id:          'BusinessFunction',
    label:       'BusinessFunction',
    source:      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass',
    subClassOf:  'Enumeration',
    type:        'Type'
  },
  BuyAction:                        {
    description: 'The act of giving money to a seller in exchange for goods or services rendered. An agent buys an object, product, or service from a seller for a price. Reciprocal of SellAction.',
    id:          'BuyAction',
    label:       'BuyAction',
    subClassOf:  'TradeAction',
    type:        'Type'
  },
  CDFormat:                         {
    description: [
      'CDFormat.'
    ],
    id:          'CDFormat',
    label:       [
      'CDFormat'
    ],
    source:      [
      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ'
    ],
    type:        [
      'MusicReleaseFormatType'
    ]
  },
  CableOrSatelliteService:          {
    description: 'A service which provides access to media programming like TV or radio. Access may be via cable or satellite.',
    id:          'CableOrSatelliteService',
    label:       'CableOrSatelliteService',
    subClassOf:  'Service',
    type:        'Type'
  },
  CafeOrCoffeeShop:                 {
    description: 'A cafe or coffee shop.',
    id:          'CafeOrCoffeeShop',
    label:       'CafeOrCoffeeShop',
    subClassOf:  'FoodEstablishment',
    type:        'Type'
  },
  Campground:                       {
    description: 'A camping site, campsite, or campground is a place used for overnight stay in the outdoors. In British English a campsite is an area, usually divided into a number of pitches, where people can camp overnight using tents or camper vans or caravans; this British English use of the word is synonymous with the American English expression campground. In American English the term campsite generally means an area where an individual, family, group, or military unit can pitch a tent or parks a camper; a campground may contain many campsites (Source: Wikipedia, the free encyclopedia, see <a href="http://en.wikipedia.org/wiki/Campsite">http://en.wikipedia.org/wiki/Campsite</a>).\n<br /><br />\nSee also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.',
    id:          'Campground',
    label:       'Campground',
    source:      'https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology',
    subClassOf:  [
      'LodgingBusiness',
      'CivicStructure'
    ],
    type:        'Type'
  },
  CampingPitch:                     {
    description: 'A camping pitch is an individual place for overnight stay in the outdoors, typically being part of a larger camping site.\n<br /><br />\nSee also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.',
    id:          'CampingPitch',
    label:       'CampingPitch',
    source:      'https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology',
    subClassOf:  'Accommodation',
    type:        'Type'
  },
  Canal:                            {
    description: 'A canal, like the Panama Canal.',
    id:          'Canal',
    label:       'Canal',
    subClassOf:  'BodyOfWater',
    type:        'Type'
  },
  CancelAction:                     {
    description: '<p>The act of asserting that a future event/action is no longer going to happen.</p>\n<p>Related actions:</p>\n<ul>\n<li><a class="localLink" href="/ConfirmAction">ConfirmAction</a>: The antonym of CancelAction.</li>\n</ul>',
    id:          'CancelAction',
    label:       'CancelAction',
    subClassOf:  'PlanAction',
    type:        'Type'
  },
  Car:                              {
    description: 'A car is a wheeled, self-powered motor vehicle used for transportation.',
    id:          'Car',
    label:       'Car',
    source:      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group',
    subClassOf:  'Vehicle',
    type:        'Type'
  },
  Casino:                           {
    description: 'A casino.',
    id:          'Casino',
    label:       'Casino',
    subClassOf:  'EntertainmentBusiness',
    type:        'Type'
  },
  CassetteFormat:                   {
    description: [
      'CassetteFormat.'
    ],
    id:          'CassetteFormat',
    label:       [
      'CassetteFormat'
    ],
    source:      [
      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ'
    ],
    type:        [
      'MusicReleaseFormatType'
    ]
  },
  CatholicChurch:                   {
    description: 'A Catholic church.',
    id:          'CatholicChurch',
    label:       'CatholicChurch',
    subClassOf:  'PlaceOfWorship',
    type:        'Type'
  },
  Cemetery:                         {
    description: 'A graveyard.',
    id:          'Cemetery',
    label:       'Cemetery',
    subClassOf:  'CivicStructure',
    type:        'Type'
  },
  CheckAction:                      {
    description: 'An agent inspects/determines/investigates/inquire or examine an object\'s accuracy/quality/condition or state.',
    id:          'CheckAction',
    label:       'CheckAction',
    subClassOf:  'FindAction',
    type:        'Type'
  },
  CheckInAction:                    {
    description: '<p>The act of an agent communicating (service provider, social media, etc) their arrival by registering/confirming for a previously reserved service (e.g. flight check in) or at a place (e.g. hotel), possibly resulting in a result (boarding pass, etc).</p>\n<p>Related actions:</p>\n<ul>\n<li><a class="localLink" href="/CheckOutAction">CheckOutAction</a>: The antonym of CheckInAction.</li>\n<li><a class="localLink" href="/ArriveAction">ArriveAction</a>: Unlike ArriveAction, CheckInAction implies that the agent is informing/confirming the start of a previously reserved service.</li>\n<li><a class="localLink" href="/ConfirmAction">ConfirmAction</a>: Unlike ConfirmAction, CheckInAction implies that the agent is informing/confirming the <em>start</em> of a previously reserved service rather than its validity/existence.</li>\n</ul>',
    id:          'CheckInAction',
    label:       'CheckInAction',
    subClassOf:  'CommunicateAction',
    type:        'Type'
  },
  CheckOutAction:                   {
    description: '<p>The act of an agent communicating (service provider, social media, etc) their departure of a previously reserved service (e.g. flight check in) or place (e.g. hotel).</p>\n<p>Related actions:</p>\n<ul>\n<li><a class="localLink" href="/CheckInAction">CheckInAction</a>: The antonym of CheckOutAction.</li>\n<li><a class="localLink" href="/DepartAction">DepartAction</a>: Unlike DepartAction, CheckOutAction implies that the agent is informing/confirming the end of a previously reserved service.</li>\n<li><a class="localLink" href="/CancelAction">CancelAction</a>: Unlike CancelAction, CheckOutAction implies that the agent is informing/confirming the end of a previously reserved service.</li>\n</ul>',
    id:          'CheckOutAction',
    label:       'CheckOutAction',
    subClassOf:  'CommunicateAction',
    type:        'Type'
  },
  CheckoutPage:                     {
    description: 'Web page type: Checkout page.',
    id:          'CheckoutPage',
    label:       'CheckoutPage',
    subClassOf:  'WebPage',
    type:        'Type'
  },
  ChildCare:                        {
    description: 'A Childcare center.',
    id:          'ChildCare',
    label:       'ChildCare',
    subClassOf:  'LocalBusiness',
    type:        'Type'
  },
  ChildrensEvent:                   {
    description: 'Event type: Children\'s event.',
    id:          'ChildrensEvent',
    label:       'ChildrensEvent',
    subClassOf:  'Event',
    type:        'Type'
  },
  ChooseAction:                     {
    description: 'The act of expressing a preference from a set of options or a large or unbounded set of choices/options.',
    id:          'ChooseAction',
    label:       'ChooseAction',
    subClassOf:  'AssessAction',
    type:        'Type'
  },
  Church:                           {
    description: 'A church.',
    id:          'Church',
    label:       'Church',
    subClassOf:  'PlaceOfWorship',
    type:        'Type'
  },
  City:                             {
    description: 'A city or town.',
    id:          'City',
    label:       'City',
    subClassOf:  'AdministrativeArea',
    type:        'Type'
  },
  CityHall:                         {
    description: 'A city hall.',
    id:          'CityHall',
    label:       'CityHall',
    subClassOf:  'GovernmentBuilding',
    type:        'Type'
  },
  CivicStructure:                   {
    description: 'A public structure, such as a town hall or concert hall.',
    id:          'CivicStructure',
    label:       'CivicStructure',
    subClassOf:  'Place',
    type:        'Type'
  },
  Clip:                             {
    description: 'A short TV or radio program or a segment/part of a program.',
    id:          'Clip',
    label:       'Clip',
    subClassOf:  'CreativeWork',
    type:        'Type'
  },
  ClothingStore:                    {
    description: 'A clothing store.',
    id:          'ClothingStore',
    label:       'ClothingStore',
    subClassOf:  'Store',
    type:        'Type'
  },
  CoOp:                             {
    description: [
      'Play mode: CoOp. Co-operative games, where you play on the same team with friends.'
    ],
    id:          'CoOp',
    label:       [
      'CoOp'
    ],
    type:        [
      'GamePlayMode'
    ]
  },
  Code:                             {
    description:  'Computer programming source code. Example: Full (compile ready) solutions, code snippet samples, scripts, templates.',
    id:           'Code',
    label:        'Code',
    subClassOf:   'CreativeWork',
    supersededBy: 'SoftwareSourceCode',
    type:         'Type'
  },
  CollectionPage:                   {
    description: 'Web page type: Collection page.',
    id:          'CollectionPage',
    label:       'CollectionPage',
    subClassOf:  'WebPage',
    type:        'Type'
  },
  CollegeOrUniversity:              {
    description: 'A college, university, or other third-level educational institution.',
    id:          'CollegeOrUniversity',
    label:       'CollegeOrUniversity',
    subClassOf:  'EducationalOrganization',
    type:        'Type'
  },
  ComedyClub:                       {
    description: 'A comedy club.',
    id:          'ComedyClub',
    label:       'ComedyClub',
    subClassOf:  'EntertainmentBusiness',
    type:        'Type'
  },
  ComedyEvent:                      {
    description: 'Event type: Comedy event.',
    id:          'ComedyEvent',
    label:       'ComedyEvent',
    subClassOf:  'Event',
    type:        'Type'
  },
  Comment:                          {
    description: 'A comment on an item - for example, a comment on a blog post. The comment\'s content is expressed via the <a class="localLink" href="/text">text</a> property, and its topic via <a class="localLink" href="/about">about</a>, properties shared with all CreativeWorks.',
    id:          'Comment',
    label:       'Comment',
    subClassOf:  'CreativeWork',
    type:        'Type'
  },
  CommentAction:                    {
    description: 'The act of generating a comment about a subject.',
    id:          'CommentAction',
    label:       'CommentAction',
    subClassOf:  'CommunicateAction',
    type:        'Type'
  },
  CommentPermission:                {
    description: [
      'Permission to add comments to the document.'
    ],
    id:          'CommentPermission',
    label:       [
      'CommentPermission'
    ],
    type:        [
      'DigitalDocumentPermissionType'
    ]
  },
  CommunicateAction:                {
    description: 'The act of conveying information to another person via a communication medium (instrument) such as speech, email, or telephone conversation.',
    id:          'CommunicateAction',
    label:       'CommunicateAction',
    subClassOf:  'InteractAction',
    type:        'Type'
  },
  CompilationAlbum:                 {
    description: [
      'CompilationAlbum.'
    ],
    id:          'CompilationAlbum',
    label:       [
      'CompilationAlbum'
    ],
    source:      [
      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ'
    ],
    type:        [
      'MusicAlbumProductionType'
    ]
  },
  CompletedActionStatus:            {
    description: [
      'An action that has already taken place.'
    ],
    id:          'CompletedActionStatus',
    label:       [
      'CompletedActionStatus'
    ],
    type:        [
      'ActionStatusType'
    ]
  },
  CompoundPriceSpecification:       {
    description: 'A compound price specification is one that bundles multiple prices that all apply in combination for different dimensions of consumption. Use the name property of the attached unit price specification for indicating the dimension of a price component (e.g. "electricity" or "final cleaning").',
    id:          'CompoundPriceSpecification',
    label:       'CompoundPriceSpecification',
    source:      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass',
    subClassOf:  'PriceSpecification',
    type:        'Type'
  },
  ComputerLanguage:                 {
    description: 'This type covers computer programming languages such as Scheme and Lisp, as well as other language-like computer representations. Natural languages are best represented with the <a class="localLink" href="/Language">Language</a> type.',
    id:          'ComputerLanguage',
    label:       'ComputerLanguage',
    subClassOf:  'Intangible',
    type:        'Type'
  },
  ComputerStore:                    {
    description: 'A computer store.',
    id:          'ComputerStore',
    label:       'ComputerStore',
    subClassOf:  'Store',
    type:        'Type'
  },
  ConfirmAction:                    {
    description: '<p>The act of notifying someone that a future event/action is going to happen as expected.</p>\n<p>Related actions:</p>\n<ul>\n<li><a class="localLink" href="/CancelAction">CancelAction</a>: The antonym of ConfirmAction.</li>\n</ul>',
    id:          'ConfirmAction',
    label:       'ConfirmAction',
    subClassOf:  'InformAction',
    type:        'Type'
  },
  ConsumeAction:                    {
    description: 'The act of ingesting information/resources/food.',
    id:          'ConsumeAction',
    label:       'ConsumeAction',
    subClassOf:  'Action',
    type:        'Type'
  },
  ContactPage:                      {
    description: 'Web page type: Contact page.',
    id:          'ContactPage',
    label:       'ContactPage',
    subClassOf:  'WebPage',
    type:        'Type'
  },
  ContactPoint:                     {
    description: 'A contact point&#x2014;for example, a Customer Complaints department.',
    id:          'ContactPoint',
    label:       'ContactPoint',
    subClassOf:  'StructuredValue',
    type:        'Type'
  },
  ContactPointOption:               {
    description: 'Enumerated options related to a ContactPoint.',
    id:          'ContactPointOption',
    label:       'ContactPointOption',
    subClassOf:  'Enumeration',
    type:        'Type'
  },
  Continent:                        {
    description: 'One of the continents (for example, Europe or Africa).',
    id:          'Continent',
    label:       'Continent',
    subClassOf:  'Landform',
    type:        'Type'
  },
  ControlAction:                    {
    description: 'An agent controls a device or application.',
    id:          'ControlAction',
    label:       'ControlAction',
    subClassOf:  'Action',
    type:        'Type'
  },
  ConvenienceStore:                 {
    description: 'A convenience store.',
    id:          'ConvenienceStore',
    label:       'ConvenienceStore',
    subClassOf:  'Store',
    type:        'Type'
  },
  Conversation:                     {
    description: 'One or more messages between organizations or people on a particular topic. Individual messages can be linked to the conversation with isPartOf or hasPart properties.',
    id:          'Conversation',
    label:       'Conversation',
    subClassOf:  'CreativeWork',
    type:        'Type'
  },
  CookAction:                       {
    description: 'The act of producing/preparing food.',
    id:          'CookAction',
    label:       'CookAction',
    subClassOf:  'CreateAction',
    type:        'Type'
  },
  Corporation:                      {
    description: 'Organization: A business corporation.',
    id:          'Corporation',
    label:       'Corporation',
    source:      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_rNews',
    subClassOf:  'Organization',
    type:        'Type'
  },
  Country:                          {
    description: 'A country.',
    id:          'Country',
    label:       'Country',
    subClassOf:  'AdministrativeArea',
    type:        'Type'
  },
  Courthouse:                       {
    description: 'A courthouse.',
    id:          'Courthouse',
    label:       'Courthouse',
    subClassOf:  'GovernmentBuilding',
    type:        'Type'
  },
  CreateAction:                     {
    description: 'The act of deliberately creating/producing/generating/building a result out of the agent.',
    id:          'CreateAction',
    label:       'CreateAction',
    subClassOf:  'Action',
    type:        'Type'
  },
  CreativeWork:                     {
    description: 'The most generic kind of creative work, including books, movies, photographs, software programs, etc.',
    id:          'CreativeWork',
    label:       'CreativeWork',
    source:      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_rNews',
    subClassOf:  'Thing',
    type:        'Type'
  },
  CreativeWorkSeason:               {
    description: 'A media season e.g. tv, radio, video game etc.',
    id:          'CreativeWorkSeason',
    label:       'CreativeWorkSeason',
    subClassOf:  'CreativeWork',
    type:        'Type'
  },
  CreativeWorkSeries:               {
    description: 'A CreativeWorkSeries in schema.org is a group of related items, typically but not necessarily of the same kind. CreativeWorkSeries are usually organized into some order, often chronological. Unlike <a class="localLink" href="/ItemList">ItemList</a> which is a general purpose data structure for lists of things, the emphasis with CreativeWorkSeries is on published materials (written e.g. books and periodicals, or media such as tv, radio and games).</p>\n<p>Specific subtypes are available for describing <a class="localLink" href="/TVSeries">TVSeries</a>, <a class="localLink" href="/RadioSeries">RadioSeries</a>, <a class="localLink" href="/MovieSeries">MovieSeries</a>, <a class="localLink" href="/BookSeries">BookSeries</a>, <a class="localLink" href="/Periodical">Periodical</a> and <a class="localLink" href="/VideoGameSeries">VideoGameSeries</a>. In each case, the <a class="localLink" href="/hasPart">hasPart</a> / <a class="localLink" href="/isPartOf">isPartOf</a> properties can be used to relate the CreativeWorkSeries to its parts. The general CreativeWorkSeries type serves largely just to organize these more specific and practical subtypes.</p>\n<p>It is common for properties applicable to an item from the series to be usefully applied to the containing group. Schema.org attempts to anticipate some of these cases, but publishers should be free to apply properties of the series parts to the series as a whole wherever they seem appropriate.',
    id:          'CreativeWorkSeries',
    label:       'CreativeWorkSeries',
    subClassOf:  'CreativeWork',
    type:        'Type'
  },
  CreditCard:                       {
    description: '<p>A card payment method of a particular brand or name.  Used to mark up a particular payment method and/or the financial product/service that supplies the card account.</p>\n<p>Commonly used values:</p>\n<ul>\n<li>http://purl.org/goodrelations/v1#AmericanExpress</li>\n<li>http://purl.org/goodrelations/v1#DinersClub</li>\n<li>http://purl.org/goodrelations/v1#Discover</li>\n<li>http://purl.org/goodrelations/v1#JCB</li>\n<li>http://purl.org/goodrelations/v1#MasterCard</li>\n<li>http://purl.org/goodrelations/v1#VISA</li>\n</ul>',
    id:          'CreditCard',
    label:       'CreditCard',
    source:      [
      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass',
      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO'
    ],
    subClassOf:  [
      'LoanOrCredit',
      'PaymentCard'
    ],
    type:        'Type'
  },
  Crematorium:                      {
    description: 'A crematorium.',
    id:          'Crematorium',
    label:       'Crematorium',
    subClassOf:  'CivicStructure',
    type:        'Type'
  },
  CurrencyConversionService:        {
    description: 'A service to convert funds from one currency to another currency.',
    id:          'CurrencyConversionService',
    label:       'CurrencyConversionService',
    source:      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO',
    subClassOf:  'FinancialProduct',
    type:        'Type'
  },
  DJMixAlbum:                       {
    description: [
      'DJMixAlbum.'
    ],
    id:          'DJMixAlbum',
    label:       [
      'DJMixAlbum'
    ],
    source:      [
      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ'
    ],
    type:        [
      'MusicAlbumProductionType'
    ]
  },
  DVDFormat:                        {
    description: [
      'DVDFormat.'
    ],
    id:          'DVDFormat',
    label:       [
      'DVDFormat'
    ],
    source:      [
      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ'
    ],
    type:        [
      'MusicReleaseFormatType'
    ]
  },
  DamagedCondition:                 {
    description: [
      'Indicates that the item is damaged.'
    ],
    id:          'DamagedCondition',
    label:       [
      'DamagedCondition'
    ],
    type:        [
      'OfferItemCondition'
    ]
  },
  DanceEvent:                       {
    description: 'Event type: A social dance.',
    id:          'DanceEvent',
    label:       'DanceEvent',
    subClassOf:  'Event',
    type:        'Type'
  },
  DanceGroup:                       {
    description: 'A dance group&#x2014;for example, the Alvin Ailey Dance Theater or Riverdance.',
    id:          'DanceGroup',
    label:       'DanceGroup',
    subClassOf:  'PerformingGroup',
    type:        'Type'
  },
  DataCatalog:                      {
    description:     'A collection of datasets.',
    equivalentClass: 'http://www.w3.org/ns/dcat#Catalog',
    id:              'DataCatalog',
    label:           'DataCatalog',
    source:          'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_DatasetClass',
    subClassOf:      'CreativeWork',
    type:            'Type'
  },
  DataDownload:                     {
    description:     'A dataset in downloadable form.',
    equivalentClass: 'http://www.w3.org/ns/dcat#Distribution',
    id:              'DataDownload',
    label:           'DataDownload',
    source:          'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_DatasetClass',
    subClassOf:      'MediaObject',
    type:            'Type'
  },
  DataFeed:                         {
    description: 'A single feed providing structured information about one or more entities or topics.',
    id:          'DataFeed',
    label:       'DataFeed',
    subClassOf:  'Dataset',
    type:        'Type'
  },
  DataFeedItem:                     {
    description: 'A single item within a larger data feed.',
    id:          'DataFeedItem',
    label:       'DataFeedItem',
    subClassOf:  'Intangible',
    type:        'Type'
  },
  DataType:                         {
    description: 'The basic data types such as Integers, Strings, etc.',
    id:          'DataType',
    label:       'DataType',
    subClassOf:  'Type',
    type:        'Type'
  },
  Dataset:                          {
    description:     'A body of structured information describing some topic(s) of interest.',
    equivalentClass: [
      'http://www.w3.org/ns/dcat#Dataset',
      'http://purl.org/dc/dcmitype/Dataset',
      'http://rdfs.org/ns/void#Dataset'
    ],
    id:              'Dataset',
    label:           'Dataset',
    source:          'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_DatasetClass',
    subClassOf:      'CreativeWork',
    type:            'Type'
  },
  Date:                             {
    description: 'A date value in <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO 8601 date format</a>.',
    id:          'Date',
    label:       'Date',
    type:        [
      'DataType',
      'Type'
    ]
  },
  DateTime:                         {
    description: 'A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm] (see Chapter 5.4 of ISO 8601).',
    id:          'DateTime',
    label:       'DateTime',
    type:        [
      'DataType',
      'Type'
    ]
  },
  DatedMoneySpecification:          {
    description:  'A DatedMoneySpecification represents monetary values with optional start and end dates. For example, this could represent an employee\'s salary over a specific period of time. <strong>Note:</strong> This type has been superseded by <a class="localLink" href="/MonetaryAmount">MonetaryAmount</a> use of that type is recommended',
    id:           'DatedMoneySpecification',
    label:        'DatedMoneySpecification',
    subClassOf:   'StructuredValue',
    supersededBy: 'MonetaryAmount',
    type:         'Type'
  },
  DayOfWeek:                        {
    description: 'The day of the week, e.g. used to specify to which day the opening hours of an OpeningHoursSpecification refer.</p>\n<p>Originally, URLs from <a href="http://purl.org/goodrelations/v1">GoodRelations</a> were used (for <a class="localLink" href="/Monday">Monday</a>, <a class="localLink" href="/Tuesday">Tuesday</a>, <a class="localLink" href="/Wednesday">Wednesday</a>, <a class="localLink" href="/Thursday">Thursday</a>, <a class="localLink" href="/Friday">Friday</a>, <a class="localLink" href="/Saturday">Saturday</a>, <a class="localLink" href="/Sunday">Sunday</a> plus a special entry for <a class="localLink" href="/PublicHolidays">PublicHolidays</a>); these have now been integrated directly into schema.org.',
    id:          'DayOfWeek',
    label:       'DayOfWeek',
    source:      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass',
    subClassOf:  'Enumeration',
    type:        'Type'
  },
  DaySpa:                           {
    description: 'A day spa.',
    id:          'DaySpa',
    label:       'DaySpa',
    subClassOf:  'HealthAndBeautyBusiness',
    type:        'Type'
  },
  DeactivateAction:                 {
    description: 'The act of stopping or deactivating a device or application (e.g. stopping a timer or turning off a flashlight).',
    id:          'DeactivateAction',
    label:       'DeactivateAction',
    subClassOf:  'ControlAction',
    type:        'Type'
  },
  DefenceEstablishment:             {
    description: 'A defence establishment, such as an army or navy base.',
    id:          'DefenceEstablishment',
    label:       'DefenceEstablishment',
    subClassOf:  'GovernmentBuilding',
    type:        'Type'
  },
  DeleteAction:                     {
    description: 'The act of editing a recipient by removing one of its objects.',
    id:          'DeleteAction',
    label:       'DeleteAction',
    subClassOf:  'UpdateAction',
    type:        'Type'
  },
  DeliveryChargeSpecification:      {
    description: 'The price for the delivery of an offer using a particular delivery method.',
    id:          'DeliveryChargeSpecification',
    label:       'DeliveryChargeSpecification',
    source:      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass',
    subClassOf:  'PriceSpecification',
    type:        'Type'
  },
  DeliveryEvent:                    {
    description: 'An event involving the delivery of an item.',
    id:          'DeliveryEvent',
    label:       'DeliveryEvent',
    subClassOf:  'Event',
    type:        'Type'
  },
  DeliveryMethod:                   {
    description: '<p>A delivery method is a standardized procedure for transferring the product or service to the destination of fulfillment chosen by the customer. Delivery methods are characterized by the means of transportation used, and by the organization or group that is the contracting party for the sending organization or person.</p>\n<p>Commonly used values:</p>\n<ul>\n<li>http://purl.org/goodrelations/v1#DeliveryModeDirectDownload</li>\n<li>http://purl.org/goodrelations/v1#DeliveryModeFreight</li>\n<li>http://purl.org/goodrelations/v1#DeliveryModeMail</li>\n<li>http://purl.org/goodrelations/v1#DeliveryModeOwnFleet</li>\n<li>http://purl.org/goodrelations/v1#DeliveryModePickUp</li>\n<li>http://purl.org/goodrelations/v1#DHL</li>\n<li>http://purl.org/goodrelations/v1#FederalExpress</li>\n<li>http://purl.org/goodrelations/v1#UPS</li>\n</ul>',
    id:          'DeliveryMethod',
    label:       'DeliveryMethod',
    source:      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass',
    subClassOf:  'Enumeration',
    type:        'Type'
  },
  Demand:                           {
    description: 'A demand entity represents the public, not necessarily binding, not necessarily exclusive, announcement by an organization or person to seek a certain type of goods or services. For describing demand using this type, the very same properties used for Offer apply.',
    id:          'Demand',
    label:       'Demand',
    source:      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass',
    subClassOf:  'Intangible',
    type:        'Type'
  },
  DemoAlbum:                        {
    description: [
      'DemoAlbum.'
    ],
    id:          'DemoAlbum',
    label:       [
      'DemoAlbum'
    ],
    source:      [
      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ'
    ],
    type:        [
      'MusicAlbumProductionType'
    ]
  },
  Dentist:                          {
    description: 'A dentist.',
    id:          'Dentist',
    label:       'Dentist',
    subClassOf:  [
      'MedicalOrganization',
      'LocalBusiness'
    ],
    type:        'Type'
  },
  DepartAction:                     {
    description: 'The act of  departing from a place. An agent departs from an fromLocation for a destination, optionally with participants.',
    id:          'DepartAction',
    label:       'DepartAction',
    subClassOf:  'MoveAction',
    type:        'Type'
  },
  DepartmentStore:                  {
    description: 'A department store.',
    id:          'DepartmentStore',
    label:       'DepartmentStore',
    subClassOf:  'Store',
    type:        'Type'
  },
  DepositAccount:                   {
    description: 'A type of Bank Account with a main purpose of depositing funds to gain interest or other benefits.',
    id:          'DepositAccount',
    label:       'DepositAccount',
    source:      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO',
    subClassOf:  [
      'BankAccount',
      'InvestmentOrDeposit'
    ],
    type:        'Type'
  },
  DiabeticDiet:                     {
    description: [
      'A diet appropriate for people with diabetes.'
    ],
    id:          'DiabeticDiet',
    label:       [
      'DiabeticDiet'
    ],
    type:        [
      'RestrictedDiet'
    ]
  },
  DigitalAudioTapeFormat:           {
    description: [
      'DigitalAudioTapeFormat.'
    ],
    id:          'DigitalAudioTapeFormat',
    label:       [
      'DigitalAudioTapeFormat'
    ],
    source:      [
      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ'
    ],
    type:        [
      'MusicReleaseFormatType'
    ]
  },
  DigitalDocument:                  {
    description: 'An electronic file or document.',
    id:          'DigitalDocument',
    label:       'DigitalDocument',
    subClassOf:  'CreativeWork',
    type:        'Type'
  },
  DigitalDocumentPermission:        {
    description: 'A permission for a particular person or group to access a particular file.',
    id:          'DigitalDocumentPermission',
    label:       'DigitalDocumentPermission',
    subClassOf:  'Intangible',
    type:        'Type'
  },
  DigitalDocumentPermissionType:    {
    description: 'A type of permission which can be granted for accessing a digital document.',
    id:          'DigitalDocumentPermissionType',
    label:       'DigitalDocumentPermissionType',
    subClassOf:  'Enumeration',
    type:        'Type'
  },
  DigitalFormat:                    {
    description: [
      'DigitalFormat.'
    ],
    id:          'DigitalFormat',
    label:       [
      'DigitalFormat'
    ],
    source:      [
      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ'
    ],
    type:        [
      'MusicReleaseFormatType'
    ]
  },
  DisagreeAction:                   {
    description: 'The act of expressing a difference of opinion with the object. An agent disagrees to/about an object (a proposition, topic or theme) with participants.',
    id:          'DisagreeAction',
    label:       'DisagreeAction',
    subClassOf:  'ReactAction',
    type:        'Type'
  },
  Discontinued:                     {
    description: [
      'Indicates that the item has been discontinued.'
    ],
    id:          'Discontinued',
    label:       [
      'Discontinued'
    ],
    type:        [
      'ItemAvailability'
    ]
  },
  DiscoverAction:                   {
    description: 'The act of discovering/finding an object.',
    id:          'DiscoverAction',
    label:       'DiscoverAction',
    subClassOf:  'FindAction',
    type:        'Type'
  },
  DiscussionForumPosting:           {
    description: 'A posting to a discussion forum.',
    id:          'DiscussionForumPosting',
    label:       'DiscussionForumPosting',
    subClassOf:  'SocialMediaPosting',
    type:        'Type'
  },
  DislikeAction:                    {
    description: 'The act of expressing a negative sentiment about the object. An agent dislikes an object (a proposition, topic or theme) with participants.',
    id:          'DislikeAction',
    label:       'DislikeAction',
    subClassOf:  'ReactAction',
    type:        'Type'
  },
  Distance:                         {
    description: 'Properties that take Distances as values are of the form \'&lt;Number&gt; &lt;Length unit of measure&gt;\'. E.g., \'7 ft\'.',
    id:          'Distance',
    label:       'Distance',
    subClassOf:  'Quantity',
    type:        'Type'
  },
  DonateAction:                     {
    description: 'The act of providing goods, services, or money without compensation, often for philanthropic reasons.',
    id:          'DonateAction',
    label:       'DonateAction',
    subClassOf:  'TradeAction',
    type:        'Type'
  },
  DownloadAction:                   {
    description: 'The act of downloading an object.',
    id:          'DownloadAction',
    label:       'DownloadAction',
    subClassOf:  'TransferAction',
    type:        'Type'
  },
  DrawAction:                       {
    description: 'The act of producing a visual/graphical representation of an object, typically with a pen/pencil and paper as instruments.',
    id:          'DrawAction',
    label:       'DrawAction',
    subClassOf:  'CreateAction',
    type:        'Type'
  },
  DrinkAction:                      {
    description: 'The act of swallowing liquids.',
    id:          'DrinkAction',
    label:       'DrinkAction',
    subClassOf:  'ConsumeAction',
    type:        'Type'
  },
  DriveWheelConfigurationValue:     {
    description: 'A value indicating which roadwheels will receive torque.',
    id:          'DriveWheelConfigurationValue',
    label:       'DriveWheelConfigurationValue',
    source:      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group',
    subClassOf:  'QualitativeValue',
    type:        'Type'
  },
  DryCleaningOrLaundry:             {
    description: 'A dry-cleaning business.',
    id:          'DryCleaningOrLaundry',
    label:       'DryCleaningOrLaundry',
    subClassOf:  'LocalBusiness',
    type:        'Type'
  },
  Duration:                         {
    description: 'Quantity: Duration (use <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO 8601 duration format</a>).',
    id:          'Duration',
    label:       'Duration',
    subClassOf:  'Quantity',
    type:        'Type'
  },
  EBook:                            {
    description: [
      'Book format: Ebook.'
    ],
    id:          'EBook',
    label:       [
      'EBook'
    ],
    type:        [
      'BookFormatType'
    ]
  },
  EPRelease:                        {
    description: [
      'EPRelease.'
    ],
    id:          'EPRelease',
    label:       [
      'EPRelease'
    ],
    source:      [
      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ'
    ],
    type:        [
      'MusicAlbumReleaseType'
    ]
  },
  EatAction:                        {
    description: 'The act of swallowing solid objects.',
    id:          'EatAction',
    label:       'EatAction',
    subClassOf:  'ConsumeAction',
    type:        'Type'
  },
  EducationEvent:                   {
    description: 'Event type: Education event.',
    id:          'EducationEvent',
    label:       'EducationEvent',
    subClassOf:  'Event',
    type:        'Type'
  },
  EducationalAudience:              {
    description: 'An EducationalAudience.',
    id:          'EducationalAudience',
    label:       'EducationalAudience',
    source:      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_LRMIClass',
    subClassOf:  'Audience',
    type:        'Type'
  },
  EducationalOrganization:          {
    description: 'An educational organization.',
    id:          'EducationalOrganization',
    label:       'EducationalOrganization',
    subClassOf:  'Organization',
    type:        'Type'
  },
  Electrician:                      {
    description: 'An electrician.',
    id:          'Electrician',
    label:       'Electrician',
    subClassOf:  'HomeAndConstructionBusiness',
    type:        'Type'
  },
  ElectronicsStore:                 {
    description: 'An electronics store.',
    id:          'ElectronicsStore',
    label:       'ElectronicsStore',
    subClassOf:  'Store',
    type:        'Type'
  },
  ElementarySchool:                 {
    description: 'An elementary school.',
    id:          'ElementarySchool',
    label:       'ElementarySchool',
    subClassOf:  'EducationalOrganization',
    type:        'Type'
  },
  EmailMessage:                     {
    description: 'An email message.',
    id:          'EmailMessage',
    label:       'EmailMessage',
    subClassOf:  'Message',
    type:        'Type'
  },
  Embassy:                          {
    description: 'An embassy.',
    id:          'Embassy',
    label:       'Embassy',
    subClassOf:  'GovernmentBuilding',
    type:        'Type'
  },
  EmergencyService:                 {
    description: 'An emergency service, such as a fire station or ER.',
    id:          'EmergencyService',
    label:       'EmergencyService',
    subClassOf:  'LocalBusiness',
    type:        'Type'
  },
  EmployeeRole:                     {
    description: 'A subclass of OrganizationRole used to describe employee relationships.',
    id:          'EmployeeRole',
    label:       'EmployeeRole',
    subClassOf:  'OrganizationRole',
    type:        'Type'
  },
  EmploymentAgency:                 {
    description: 'An employment agency.',
    id:          'EmploymentAgency',
    label:       'EmploymentAgency',
    subClassOf:  'LocalBusiness',
    type:        'Type'
  },
  EndorseAction:                    {
    description: 'An agent approves/certifies/likes/supports/sanction an object.',
    id:          'EndorseAction',
    label:       'EndorseAction',
    subClassOf:  'ReactAction',
    type:        'Type'
  },
  Energy:                           {
    description: 'Properties that take Energy as values are of the form \'&lt;Number&gt; &lt;Energy unit of measure&gt;\'.',
    id:          'Energy',
    label:       'Energy',
    subClassOf:  'Quantity',
    type:        'Type'
  },
  EngineSpecification:              {
    description: 'Information about the engine of the vehicle. A vehicle can have multiple engines represented by multiple engine specification entities.',
    id:          'EngineSpecification',
    label:       'EngineSpecification',
    source:      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group',
    subClassOf:  'StructuredValue',
    type:        'Type'
  },
  EntertainmentBusiness:            {
    description: 'A business providing entertainment.',
    id:          'EntertainmentBusiness',
    label:       'EntertainmentBusiness',
    subClassOf:  'LocalBusiness',
    type:        'Type'
  },
  EntryPoint:                       {
    description: 'An entry point, within some Web-based protocol.',
    id:          'EntryPoint',
    label:       'EntryPoint',
    source:      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_ActionCollabClass',
    subClassOf:  'Intangible',
    type:        'Type'
  },
  Enumeration:                      {
    description: 'Lists or enumerations—for example, a list of cuisines or music genres, etc.',
    id:          'Enumeration',
    label:       'Enumeration',
    subClassOf:  'Intangible',
    type:        'Type'
  },
  Episode:                          {
    description: 'A media episode (e.g. TV, radio, video game) which can be part of a series or season.',
    id:          'Episode',
    label:       'Episode',
    subClassOf:  'CreativeWork',
    type:        'Type'
  },
  Event:                            {
    description:     'An event happening at a certain time and location, such as a concert, lecture, or festival. Ticketing information may be added via the <a class="localLink" href="/offers">offers</a> property. Repeated events may be structured as separate Event objects.',
    equivalentClass: 'http://purl.org/dc/dcmitype/Event',
    id:              'Event',
    label:           'Event',
    subClassOf:      'Thing',
    type:            'Type'
  },
  EventCancelled:                   {
    description: [
      'The event has been cancelled. If the event has multiple startDate values, all are assumed to be cancelled. Either startDate or previousStartDate may be used to specify the event\'s cancelled date(s).'
    ],
    id:          'EventCancelled',
    label:       [
      'EventCancelled'
    ],
    type:        [
      'EventStatusType'
    ]
  },
  EventPostponed:                   {
    description: [
      'The event has been postponed and no new date has been set. The event\'s previousStartDate should be set.'
    ],
    id:          'EventPostponed',
    label:       [
      'EventPostponed'
    ],
    type:        [
      'EventStatusType'
    ]
  },
  EventRescheduled:                 {
    description: [
      'The event has been rescheduled. The event\'s previousStartDate should be set to the old date and the startDate should be set to the event\'s new date. (If the event has been rescheduled multiple times, the previousStartDate property may be repeated).'
    ],
    id:          'EventRescheduled',
    label:       [
      'EventRescheduled'
    ],
    type:        [
      'EventStatusType'
    ]
  },
  EventReservation:                 {
    description: 'A reservation for an event like a concert, sporting event, or lecture.</p>\n<p>Note: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use <a class="localLink" href="/Offer">Offer</a>.',
    id:          'EventReservation',
    label:       'EventReservation',
    subClassOf:  'Reservation',
    type:        'Type'
  },
  EventScheduled:                   {
    description: [
      'The event is taking place or has taken place on the startDate as scheduled. Use of this value is optional, as it is assumed by default.'
    ],
    id:          'EventScheduled',
    label:       [
      'EventScheduled'
    ],
    type:        [
      'EventStatusType'
    ]
  },
  EventStatusType:                  {
    description: 'EventStatusType is an enumeration type whose instances represent several states that an Event may be in.',
    id:          'EventStatusType',
    label:       'EventStatusType',
    subClassOf:  'Enumeration',
    type:        'Type'
  },
  EventVenue:                       {
    description: 'An event venue.',
    id:          'EventVenue',
    label:       'EventVenue',
    subClassOf:  'CivicStructure',
    type:        'Type'
  },
  ExerciseAction:                   {
    description: 'The act of participating in exertive activity for the purposes of improving health and fitness.',
    id:          'ExerciseAction',
    label:       'ExerciseAction',
    subClassOf:  'PlayAction',
    type:        'Type'
  },
  ExerciseGym:                      {
    description: 'A gym.',
    id:          'ExerciseGym',
    label:       'ExerciseGym',
    subClassOf:  'SportsActivityLocation',
    type:        'Type'
  },
  ExhibitionEvent:                  {
    description: 'Event type: Exhibition event, e.g. at a museum, library, archive, tradeshow, ...',
    id:          'ExhibitionEvent',
    label:       'ExhibitionEvent',
    subClassOf:  'Event',
    type:        'Type'
  },
  FailedActionStatus:               {
    description: [
      'An action that failed to complete. The action\'s error property and the HTTP return code contain more information about the failure.'
    ],
    id:          'FailedActionStatus',
    label:       [
      'FailedActionStatus'
    ],
    type:        [
      'ActionStatusType'
    ]
  },
  False:                            {
    description: [
      'The boolean value false.'
    ],
    id:          'False',
    label:       [
      'False'
    ],
    type:        [
      'Boolean'
    ]
  },
  FastFoodRestaurant:               {
    description: 'A fast-food restaurant.',
    id:          'FastFoodRestaurant',
    label:       'FastFoodRestaurant',
    subClassOf:  'FoodEstablishment',
    type:        'Type'
  },
  Female:                           {
    description: [
      'The female gender.'
    ],
    id:          'Female',
    label:       [
      'Female'
    ],
    type:        [
      'GenderType'
    ]
  },
  Festival:                         {
    description: 'Event type: Festival.',
    id:          'Festival',
    label:       'Festival',
    subClassOf:  'Event',
    type:        'Type'
  },
  FilmAction:                       {
    description: 'The act of capturing sound and moving images on film, video, or digitally.',
    id:          'FilmAction',
    label:       'FilmAction',
    subClassOf:  'CreateAction',
    type:        'Type'
  },
  FinancialProduct:                 {
    description: 'A product provided to consumers and businesses by financial institutions such as banks, insurance companies, brokerage firms, consumer finance companies, and investment companies which comprise the financial services industry.',
    id:          'FinancialProduct',
    label:       'FinancialProduct',
    source:      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO',
    subClassOf:  'Service',
    type:        'Type'
  },
  FinancialService:                 {
    description: 'Financial services business.',
    id:          'FinancialService',
    label:       'FinancialService',
    subClassOf:  'LocalBusiness',
    type:        'Type'
  },
  FindAction:                       {
    description: '<p>TThe act of finding an object.</p>\n<p>Related actions:</p>\n<ul>\n<li><a class="localLink" href="/SearchAction">SearchAction</a>: FindAction is generally lead by a SearchAction, but not necessarily.</li>\n</ul>',
    id:          'FindAction',
    label:       'FindAction',
    subClassOf:  'Action',
    type:        'Type'
  },
  FireStation:                      {
    description: 'A fire station. With firemen.',
    id:          'FireStation',
    label:       'FireStation',
    subClassOf:  [
      'CivicStructure',
      'EmergencyService'
    ],
    type:        'Type'
  },
  Flight:                           {
    description: 'An airline flight.',
    id:          'Flight',
    label:       'Flight',
    subClassOf:  'Intangible',
    type:        'Type'
  },
  FlightReservation:                {
    description: 'A reservation for air travel.</p>\n<p>Note: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use <a class="localLink" href="/Offer">Offer</a>.',
    id:          'FlightReservation',
    label:       'FlightReservation',
    subClassOf:  'Reservation',
    type:        'Type'
  },
  Float:                            {
    description: 'Data type: Floating number.',
    id:          'Float',
    label:       'Float',
    subClassOf:  'Number',
    type:        'Type'
  },
  Florist:                          {
    description: 'A florist.',
    id:          'Florist',
    label:       'Florist',
    subClassOf:  'Store',
    type:        'Type'
  },
  FollowAction:                     {
    description: '<p>The act of forming a personal connection with someone/something (object) unidirectionally/asymmetrically to get updates polled from.</p>\n<p>Related actions:</p>\n<ul>\n<li><a class="localLink" href="/BefriendAction">BefriendAction</a>: Unlike BefriendAction, FollowAction implies that the connection is <em>not</em> necessarily reciprocal.</li>\n<li><a class="localLink" href="/SubscribeAction">SubscribeAction</a>: Unlike SubscribeAction, FollowAction implies that the follower acts as an active agent constantly/actively polling for updates.</li>\n<li><a class="localLink" href="/RegisterAction">RegisterAction</a>: Unlike RegisterAction, FollowAction implies that the agent is interested in continuing receiving updates from the object.</li>\n<li><a class="localLink" href="/JoinAction">JoinAction</a>: Unlike JoinAction, FollowAction implies that the agent is interested in getting updates from the object.</li>\n<li><a class="localLink" href="/TrackAction">TrackAction</a>: Unlike TrackAction, FollowAction refers to the polling of updates of all aspects of animate objects rather than the location of inanimate objects (e.g. you track a package, but you don\'t follow it).</li>\n</ul>',
    id:          'FollowAction',
    label:       'FollowAction',
    subClassOf:  'InteractAction',
    type:        'Type'
  },
  FoodEstablishment:                {
    description: 'A food-related business.',
    id:          'FoodEstablishment',
    label:       'FoodEstablishment',
    subClassOf:  'LocalBusiness',
    type:        'Type'
  },
  FoodEstablishmentReservation:     {
    description: 'A reservation to dine at a food-related business.Note: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations.',
    id:          'FoodEstablishmentReservation',
    label:       'FoodEstablishmentReservation',
    subClassOf:  'Reservation',
    type:        'Type'
  },
  FoodEvent:                        {
    description: 'Event type: Food event.',
    id:          'FoodEvent',
    label:       'FoodEvent',
    subClassOf:  'Event',
    type:        'Type'
  },
  FoodService:                      {
    description: 'A food service, like breakfast, lunch, or dinner.',
    id:          'FoodService',
    label:       'FoodService',
    source:      'https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology',
    subClassOf:  'Service',
    type:        'Type'
  },
  FourWheelDriveConfiguration:      {
    description: [
      'Four-wheel drive is a transmission layout where the engine primarily drives two wheels with a part-time four-wheel drive capability.'
    ],
    id:          'FourWheelDriveConfiguration',
    label:       [
      'FourWheelDriveConfiguration'
    ],
    source:      [
      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group'
    ],
    type:        [
      'DriveWheelConfigurationValue'
    ]
  },
  Friday:                           {
    description: [
      'The day of the week between Thursday and Saturday.'
    ],
    id:          'Friday',
    label:       [
      'Friday'
    ],
    sameAs:      [
      'http://www.wikidata.org/entity/Q130'
    ],
    type:        [
      'DayOfWeek'
    ]
  },
  FrontWheelDriveConfiguration:     {
    description: [
      'Front-wheel drive is a transmission layout where the engine drives the front wheels.'
    ],
    id:          'FrontWheelDriveConfiguration',
    label:       [
      'FrontWheelDriveConfiguration'
    ],
    source:      [
      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group'
    ],
    type:        [
      'DriveWheelConfigurationValue'
    ]
  },
  FurnitureStore:                   {
    description: 'A furniture store.',
    id:          'FurnitureStore',
    label:       'FurnitureStore',
    subClassOf:  'Store',
    type:        'Type'
  },
  Game:                             {
    description: 'The Game type represents things which are games. These are typically rule-governed recreational activities, e.g. role-playing games in which players assume the role of characters in a fictional setting.',
    id:          'Game',
    label:       'Game',
    subClassOf:  'CreativeWork',
    type:        'Type'
  },
  GamePlayMode:                     {
    description: 'Indicates whether this game is multi-player, co-op or single-player.',
    id:          'GamePlayMode',
    label:       'GamePlayMode',
    subClassOf:  'Enumeration',
    type:        'Type'
  },
  GameServer:                       {
    description: 'Server that provides game interaction in a multiplayer game.',
    id:          'GameServer',
    label:       'GameServer',
    subClassOf:  'Intangible',
    type:        'Type'
  },
  GameServerStatus:                 {
    description: 'Status of a game server.',
    id:          'GameServerStatus',
    label:       'GameServerStatus',
    subClassOf:  'Enumeration',
    type:        'Type'
  },
  GardenStore:                      {
    description: 'A garden store.',
    id:          'GardenStore',
    label:       'GardenStore',
    subClassOf:  'Store',
    type:        'Type'
  },
  GasStation:                       {
    description: 'A gas station.',
    id:          'GasStation',
    label:       'GasStation',
    subClassOf:  'AutomotiveBusiness',
    type:        'Type'
  },
  GatedResidenceCommunity:          {
    description: 'Residence type: Gated community.',
    id:          'GatedResidenceCommunity',
    label:       'GatedResidenceCommunity',
    subClassOf:  'Residence',
    type:        'Type'
  },
  GenderType:                       {
    description: 'An enumeration of genders.',
    id:          'GenderType',
    label:       'GenderType',
    subClassOf:  'Enumeration',
    type:        'Type'
  },
  GeneralContractor:                {
    description: 'A general contractor.',
    id:          'GeneralContractor',
    label:       'GeneralContractor',
    subClassOf:  'HomeAndConstructionBusiness',
    type:        'Type'
  },
  GeoCircle:                        {
    description: 'A GeoCircle is a GeoShape representing a circular geographic area. As it is a GeoShape\n          it provides the simple textual property \'circle\', but also allows the combination of postalCode alongside geoRadius.\n          The center of the circle can be indicated via the \'geoMidpoint\' property, or more approximately using \'address\', \'postalCode\'.',
    id:          'GeoCircle',
    label:       'GeoCircle',
    subClassOf:  'GeoShape',
    type:        'Type'
  },
  GeoCoordinates:                   {
    description: 'The geographic coordinates of a place or event.',
    id:          'GeoCoordinates',
    label:       'GeoCoordinates',
    subClassOf:  'StructuredValue',
    type:        'Type'
  },
  GeoShape:                         {
    description: 'The geographic shape of a place. A GeoShape can be described using several properties whose values are based on latitude/longitude pairs. Either whitespace or commas can be used to separate latitude and longitude; whitespace should be used when writing a list of several such points.',
    id:          'GeoShape',
    label:       'GeoShape',
    source:      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_rNews',
    subClassOf:  'StructuredValue',
    type:        'Type'
  },
  GiveAction:                       {
    description: '<p>The act of transferring ownership of an object to a destination. Reciprocal of TakeAction.</p>\n<p>Related actions:</p>\n<ul>\n<li><a class="localLink" href="/TakeAction">TakeAction</a>: Reciprocal of GiveAction.</li>\n<li><a class="localLink" href="/SendAction">SendAction</a>: Unlike SendAction, GiveAction implies that ownership is being transferred (e.g. I may send my laptop to you, but that doesn\'t mean I\'m giving it to you).</li>\n</ul>',
    id:          'GiveAction',
    label:       'GiveAction',
    subClassOf:  'TransferAction',
    type:        'Type'
  },
  GlutenFreeDiet:                   {
    description: [
      'A diet exclusive of gluten.'
    ],
    id:          'GlutenFreeDiet',
    label:       [
      'GlutenFreeDiet'
    ],
    type:        [
      'RestrictedDiet'
    ]
  },
  GolfCourse:                       {
    description: 'A golf course.',
    id:          'GolfCourse',
    label:       'GolfCourse',
    subClassOf:  'SportsActivityLocation',
    type:        'Type'
  },
  GovernmentBuilding:               {
    description: 'A government building.',
    id:          'GovernmentBuilding',
    label:       'GovernmentBuilding',
    subClassOf:  'CivicStructure',
    type:        'Type'
  },
  GovernmentOffice:                 {
    description: 'A government office&#x2014;for example, an IRS or DMV office.',
    id:          'GovernmentOffice',
    label:       'GovernmentOffice',
    subClassOf:  'LocalBusiness',
    type:        'Type'
  },
  GovernmentOrganization:           {
    description: 'A governmental organization or agency.',
    id:          'GovernmentOrganization',
    label:       'GovernmentOrganization',
    subClassOf:  'Organization',
    type:        'Type'
  },
  GovernmentPermit:                 {
    description: 'A permit issued by a government agency.',
    id:          'GovernmentPermit',
    label:       'GovernmentPermit',
    subClassOf:  'Permit',
    type:        'Type'
  },
  GovernmentService:                {
    description: 'A service provided by a government organization, e.g. food stamps, veterans benefits, etc.',
    id:          'GovernmentService',
    label:       'GovernmentService',
    subClassOf:  'Service',
    type:        'Type'
  },
  GroceryStore:                     {
    description: 'A grocery store.',
    id:          'GroceryStore',
    label:       'GroceryStore',
    subClassOf:  'Store',
    type:        'Type'
  },
  GroupBoardingPolicy:              {
    description: [
      'The airline boards by groups based on check-in time, priority, etc.'
    ],
    id:          'GroupBoardingPolicy',
    label:       [
      'GroupBoardingPolicy'
    ],
    type:        [
      'BoardingPolicyType'
    ]
  },
  HVACBusiness:                     {
    description: 'A business that provide Heating, Ventilation and Air Conditioning services.',
    id:          'HVACBusiness',
    label:       'HVACBusiness',
    subClassOf:  'HomeAndConstructionBusiness',
    type:        'Type'
  },
  HairSalon:                        {
    description: 'A hair salon.',
    id:          'HairSalon',
    label:       'HairSalon',
    subClassOf:  'HealthAndBeautyBusiness',
    type:        'Type'
  },
  HalalDiet:                        {
    description: [
      'A diet conforming to Islamic dietary practices.'
    ],
    id:          'HalalDiet',
    label:       [
      'HalalDiet'
    ],
    type:        [
      'RestrictedDiet'
    ]
  },
  Hardcover:                        {
    description: [
      'Book format: Hardcover.'
    ],
    id:          'Hardcover',
    label:       [
      'Hardcover'
    ],
    type:        [
      'BookFormatType'
    ]
  },
  HardwareStore:                    {
    description: 'A hardware store.',
    id:          'HardwareStore',
    label:       'HardwareStore',
    subClassOf:  'Store',
    type:        'Type'
  },
  HealthAndBeautyBusiness:          {
    description: 'Health and beauty.',
    id:          'HealthAndBeautyBusiness',
    label:       'HealthAndBeautyBusiness',
    subClassOf:  'LocalBusiness',
    type:        'Type'
  },
  HealthClub:                       {
    description: 'A health club.',
    id:          'HealthClub',
    label:       'HealthClub',
    subClassOf:  [
      'HealthAndBeautyBusiness',
      'SportsActivityLocation'
    ],
    type:        'Type'
  },
  HearingImpairedSupported:         {
    description: [
      'Uses devices to support users with hearing impairments.'
    ],
    id:          'HearingImpairedSupported',
    label:       [
      'HearingImpairedSupported'
    ],
    type:        [
      'ContactPointOption'
    ]
  },
  HighSchool:                       {
    description: 'A high school.',
    id:          'HighSchool',
    label:       'HighSchool',
    subClassOf:  'EducationalOrganization',
    type:        'Type'
  },
  HinduDiet:                        {
    description: [
      'A diet conforming to Hindu dietary practices, in particular, beef-free.'
    ],
    id:          'HinduDiet',
    label:       [
      'HinduDiet'
    ],
    type:        [
      'RestrictedDiet'
    ]
  },
  HinduTemple:                      {
    description: 'A Hindu temple.',
    id:          'HinduTemple',
    label:       'HinduTemple',
    subClassOf:  'PlaceOfWorship',
    type:        'Type'
  },
  HobbyShop:                        {
    description: 'A store that sells materials useful or necessary for various hobbies.',
    id:          'HobbyShop',
    label:       'HobbyShop',
    subClassOf:  'Store',
    type:        'Type'
  },
  HomeAndConstructionBusiness:      {
    description: 'A construction business.</p>\n<p>A HomeAndConstructionBusiness is a <a class="localLink" href="/LocalBusiness">LocalBusiness</a> that provides services around homes and buildings.</p>\n<p>As a <a class="localLink" href="/LocalBusiness">LocalBusiness</a> it can be described as a <a class="localLink" href="/provider">provider</a> of one or more <a class="localLink" href="/Service">Service</a>(s).',
    id:          'HomeAndConstructionBusiness',
    label:       'HomeAndConstructionBusiness',
    subClassOf:  'LocalBusiness',
    type:        'Type'
  },
  HomeGoodsStore:                   {
    description: 'A home goods store.',
    id:          'HomeGoodsStore',
    label:       'HomeGoodsStore',
    subClassOf:  'Store',
    type:        'Type'
  },
  Hospital:                         {
    description: 'A hospital.',
    id:          'Hospital',
    label:       'Hospital',
    subClassOf:  [
      'EmergencyService',
      'MedicalOrganization',
      'CivicStructure'
    ],
    type:        'Type'
  },
  Hostel:                           {
    description: 'A hostel - cheap accommodation, often in shared dormitories.\n<br /><br />\nSee also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.',
    id:          'Hostel',
    label:       'Hostel',
    subClassOf:  'LodgingBusiness',
    type:        'Type'
  },
  Hotel:                            {
    description: 'A hotel is an establishment that provides lodging paid on a short-term basis (Source: Wikipedia, the free encyclopedia, see http://en.wikipedia.org/wiki/Hotel).\n<br /><br />\nSee also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.',
    id:          'Hotel',
    label:       'Hotel',
    source:      'https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology',
    subClassOf:  'LodgingBusiness',
    type:        'Type'
  },
  HotelRoom:                        {
    description: 'A hotel room is a single room in a hotel.\n<br /><br />\nSee also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.',
    id:          'HotelRoom',
    label:       'HotelRoom',
    source:      'https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology',
    subClassOf:  'Room',
    type:        'Type'
  },
  House:                            {
    description: 'A house is a building or structure that has the ability to be occupied for habitation by humans or other creatures (Source: Wikipedia, the free encyclopedia, see <a href="http://en.wikipedia.org/wiki/House">http://en.wikipedia.org/wiki/House</a>).',
    id:          'House',
    label:       'House',
    source:      'https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology',
    subClassOf:  'Accommodation',
    type:        'Type'
  },
  HousePainter:                     {
    description: 'A house painting service.',
    id:          'HousePainter',
    label:       'HousePainter',
    subClassOf:  'HomeAndConstructionBusiness',
    type:        'Type'
  },
  IceCreamShop:                     {
    description: 'An ice cream shop.',
    id:          'IceCreamShop',
    label:       'IceCreamShop',
    subClassOf:  'FoodEstablishment',
    type:        'Type'
  },
  IgnoreAction:                     {
    description: 'The act of intentionally disregarding the object. An agent ignores an object.',
    id:          'IgnoreAction',
    label:       'IgnoreAction',
    subClassOf:  'AssessAction',
    type:        'Type'
  },
  ImageGallery:                     {
    description: 'Web page type: Image gallery page.',
    id:          'ImageGallery',
    label:       'ImageGallery',
    subClassOf:  'CollectionPage',
    type:        'Type'
  },
  ImageObject:                      {
    description:     'An image file.',
    equivalentClass: 'http://purl.org/dc/dcmitype/Image',
    id:              'ImageObject',
    label:           'ImageObject',
    subClassOf:      'MediaObject',
    type:            'Type'
  },
  InStock:                          {
    description: [
      'Indicates that the item is in stock.'
    ],
    id:          'InStock',
    label:       [
      'InStock'
    ],
    type:        [
      'ItemAvailability'
    ]
  },
  InStoreOnly:                      {
    description: [
      'Indicates that the item is available only at physical locations.'
    ],
    id:          'InStoreOnly',
    label:       [
      'InStoreOnly'
    ],
    type:        [
      'ItemAvailability'
    ]
  },
  IndividualProduct:                {
    description: 'A single, identifiable product instance (e.g. a laptop with a particular serial number).',
    id:          'IndividualProduct',
    label:       'IndividualProduct',
    source:      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass',
    subClassOf:  'Product',
    type:        'Type'
  },
  InformAction:                     {
    description: 'The act of notifying someone of information pertinent to them, with no expectation of a response.',
    id:          'InformAction',
    label:       'InformAction',
    subClassOf:  'CommunicateAction',
    type:        'Type'
  },
  InsertAction:                     {
    description: 'The act of adding at a specific location in an ordered collection.',
    id:          'InsertAction',
    label:       'InsertAction',
    subClassOf:  'AddAction',
    type:        'Type'
  },
  InstallAction:                    {
    description: 'The act of installing an application.',
    id:          'InstallAction',
    label:       'InstallAction',
    subClassOf:  'ConsumeAction',
    type:        'Type'
  },
  InsuranceAgency:                  {
    description: 'An Insurance agency.',
    id:          'InsuranceAgency',
    label:       'InsuranceAgency',
    subClassOf:  'FinancialService',
    type:        'Type'
  },
  Intangible:                       {
    description: 'A utility class that serves as the umbrella for a number of \'intangible\' things such as quantities, structured values, etc.',
    id:          'Intangible',
    label:       'Intangible',
    subClassOf:  'Thing',
    type:        'Type'
  },
  Integer:                          {
    description: 'Data type: Integer.',
    id:          'Integer',
    label:       'Integer',
    subClassOf:  'Number',
    type:        'Type'
  },
  InteractAction:                   {
    description: 'The act of interacting with another person or organization.',
    id:          'InteractAction',
    label:       'InteractAction',
    subClassOf:  'Action',
    type:        'Type'
  },
  InteractionCounter:               {
    description: 'A summary of how users have interacted with this CreativeWork. In most cases, authors will use a subtype to specify the specific type of interaction.',
    id:          'InteractionCounter',
    label:       'InteractionCounter',
    subClassOf:  'StructuredValue',
    type:        'Type'
  },
  InternetCafe:                     {
    description: 'An internet cafe.',
    id:          'InternetCafe',
    label:       'InternetCafe',
    subClassOf:  'LocalBusiness',
    type:        'Type'
  },
  InvestmentOrDeposit:              {
    description: 'A type of financial product that typically requires the client to transfer funds to a financial service in return for potential beneficial financial return.',
    id:          'InvestmentOrDeposit',
    label:       'InvestmentOrDeposit',
    source:      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO',
    subClassOf:  'FinancialProduct',
    type:        'Type'
  },
  InviteAction:                     {
    description: 'The act of asking someone to attend an event. Reciprocal of RsvpAction.',
    id:          'InviteAction',
    label:       'InviteAction',
    subClassOf:  'CommunicateAction',
    type:        'Type'
  },
  Invoice:                          {
    description: 'A statement of the money due for goods or services; a bill.',
    id:          'Invoice',
    label:       'Invoice',
    subClassOf:  'Intangible',
    type:        'Type'
  },
  ItemAvailability:                 {
    description: 'A list of possible product availability options.',
    id:          'ItemAvailability',
    label:       'ItemAvailability',
    subClassOf:  'Enumeration',
    type:        'Type'
  },
  ItemList:                         {
    description: 'A list of items of any sort&#x2014;for example, Top 10 Movies About Weathermen, or Top 100 Party Songs. Not to be confused with HTML lists, which are often used only for formatting.',
    id:          'ItemList',
    label:       'ItemList',
    subClassOf:  'Intangible',
    type:        'Type'
  },
  ItemListOrderAscending:           {
    description: [
      'An ItemList ordered with lower values listed first.'
    ],
    id:          'ItemListOrderAscending',
    label:       [
      'ItemListOrderAscending'
    ],
    type:        [
      'ItemListOrderType'
    ]
  },
  ItemListOrderDescending:          {
    description: [
      'An ItemList ordered with higher values listed first.'
    ],
    id:          'ItemListOrderDescending',
    label:       [
      'ItemListOrderDescending'
    ],
    type:        [
      'ItemListOrderType'
    ]
  },
  ItemListOrderType:                {
    description: 'Enumerated for values for itemListOrder for indicating how an ordered ItemList is organized.',
    id:          'ItemListOrderType',
    label:       'ItemListOrderType',
    subClassOf:  'Enumeration',
    type:        'Type'
  },
  ItemListUnordered:                {
    description: [
      'An ItemList ordered with no explicit order.'
    ],
    id:          'ItemListUnordered',
    label:       [
      'ItemListUnordered'
    ],
    type:        [
      'ItemListOrderType'
    ]
  },
  ItemPage:                         {
    description: 'A page devoted to a single item, such as a particular product or hotel.',
    id:          'ItemPage',
    label:       'ItemPage',
    subClassOf:  'WebPage',
    type:        'Type'
  },
  JewelryStore:                     {
    description: 'A jewelry store.',
    id:          'JewelryStore',
    label:       'JewelryStore',
    subClassOf:  'Store',
    type:        'Type'
  },
  JobPosting:                       {
    description: 'A listing that describes a job opening in a certain organization.',
    id:          'JobPosting',
    label:       'JobPosting',
    subClassOf:  'Intangible',
    type:        'Type'
  },
  JoinAction:                       {
    description: '<p>An agent joins an event/group with participants/friends at a location.</p>\n<p>Related actions:</p>\n<ul>\n<li><a class="localLink" href="/RegisterAction">RegisterAction</a>: Unlike RegisterAction, JoinAction refers to joining a group/team of people.</li>\n<li><a class="localLink" href="/SubscribeAction">SubscribeAction</a>: Unlike SubscribeAction, JoinAction does not imply that you\'ll be receiving updates.</li>\n<li><a class="localLink" href="/FollowAction">FollowAction</a>: Unlike FollowAction, JoinAction does not imply that you\'ll be polling for updates.</li>\n</ul>',
    id:          'JoinAction',
    label:       'JoinAction',
    subClassOf:  'InteractAction',
    type:        'Type'
  },
  KosherDiet:                       {
    description: [
      'A diet conforming to Jewish dietary practices.'
    ],
    id:          'KosherDiet',
    label:       [
      'KosherDiet'
    ],
    type:        [
      'RestrictedDiet'
    ]
  },
  LakeBodyOfWater:                  {
    description: 'A lake (for example, Lake Pontrachain).',
    id:          'LakeBodyOfWater',
    label:       'LakeBodyOfWater',
    subClassOf:  'BodyOfWater',
    type:        'Type'
  },
  Landform:                         {
    description: 'A landform or physical feature.  Landform elements include mountains, plains, lakes, rivers, seascape and oceanic waterbody interface features such as bays, peninsulas, seas and so forth, including sub-aqueous terrain features such as submersed mountain ranges, volcanoes, and the great ocean basins.',
    id:          'Landform',
    label:       'Landform',
    subClassOf:  'Place',
    type:        'Type'
  },
  LandmarksOrHistoricalBuildings:   {
    description: 'An historical landmark or building.',
    id:          'LandmarksOrHistoricalBuildings',
    label:       'LandmarksOrHistoricalBuildings',
    subClassOf:  'Place',
    type:        'Type'
  },
  Language:                         {
    description: 'Natural languages such as Spanish, Tamil, Hindi, English, etc. Formal language code tags expressed in <a href="https://en.wikipedia.org/wiki/IETF_language_tag">BCP 47</a> can be used via the <a class="localLink" href="/alternateName">alternateName</a> property. The Language type previously also covered programming languages such as Scheme and Lisp, which are now best represented using <a class="localLink" href="/ComputerLanguage">ComputerLanguage</a>.',
    id:          'Language',
    label:       'Language',
    subClassOf:  'Intangible',
    type:        'Type'
  },
  LaserDiscFormat:                  {
    description: [
      'LaserDiscFormat.'
    ],
    id:          'LaserDiscFormat',
    label:       [
      'LaserDiscFormat'
    ],
    source:      [
      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ'
    ],
    type:        [
      'MusicReleaseFormatType'
    ]
  },
  LeaveAction:                      {
    description: '<p>An agent leaves an event / group with participants/friends at a location.</p>\n<p>Related actions:</p>\n<ul>\n<li><a class="localLink" href="/JoinAction">JoinAction</a>: The antonym of LeaveAction.</li>\n<li><a class="localLink" href="/UnRegisterAction">UnRegisterAction</a>: Unlike UnRegisterAction, LeaveAction implies leaving a group/team of people rather than a service.</li>\n</ul>',
    id:          'LeaveAction',
    label:       'LeaveAction',
    subClassOf:  'InteractAction',
    type:        'Type'
  },
  LeftHandDriving:                  {
    description: [
      'The steering position is on the left side of the vehicle (viewed from the main direction of driving).'
    ],
    id:          'LeftHandDriving',
    label:       [
      'LeftHandDriving'
    ],
    source:      [
      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group'
    ],
    type:        [
      'SteeringPositionValue'
    ]
  },
  LegalService:                     {
    description: 'A LegalService is a business that provides legally-oriented services, advice and representation, e.g. law firms.</p>\n<p>As a <a class="localLink" href="/LocalBusiness">LocalBusiness</a> it can be described as a <a class="localLink" href="/provider">provider</a> of one or more <a class="localLink" href="/Service">Service</a>(s).',
    id:          'LegalService',
    label:       'LegalService',
    subClassOf:  'LocalBusiness',
    type:        'Type'
  },
  LegislativeBuilding:              {
    description: 'A legislative building&#x2014;for example, the state capitol.',
    id:          'LegislativeBuilding',
    label:       'LegislativeBuilding',
    subClassOf:  'GovernmentBuilding',
    type:        'Type'
  },
  LendAction:                       {
    description: '<p>The act of providing an object under an agreement that it will be returned at a later date. Reciprocal of BorrowAction.</p>\n<p>Related actions:</p>\n<ul>\n<li><a class="localLink" href="/BorrowAction">BorrowAction</a>: Reciprocal of LendAction.</li>\n</ul>',
    id:          'LendAction',
    label:       'LendAction',
    subClassOf:  'TransferAction',
    type:        'Type'
  },
  Library:                          {
    description: 'A library.',
    id:          'Library',
    label:       'Library',
    subClassOf:  'LocalBusiness',
    type:        'Type'
  },
  LikeAction:                       {
    description: 'The act of expressing a positive sentiment about the object. An agent likes an object (a proposition, topic or theme) with participants.',
    id:          'LikeAction',
    label:       'LikeAction',
    subClassOf:  'ReactAction',
    type:        'Type'
  },
  LimitedAvailability:              {
    description: [
      'Indicates that the item has limited availability.'
    ],
    id:          'LimitedAvailability',
    label:       [
      'LimitedAvailability'
    ],
    type:        [
      'ItemAvailability'
    ]
  },
  LiquorStore:                      {
    description: 'A shop that sells alcoholic drinks such as wine, beer, whisky and other spirits.',
    id:          'LiquorStore',
    label:       'LiquorStore',
    subClassOf:  'Store',
    type:        'Type'
  },
  ListItem:                         {
    description: 'An list item, e.g. a step in a checklist or how-to description.',
    id:          'ListItem',
    label:       'ListItem',
    subClassOf:  'Intangible',
    type:        'Type'
  },
  ListenAction:                     {
    description: 'The act of consuming audio content.',
    id:          'ListenAction',
    label:       'ListenAction',
    subClassOf:  'ConsumeAction',
    type:        'Type'
  },
  LiteraryEvent:                    {
    description: 'Event type: Literary event.',
    id:          'LiteraryEvent',
    label:       'LiteraryEvent',
    subClassOf:  'Event',
    type:        'Type'
  },
  LiveAlbum:                        {
    description: [
      'LiveAlbum.'
    ],
    id:          'LiveAlbum',
    label:       [
      'LiveAlbum'
    ],
    source:      [
      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ'
    ],
    type:        [
      'MusicAlbumProductionType'
    ]
  },
  LiveBlogPosting:                  {
    description: 'A blog post intended to provide a rolling textual coverage of an ongoing event through continuous updates.',
    id:          'LiveBlogPosting',
    label:       'LiveBlogPosting',
    subClassOf:  'BlogPosting',
    type:        'Type'
  },
  LoanOrCredit:                     {
    description: 'A financial product for the loaning of an amount of money under agreed terms and charges.',
    id:          'LoanOrCredit',
    label:       'LoanOrCredit',
    source:      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO',
    subClassOf:  'FinancialProduct',
    type:        'Type'
  },
  LocalBusiness:                    {
    description: 'A particular physical business or branch of an organization. Examples of LocalBusiness include a restaurant, a particular branch of a restaurant chain, a branch of a bank, a medical practice, a club, a bowling alley, etc.',
    id:          'LocalBusiness',
    label:       'LocalBusiness',
    subClassOf:  [
      'Place',
      'Organization'
    ],
    type:        'Type'
  },
  LocationFeatureSpecification:     {
    description: 'Specifies a location feature by providing a structured value representing a feature of an accommodation as a property-value pair of varying degrees of formality.',
    id:          'LocationFeatureSpecification',
    label:       'LocationFeatureSpecification',
    source:      'https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology',
    subClassOf:  'PropertyValue',
    type:        'Type'
  },
  LockerDelivery:                   {
    description: 'A DeliveryMethod in which an item is made available via locker.',
    id:          'LockerDelivery',
    label:       'LockerDelivery',
    subClassOf:  'DeliveryMethod',
    type:        'Type'
  },
  Locksmith:                        {
    description: 'A locksmith.',
    id:          'Locksmith',
    label:       'Locksmith',
    subClassOf:  'HomeAndConstructionBusiness',
    type:        'Type'
  },
  LodgingBusiness:                  {
    description: 'A lodging business, such as a motel, hotel, or inn.',
    id:          'LodgingBusiness',
    label:       'LodgingBusiness',
    subClassOf:  'LocalBusiness',
    type:        'Type'
  },
  LodgingReservation:               {
    description: 'A reservation for lodging at a hotel, motel, inn, etc.</p>\n<p>Note: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations.',
    id:          'LodgingReservation',
    label:       'LodgingReservation',
    subClassOf:  'Reservation',
    type:        'Type'
  },
  LoseAction:                       {
    description: 'The act of being defeated in a competitive activity.',
    id:          'LoseAction',
    label:       'LoseAction',
    subClassOf:  'AchieveAction',
    type:        'Type'
  },
  LowCalorieDiet:                   {
    description: [
      'A diet focused on reduced calorie intake.'
    ],
    id:          'LowCalorieDiet',
    label:       [
      'LowCalorieDiet'
    ],
    type:        [
      'RestrictedDiet'
    ]
  },
  LowFatDiet:                       {
    description: [
      'A diet focused on reduced fat and cholesterol intake.'
    ],
    id:          'LowFatDiet',
    label:       [
      'LowFatDiet'
    ],
    type:        [
      'RestrictedDiet'
    ]
  },
  LowLactoseDiet:                   {
    description: [
      'A diet appropriate for people with lactose intolerance.'
    ],
    id:          'LowLactoseDiet',
    label:       [
      'LowLactoseDiet'
    ],
    type:        [
      'RestrictedDiet'
    ]
  },
  LowSaltDiet:                      {
    description: [
      'A diet focused on reduced sodium intake.'
    ],
    id:          'LowSaltDiet',
    label:       [
      'LowSaltDiet'
    ],
    type:        [
      'RestrictedDiet'
    ]
  },
  Male:                             {
    description: [
      'The male gender.'
    ],
    id:          'Male',
    label:       [
      'Male'
    ],
    type:        [
      'GenderType'
    ]
  },
  Map:                              {
    description: 'A map.',
    id:          'Map',
    label:       'Map',
    subClassOf:  'CreativeWork',
    type:        'Type'
  },
  MapCategoryType:                  {
    description: 'An enumeration of several kinds of Map.',
    id:          'MapCategoryType',
    label:       'MapCategoryType',
    subClassOf:  'Enumeration',
    type:        'Type'
  },
  MarryAction:                      {
    description: 'The act of marrying a person.',
    id:          'MarryAction',
    label:       'MarryAction',
    subClassOf:  'InteractAction',
    type:        'Type'
  },
  Mass:                             {
    description: 'Properties that take Mass as values are of the form \'&lt;Number&gt; &lt;Mass unit of measure&gt;\'. E.g., \'7 kg\'.',
    id:          'Mass',
    label:       'Mass',
    subClassOf:  'Quantity',
    type:        'Type'
  },
  MediaObject:                      {
    description: 'A media object, such as an image, video, or audio object embedded in a web page or a downloadable dataset i.e. DataDownload. Note that a creative work may have many media objects associated with it on the same web page. For example, a page about a single song (MusicRecording) may have a music video (VideoObject), and a high and low bandwidth audio stream (2 AudioObject\'s).',
    id:          'MediaObject',
    label:       'MediaObject',
    subClassOf:  'CreativeWork',
    type:        'Type'
  },
  MedicalOrganization:              {
    description: 'A medical organization (physical or not), such as hospital, institution or clinic.',
    id:          'MedicalOrganization',
    label:       'MedicalOrganization',
    subClassOf:  'Organization',
    type:        'Type'
  },
  MeetingRoom:                      {
    description: 'A meeting room, conference room, or conference hall is a room provided for singular events such as business conferences and meetings (Source: Wikipedia, the free encyclopedia, see <a href="http://en.wikipedia.org/wiki/Conference_hall">http://en.wikipedia.org/wiki/Conference_hall</a>).\n<br /><br />\nSee also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.',
    id:          'MeetingRoom',
    label:       'MeetingRoom',
    source:      'https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology',
    subClassOf:  'Room',
    type:        'Type'
  },
  MensClothingStore:                {
    description: 'A men\'s clothing store.',
    id:          'MensClothingStore',
    label:       'MensClothingStore',
    subClassOf:  'Store',
    type:        'Type'
  },
  Message:                          {
    description: 'A single message from a sender to one or more organizations or people.',
    id:          'Message',
    label:       'Message',
    subClassOf:  'CreativeWork',
    type:        'Type'
  },
  MiddleSchool:                     {
    description: 'A middle school (typically for children aged around 11-14, although this varies somewhat).',
    id:          'MiddleSchool',
    label:       'MiddleSchool',
    subClassOf:  'EducationalOrganization',
    type:        'Type'
  },
  MixtapeAlbum:                     {
    description: [
      'MixtapeAlbum.'
    ],
    id:          'MixtapeAlbum',
    label:       [
      'MixtapeAlbum'
    ],
    source:      [
      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ'
    ],
    type:        [
      'MusicAlbumProductionType'
    ]
  },
  MobileApplication:                {
    description: 'A software application designed specifically to work well on a mobile device such as a telephone.',
    id:          'MobileApplication',
    label:       'MobileApplication',
    subClassOf:  'SoftwareApplication',
    type:        'Type'
  },
  MobilePhoneStore:                 {
    description: 'A store that sells mobile phones and related accessories.',
    id:          'MobilePhoneStore',
    label:       'MobilePhoneStore',
    subClassOf:  'Store',
    type:        'Type'
  },
  Monday:                           {
    description: [
      'The day of the week between Sunday and Tuesday.'
    ],
    id:          'Monday',
    label:       [
      'Monday'
    ],
    sameAs:      [
      'http://www.wikidata.org/entity/Q105'
    ],
    type:        [
      'DayOfWeek'
    ]
  },
  MonetaryAmount:                   {
    description: 'A monetary value or range. This type can be used to describe an amount of money such as $50 USD, or a range as in describing a bank account being suitable for a balance between £1,000 and £1,000,000 GBP, or the value of a salary, etc. It is recommended to use <a class="localLink" href="/PriceSpecification">PriceSpecification</a> Types to describe the price of an Offer, Invoice, etc.',
    id:          'MonetaryAmount',
    label:       'MonetaryAmount',
    source:      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO',
    subClassOf:  'StructuredValue',
    type:        'Type'
  },
  Mosque:                           {
    description: 'A mosque.',
    id:          'Mosque',
    label:       'Mosque',
    subClassOf:  'PlaceOfWorship',
    type:        'Type'
  },
  Motel:                            {
    description: 'A motel.\n<br /><br />\nSee also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.',
    id:          'Motel',
    label:       'Motel',
    subClassOf:  'LodgingBusiness',
    type:        'Type'
  },
  MotorcycleDealer:                 {
    description: 'A motorcycle dealer.',
    id:          'MotorcycleDealer',
    label:       'MotorcycleDealer',
    subClassOf:  'AutomotiveBusiness',
    type:        'Type'
  },
  MotorcycleRepair:                 {
    description: 'A motorcycle repair shop.',
    id:          'MotorcycleRepair',
    label:       'MotorcycleRepair',
    subClassOf:  'AutomotiveBusiness',
    type:        'Type'
  },
  Mountain:                         {
    description: 'A mountain, like Mount Whitney or Mount Everest.',
    id:          'Mountain',
    label:       'Mountain',
    subClassOf:  'Landform',
    type:        'Type'
  },
  MoveAction:                       {
    description: '<p>The act of an agent relocating to a place.</p>\n<p>Related actions:</p>\n<ul>\n<li><a class="localLink" href="/TransferAction">TransferAction</a>: Unlike TransferAction, the subject of the move is a living Person or Organization rather than an inanimate object.</li>\n</ul>',
    id:          'MoveAction',
    label:       'MoveAction',
    subClassOf:  'Action',
    type:        'Type'
  },
  Movie:                            {
    description: 'A movie.',
    id:          'Movie',
    label:       'Movie',
    subClassOf:  'CreativeWork',
    type:        'Type'
  },
  MovieClip:                        {
    description: 'A short segment/part of a movie.',
    id:          'MovieClip',
    label:       'MovieClip',
    subClassOf:  'Clip',
    type:        'Type'
  },
  MovieRentalStore:                 {
    description: 'A movie rental store.',
    id:          'MovieRentalStore',
    label:       'MovieRentalStore',
    subClassOf:  'Store',
    type:        'Type'
  },
  MovieSeries:                      {
    description: 'A series of movies. Included movies can be indicated with the hasPart property.',
    id:          'MovieSeries',
    label:       'MovieSeries',
    subClassOf:  'CreativeWorkSeries',
    type:        'Type'
  },
  MovieTheater:                     {
    description: 'A movie theater.',
    id:          'MovieTheater',
    label:       'MovieTheater',
    subClassOf:  [
      'CivicStructure',
      'EntertainmentBusiness'
    ],
    type:        'Type'
  },
  MovingCompany:                    {
    description: 'A moving company.',
    id:          'MovingCompany',
    label:       'MovingCompany',
    subClassOf:  'HomeAndConstructionBusiness',
    type:        'Type'
  },
  MultiPlayer:                      {
    description: [
      'Play mode: MultiPlayer. Requiring or allowing multiple human players to play simultaneously.'
    ],
    id:          'MultiPlayer',
    label:       [
      'MultiPlayer'
    ],
    type:        [
      'GamePlayMode'
    ]
  },
  Museum:                           {
    description: 'A museum.',
    id:          'Museum',
    label:       'Museum',
    subClassOf:  'CivicStructure',
    type:        'Type'
  },
  MusicAlbum:                       {
    description: 'A collection of music tracks.',
    id:          'MusicAlbum',
    label:       'MusicAlbum',
    subClassOf:  'MusicPlaylist',
    type:        'Type'
  },
  MusicAlbumProductionType:         {
    description: 'Classification of the album by it\'s type of content: soundtrack, live album, studio album, etc.',
    id:          'MusicAlbumProductionType',
    label:       'MusicAlbumProductionType',
    source:      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ',
    subClassOf:  'Enumeration',
    type:        'Type'
  },
  MusicAlbumReleaseType:            {
    description: 'The kind of release which this album is: single, EP or album.',
    id:          'MusicAlbumReleaseType',
    label:       'MusicAlbumReleaseType',
    source:      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ',
    subClassOf:  'Enumeration',
    type:        'Type'
  },
  MusicComposition:                 {
    description: 'A musical composition.',
    id:          'MusicComposition',
    label:       'MusicComposition',
    source:      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ',
    subClassOf:  'CreativeWork',
    type:        'Type'
  },
  MusicEvent:                       {
    description: 'Event type: Music event.',
    id:          'MusicEvent',
    label:       'MusicEvent',
    subClassOf:  'Event',
    type:        'Type'
  },
  MusicGroup:                       {
    description: 'A musical group, such as a band, an orchestra, or a choir. Can also be a solo musician.',
    id:          'MusicGroup',
    label:       'MusicGroup',
    subClassOf:  'PerformingGroup',
    type:        'Type'
  },
  MusicPlaylist:                    {
    description: 'A collection of music tracks in playlist form.',
    id:          'MusicPlaylist',
    label:       'MusicPlaylist',
    subClassOf:  'CreativeWork',
    type:        'Type'
  },
  MusicRecording:                   {
    description: 'A music recording (track), usually a single song.',
    id:          'MusicRecording',
    label:       'MusicRecording',
    subClassOf:  'CreativeWork',
    type:        'Type'
  },
  MusicRelease:                     {
    description: 'A MusicRelease is a specific release of a music album.',
    id:          'MusicRelease',
    label:       'MusicRelease',
    source:      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ',
    subClassOf:  'MusicPlaylist',
    type:        'Type'
  },
  MusicReleaseFormatType:           {
    description: 'Format of this release (the type of recording media used, ie. compact disc, digital media, LP, etc.).',
    id:          'MusicReleaseFormatType',
    label:       'MusicReleaseFormatType',
    source:      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ',
    subClassOf:  'Enumeration',
    type:        'Type'
  },
  MusicStore:                       {
    description: 'A music store.',
    id:          'MusicStore',
    label:       'MusicStore',
    subClassOf:  'Store',
    type:        'Type'
  },
  MusicVenue:                       {
    description: 'A music venue.',
    id:          'MusicVenue',
    label:       'MusicVenue',
    subClassOf:  'CivicStructure',
    type:        'Type'
  },
  MusicVideoObject:                 {
    description: 'A music video file.',
    id:          'MusicVideoObject',
    label:       'MusicVideoObject',
    subClassOf:  'MediaObject',
    type:        'Type'
  },
  NGO:                              {
    description: 'Organization: Non-governmental Organization.',
    id:          'NGO',
    label:       'NGO',
    subClassOf:  'Organization',
    type:        'Type'
  },
  NailSalon:                        {
    description: 'A nail salon.',
    id:          'NailSalon',
    label:       'NailSalon',
    subClassOf:  'HealthAndBeautyBusiness',
    type:        'Type'
  },
  NewCondition:                     {
    description: [
      'Indicates that the item is new.'
    ],
    id:          'NewCondition',
    label:       [
      'NewCondition'
    ],
    type:        [
      'OfferItemCondition'
    ]
  },
  NewsArticle:                      {
    description: 'A news article.',
    id:          'NewsArticle',
    label:       'NewsArticle',
    source:      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_rNews',
    subClassOf:  'Article',
    type:        'Type'
  },
  NightClub:                        {
    description: 'A nightclub or discotheque.',
    id:          'NightClub',
    label:       'NightClub',
    subClassOf:  'EntertainmentBusiness',
    type:        'Type'
  },
  Notary:                           {
    description: 'A notary.',
    id:          'Notary',
    label:       'Notary',
    subClassOf:  'LegalService',
    type:        'Type'
  },
  NoteDigitalDocument:              {
    description: 'A file containing a note, primarily for the author.',
    id:          'NoteDigitalDocument',
    label:       'NoteDigitalDocument',
    subClassOf:  'DigitalDocument',
    type:        'Type'
  },
  Number:                           {
    description: 'Data type: Number.',
    id:          'Number',
    label:       'Number',
    type:        [
      'DataType',
      'Type'
    ]
  },
  NutritionInformation:             {
    description: 'Nutritional information about the recipe.',
    id:          'NutritionInformation',
    label:       'NutritionInformation',
    subClassOf:  'StructuredValue',
    type:        'Type'
  },
  OceanBodyOfWater:                 {
    description: 'An ocean (for example, the Pacific).',
    id:          'OceanBodyOfWater',
    label:       'OceanBodyOfWater',
    subClassOf:  'BodyOfWater',
    type:        'Type'
  },
  Offer:                            {
    description: 'An offer to transfer some rights to an item or to provide a service — for example, an offer to sell tickets to an event, to rent the DVD of a movie, to stream a TV show over the internet, to repair a motorcycle, or to loan a book.</p>\n<p>For <a href="http://www.gs1.org/barcodes/technical/idkeys/gtin">GTIN</a>-related fields, see <a href="http://www.gs1.org/barcodes/support/check_digit_calculator">Check Digit calculator</a> and <a href="http://www.gs1us.org/resources/standards/gtin-validation-guide">validation guide</a> from <a href="http://www.gs1.org/">GS1</a>.',
    id:          'Offer',
    label:       'Offer',
    source:      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    subClassOf:  'Intangible',
    type:        'Type'
  },
  OfferCatalog:                     {
    description: 'An OfferCatalog is an ItemList that contains related Offers and/or further OfferCatalogs that are offeredBy the same provider.',
    id:          'OfferCatalog',
    label:       'OfferCatalog',
    subClassOf:  'ItemList',
    type:        'Type'
  },
  OfferItemCondition:               {
    description: 'A list of possible conditions for the item.',
    id:          'OfferItemCondition',
    label:       'OfferItemCondition',
    subClassOf:  'Enumeration',
    type:        'Type'
  },
  OfficeEquipmentStore:             {
    description: 'An office equipment store.',
    id:          'OfficeEquipmentStore',
    label:       'OfficeEquipmentStore',
    subClassOf:  'Store',
    type:        'Type'
  },
  OfflinePermanently:               {
    description: [
      'Game server status: OfflinePermanently. Server is offline and not available.'
    ],
    id:          'OfflinePermanently',
    label:       [
      'OfflinePermanently'
    ],
    type:        [
      'GameServerStatus'
    ]
  },
  OfflineTemporarily:               {
    description: [
      'Game server status: OfflineTemporarily. Server is offline now but it can be online soon.'
    ],
    id:          'OfflineTemporarily',
    label:       [
      'OfflineTemporarily'
    ],
    type:        [
      'GameServerStatus'
    ]
  },
  OnDemandEvent:                    {
    description: 'A publication event e.g. catch-up TV or radio podcast, during which a program is available on-demand.',
    id:          'OnDemandEvent',
    label:       'OnDemandEvent',
    subClassOf:  'PublicationEvent',
    type:        'Type'
  },
  OnSitePickup:                     {
    description: [
      'A DeliveryMethod in which an item is collected on site, e.g. in a store or at a box office.'
    ],
    id:          'OnSitePickup',
    label:       [
      'OnSitePickup'
    ],
    type:        [
      'DeliveryMethod'
    ]
  },
  Online:                           {
    description: [
      'Game server status: Online. Server is available.'
    ],
    id:          'Online',
    label:       [
      'Online'
    ],
    type:        [
      'GameServerStatus'
    ]
  },
  OnlineFull:                       {
    description: [
      'Game server status: OnlineFull. Server is online but unavailable. The maximum number of players has reached.'
    ],
    id:          'OnlineFull',
    label:       [
      'OnlineFull'
    ],
    type:        [
      'GameServerStatus'
    ]
  },
  OnlineOnly:                       {
    description: [
      'Indicates that the item is available only online.'
    ],
    id:          'OnlineOnly',
    label:       [
      'OnlineOnly'
    ],
    type:        [
      'ItemAvailability'
    ]
  },
  OpeningHoursSpecification:        {
    description: 'A structured value providing information about the opening hours of a place or a certain service inside a place.</p>\n<p>The place is <strong>open</strong> if the <a class="localLink" href="/opens">opens</a> property is specified, and <strong>closed</strong> otherwise.</p>\n<p>If the value for the <a class="localLink" href="/closes">closes</a> property is less than the value for the <a class="localLink" href="/opens">opens</a> property then the hour range is assumed to span over the next day.',
    id:          'OpeningHoursSpecification',
    label:       'OpeningHoursSpecification',
    source:      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass',
    subClassOf:  'StructuredValue',
    type:        'Type'
  },
  Order:                            {
    description: 'An order is a confirmation of a transaction (a receipt), which can contain multiple line items, each represented by an Offer that has been accepted by the customer.',
    id:          'Order',
    label:       'Order',
    subClassOf:  'Intangible',
    type:        'Type'
  },
  OrderAction:                      {
    description: 'An agent orders an object/product/service to be delivered/sent.',
    id:          'OrderAction',
    label:       'OrderAction',
    subClassOf:  'TradeAction',
    type:        'Type'
  },
  OrderCancelled:                   {
    description: [
      'OrderStatus representing cancellation of an order.'
    ],
    id:          'OrderCancelled',
    label:       [
      'OrderCancelled'
    ],
    type:        [
      'OrderStatus'
    ]
  },
  OrderDelivered:                   {
    description: [
      'OrderStatus representing successful delivery of an order.'
    ],
    id:          'OrderDelivered',
    label:       [
      'OrderDelivered'
    ],
    type:        [
      'OrderStatus'
    ]
  },
  OrderInTransit:                   {
    description: [
      'OrderStatus representing that an order is in transit.'
    ],
    id:          'OrderInTransit',
    label:       [
      'OrderInTransit'
    ],
    type:        [
      'OrderStatus'
    ]
  },
  OrderItem:                        {
    description: 'An order item is a line of an order. It includes the quantity and shipping details of a bought offer.',
    id:          'OrderItem',
    label:       'OrderItem',
    subClassOf:  'Intangible',
    type:        'Type'
  },
  OrderPaymentDue:                  {
    description: [
      'OrderStatus representing that payment is due on an order.'
    ],
    id:          'OrderPaymentDue',
    label:       [
      'OrderPaymentDue'
    ],
    type:        [
      'OrderStatus'
    ]
  },
  OrderPickupAvailable:             {
    description: [
      'OrderStatus representing availability of an order for pickup.'
    ],
    id:          'OrderPickupAvailable',
    label:       [
      'OrderPickupAvailable'
    ],
    type:        [
      'OrderStatus'
    ]
  },
  OrderProblem:                     {
    description: [
      'OrderStatus representing that there is a problem with the order.'
    ],
    id:          'OrderProblem',
    label:       [
      'OrderProblem'
    ],
    type:        [
      'OrderStatus'
    ]
  },
  OrderProcessing:                  {
    description: [
      'OrderStatus representing that an order is being processed.'
    ],
    id:          'OrderProcessing',
    label:       [
      'OrderProcessing'
    ],
    type:        [
      'OrderStatus'
    ]
  },
  OrderReturned:                    {
    description: [
      'OrderStatus representing that an order has been returned.'
    ],
    id:          'OrderReturned',
    label:       [
      'OrderReturned'
    ],
    type:        [
      'OrderStatus'
    ]
  },
  OrderStatus:                      {
    description: 'Enumerated status values for Order.',
    id:          'OrderStatus',
    label:       'OrderStatus',
    subClassOf:  'Enumeration',
    type:        'Type'
  },
  Organization:                     {
    description: 'An organization such as a school, NGO, corporation, club, etc.',
    id:          'Organization',
    label:       'Organization',
    subClassOf:  'Thing',
    type:        'Type'
  },
  OrganizationRole:                 {
    description: 'A subclass of Role used to describe roles within organizations.',
    id:          'OrganizationRole',
    label:       'OrganizationRole',
    subClassOf:  'Role',
    type:        'Type'
  },
  OrganizeAction:                   {
    description: 'The act of manipulating/administering/supervising/controlling one or more objects.',
    id:          'OrganizeAction',
    label:       'OrganizeAction',
    subClassOf:  'Action',
    type:        'Type'
  },
  OutOfStock:                       {
    description: [
      'Indicates that the item is out of stock.'
    ],
    id:          'OutOfStock',
    label:       [
      'OutOfStock'
    ],
    type:        [
      'ItemAvailability'
    ]
  },
  OutletStore:                      {
    description: 'An outlet store.',
    id:          'OutletStore',
    label:       'OutletStore',
    subClassOf:  'Store',
    type:        'Type'
  },
  OwnershipInfo:                    {
    description: 'A structured value providing information about when a certain organization or person owned a certain product.',
    id:          'OwnershipInfo',
    label:       'OwnershipInfo',
    source:      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass',
    subClassOf:  'StructuredValue',
    type:        'Type'
  },
  PaintAction:                      {
    description: 'The act of producing a painting, typically with paint and canvas as instruments.',
    id:          'PaintAction',
    label:       'PaintAction',
    subClassOf:  'CreateAction',
    type:        'Type'
  },
  Painting:                         {
    description: 'A painting.',
    id:          'Painting',
    label:       'Painting',
    subClassOf:  'CreativeWork',
    type:        'Type'
  },
  Paperback:                        {
    description: [
      'Book format: Paperback.'
    ],
    id:          'Paperback',
    label:       [
      'Paperback'
    ],
    type:        [
      'BookFormatType'
    ]
  },
  ParcelDelivery:                   {
    description: 'The delivery of a parcel either via the postal service or a commercial service.',
    id:          'ParcelDelivery',
    label:       'ParcelDelivery',
    subClassOf:  'Intangible',
    type:        'Type'
  },
  ParcelService:                    {
    description: '<p>A private parcel service as the delivery mode available for a certain offer.</p>\n<p>Commonly used values:</p>\n<ul>\n<li>http://purl.org/goodrelations/v1#DHL</li>\n<li>http://purl.org/goodrelations/v1#FederalExpress</li>\n<li>http://purl.org/goodrelations/v1#UPS</li>\n</ul>',
    id:          'ParcelService',
    label:       'ParcelService',
    source:      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass',
    subClassOf:  'DeliveryMethod',
    type:        'Type'
  },
  ParentAudience:                   {
    description: 'A set of characteristics describing parents, who can be interested in viewing some content.',
    id:          'ParentAudience',
    label:       'ParentAudience',
    subClassOf:  'PeopleAudience',
    type:        'Type'
  },
  Park:                             {
    description: 'A park.',
    id:          'Park',
    label:       'Park',
    subClassOf:  'CivicStructure',
    type:        'Type'
  },
  ParkingFacility:                  {
    description: 'A parking lot or other parking facility.',
    id:          'ParkingFacility',
    label:       'ParkingFacility',
    subClassOf:  'CivicStructure',
    type:        'Type'
  },
  ParkingMap:                       {
    description: [
      'A parking map.'
    ],
    id:          'ParkingMap',
    label:       [
      'ParkingMap'
    ],
    type:        [
      'MapCategoryType'
    ]
  },
  PawnShop:                         {
    description: 'A shop that will buy, or lend money against the security of, personal possessions.',
    id:          'PawnShop',
    label:       'PawnShop',
    subClassOf:  'Store',
    type:        'Type'
  },
  PayAction:                        {
    description: 'An agent pays a price to a participant.',
    id:          'PayAction',
    label:       'PayAction',
    subClassOf:  'TradeAction',
    type:        'Type'
  },
  PaymentAutomaticallyApplied:      {
    description: [
      'An automatic payment system is in place and will be used.'
    ],
    id:          'PaymentAutomaticallyApplied',
    label:       [
      'PaymentAutomaticallyApplied'
    ],
    type:        [
      'PaymentStatusType'
    ]
  },
  PaymentCard:                      {
    description: 'A payment method using a credit, debit, store or other card to associate the payment with an account.',
    id:          'PaymentCard',
    label:       'PaymentCard',
    source:      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO',
    subClassOf:  [
      'FinancialProduct',
      'PaymentMethod'
    ],
    type:        'Type'
  },
  PaymentChargeSpecification:       {
    description: 'The costs of settling the payment using a particular payment method.',
    id:          'PaymentChargeSpecification',
    label:       'PaymentChargeSpecification',
    source:      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass',
    subClassOf:  'PriceSpecification',
    type:        'Type'
  },
  PaymentComplete:                  {
    description: [
      'The payment has been received and processed.'
    ],
    id:          'PaymentComplete',
    label:       [
      'PaymentComplete'
    ],
    type:        [
      'PaymentStatusType'
    ]
  },
  PaymentDeclined:                  {
    description: [
      'The payee received the payment, but it was declined for some reason.'
    ],
    id:          'PaymentDeclined',
    label:       [
      'PaymentDeclined'
    ],
    type:        [
      'PaymentStatusType'
    ]
  },
  PaymentDue:                       {
    description: [
      'The payment is due, but still within an acceptable time to be received.'
    ],
    id:          'PaymentDue',
    label:       [
      'PaymentDue'
    ],
    type:        [
      'PaymentStatusType'
    ]
  },
  PaymentMethod:                    {
    description: '<p>A payment method is a standardized procedure for transferring the monetary amount for a purchase. Payment methods are characterized by the legal and technical structures used, and by the organization or group carrying out the transaction.</p>\n<p>Commonly used values:</p>\n<ul>\n<li>http://purl.org/goodrelations/v1#ByBankTransferInAdvance</li>\n<li>http://purl.org/goodrelations/v1#ByInvoice</li>\n<li>http://purl.org/goodrelations/v1#Cash</li>\n<li>http://purl.org/goodrelations/v1#CheckInAdvance</li>\n<li>http://purl.org/goodrelations/v1#COD</li>\n<li>http://purl.org/goodrelations/v1#DirectDebit</li>\n<li>http://purl.org/goodrelations/v1#GoogleCheckout</li>\n<li>http://purl.org/goodrelations/v1#PayPal</li>\n<li>http://purl.org/goodrelations/v1#PaySwarm</li>\n</ul>',
    id:          'PaymentMethod',
    label:       'PaymentMethod',
    source:      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass',
    subClassOf:  'Enumeration',
    type:        'Type'
  },
  PaymentPastDue:                   {
    description: [
      'The payment is due and considered late.'
    ],
    id:          'PaymentPastDue',
    label:       [
      'PaymentPastDue'
    ],
    type:        [
      'PaymentStatusType'
    ]
  },
  PaymentService:                   {
    description: 'A Service to transfer funds from a person or organization to a beneficiary person or organization.',
    id:          'PaymentService',
    label:       'PaymentService',
    source:      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO',
    subClassOf:  'FinancialProduct',
    type:        'Type'
  },
  PaymentStatusType:                {
    description: 'A specific payment status. For example, PaymentDue, PaymentComplete, etc.',
    id:          'PaymentStatusType',
    label:       'PaymentStatusType',
    subClassOf:  'Enumeration',
    type:        'Type'
  },
  PeopleAudience:                   {
    description: 'A set of characteristics belonging to people, e.g. who compose an item\'s target audience.',
    id:          'PeopleAudience',
    label:       'PeopleAudience',
    subClassOf:  'Audience',
    type:        'Type'
  },
  PerformAction:                    {
    description: 'The act of participating in performance arts.',
    id:          'PerformAction',
    label:       'PerformAction',
    subClassOf:  'PlayAction',
    type:        'Type'
  },
  PerformanceRole:                  {
    description: 'A PerformanceRole is a Role that some entity places with regard to a theatrical performance, e.g. in a Movie, TVSeries etc.',
    id:          'PerformanceRole',
    label:       'PerformanceRole',
    subClassOf:  'Role',
    type:        'Type'
  },
  PerformingArtsTheater:            {
    description: 'A theater or other performing art center.',
    id:          'PerformingArtsTheater',
    label:       'PerformingArtsTheater',
    subClassOf:  'CivicStructure',
    type:        'Type'
  },
  PerformingGroup:                  {
    description: 'A performance group, such as a band, an orchestra, or a circus.',
    id:          'PerformingGroup',
    label:       'PerformingGroup',
    subClassOf:  'Organization',
    type:        'Type'
  },
  Periodical:                       {
    description:     'A publication in any medium issued in successive parts bearing numerical or chronological designations and intended, such as a magazine, scholarly journal, or newspaper to continue indefinitely.</p>\n<p>See also <a href="http://blog.schema.org/2014/09/schemaorg-support-for-bibliographic_2.html">blog post</a>.',
    equivalentClass: 'http://purl.org/ontology/bibo/Periodical',
    id:              'Periodical',
    label:           'Periodical',
    source:          'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_bibex',
    subClassOf:      'CreativeWorkSeries',
    type:            'Type'
  },
  Permit:                           {
    description: 'A permit issued by an organization, e.g. a parking pass.',
    id:          'Permit',
    label:       'Permit',
    subClassOf:  'Intangible',
    type:        'Type'
  },
  Person:                           {
    description:     'A person (alive, dead, undead, or fictional).',
    equivalentClass: 'http://xmlns.com/foaf/0.1/Person',
    id:              'Person',
    label:           'Person',
    source:          'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_rNews',
    subClassOf:      'Thing',
    type:            'Type'
  },
  PetStore:                         {
    description: 'A pet store.',
    id:          'PetStore',
    label:       'PetStore',
    subClassOf:  'Store',
    type:        'Type'
  },
  Pharmacy:                         {
    description: 'A pharmacy or drugstore.',
    id:          'Pharmacy',
    label:       'Pharmacy',
    subClassOf:  'MedicalOrganization',
    type:        'Type'
  },
  Photograph:                       {
    description: 'A photograph.',
    id:          'Photograph',
    label:       'Photograph',
    subClassOf:  'CreativeWork',
    type:        'Type'
  },
  PhotographAction:                 {
    description: 'The act of capturing still images of objects using a camera.',
    id:          'PhotographAction',
    label:       'PhotographAction',
    subClassOf:  'CreateAction',
    type:        'Type'
  },
  Physician:                        {
    description: 'A doctor\'s office.',
    id:          'Physician',
    label:       'Physician',
    subClassOf:  'MedicalOrganization',
    type:        'Type'
  },
  Place:                            {
    description: 'Entities that have a somewhat fixed, physical extension.',
    id:          'Place',
    label:       'Place',
    subClassOf:  'Thing',
    type:        'Type'
  },
  PlaceOfWorship:                   {
    description: 'Place of worship, such as a church, synagogue, or mosque.',
    id:          'PlaceOfWorship',
    label:       'PlaceOfWorship',
    subClassOf:  'CivicStructure',
    type:        'Type'
  },
  PlanAction:                       {
    description: 'The act of planning the execution of an event/task/action/reservation/plan to a future date.',
    id:          'PlanAction',
    label:       'PlanAction',
    subClassOf:  'OrganizeAction',
    type:        'Type'
  },
  PlayAction:                       {
    description: '<p>The act of playing/exercising/training/performing for enjoyment, leisure, recreation, Competition or exercise.</p>\n<p>Related actions:</p>\n<ul>\n<li><a class="localLink" href="/ListenAction">ListenAction</a>: Unlike ListenAction (which is under ConsumeAction), PlayAction refers to performing for an audience or at an event, rather than consuming music.</li>\n<li><a class="localLink" href="/WatchAction">WatchAction</a>: Unlike WatchAction (which is under ConsumeAction), PlayAction refers to showing/displaying for an audience or at an event, rather than consuming visual content.</li>\n</ul>',
    id:          'PlayAction',
    label:       'PlayAction',
    subClassOf:  'Action',
    type:        'Type'
  },
  Playground:                       {
    description: 'A playground.',
    id:          'Playground',
    label:       'Playground',
    subClassOf:  'CivicStructure',
    type:        'Type'
  },
  Plumber:                          {
    description: 'A plumbing service.',
    id:          'Plumber',
    label:       'Plumber',
    subClassOf:  'HomeAndConstructionBusiness',
    type:        'Type'
  },
  PoliceStation:                    {
    description: 'A police station.',
    id:          'PoliceStation',
    label:       'PoliceStation',
    subClassOf:  [
      'CivicStructure',
      'EmergencyService'
    ],
    type:        'Type'
  },
  Pond:                             {
    description: 'A pond.',
    id:          'Pond',
    label:       'Pond',
    subClassOf:  'BodyOfWater',
    type:        'Type'
  },
  PostOffice:                       {
    description: 'A post office.',
    id:          'PostOffice',
    label:       'PostOffice',
    subClassOf:  'GovernmentOffice',
    type:        'Type'
  },
  PostalAddress:                    {
    description: 'The mailing address.',
    id:          'PostalAddress',
    label:       'PostalAddress',
    subClassOf:  'ContactPoint',
    type:        'Type'
  },
  PotentialActionStatus:            {
    description: [
      'A description of an action that is supported.'
    ],
    id:          'PotentialActionStatus',
    label:       [
      'PotentialActionStatus'
    ],
    type:        [
      'ActionStatusType'
    ]
  },
  PreOrder:                         {
    description: [
      'Indicates that the item is available for pre-order, but will be delivered when generally available.'
    ],
    id:          'PreOrder',
    label:       [
      'PreOrder'
    ],
    type:        [
      'ItemAvailability'
    ]
  },
  PreSale:                          {
    description: [
      'Indicates that the item is available for ordering and delivery before general availability.'
    ],
    id:          'PreSale',
    label:       [
      'PreSale'
    ],
    type:        [
      'ItemAvailability'
    ]
  },
  PrependAction:                    {
    description: 'The act of inserting at the beginning if an ordered collection.',
    id:          'PrependAction',
    label:       'PrependAction',
    subClassOf:  'InsertAction',
    type:        'Type'
  },
  Preschool:                        {
    description: 'A preschool.',
    id:          'Preschool',
    label:       'Preschool',
    subClassOf:  'EducationalOrganization',
    type:        'Type'
  },
  PresentationDigitalDocument:      {
    description: 'A file containing slides or used for a presentation.',
    id:          'PresentationDigitalDocument',
    label:       'PresentationDigitalDocument',
    subClassOf:  'DigitalDocument',
    type:        'Type'
  },
  PriceSpecification:               {
    description: 'A structured value representing a price or price range. Typically, only the subclasses of this type are used for markup. It is recommended to use <a class="localLink" href="/MonetaryAmount">MonetaryAmount</a> to describe independent amounts of money such as a salary, credit card limits, etc.',
    id:          'PriceSpecification',
    label:       'PriceSpecification',
    source:      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass',
    subClassOf:  'StructuredValue',
    type:        'Type'
  },
  Product:                          {
    description: 'Any offered product or service. For example: a pair of shoes; a concert ticket; the rental of a car; a haircut; or an episode of a TV show streamed online.',
    id:          'Product',
    label:       'Product',
    source:      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    subClassOf:  'Thing',
    type:        'Type'
  },
  ProductModel:                     {
    description: 'A datasheet or vendor specification of a product (in the sense of a prototypical description).',
    id:          'ProductModel',
    label:       'ProductModel',
    source:      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass',
    subClassOf:  'Product',
    type:        'Type'
  },
  ProfessionalService:              {
    description: 'Original definition: "provider of professional services."</p>\n<p>The general <a class="localLink" href="/ProfessionalService">ProfessionalService</a> type for local businesses was deprecated due to confusion with <a class="localLink" href="/Service">Service</a>. For reference, the types that it included were: <a class="localLink" href="/Dentist">Dentist</a>,\n        <a class="localLink" href="/AccountingService">AccountingService</a>, <a class="localLink" href="/Attorney">Attorney</a>, <a class="localLink" href="/Notary">Notary</a>, as well as types for several kinds of <a class="localLink" href="/HomeAndConstructionBusiness">HomeAndConstructionBusiness</a>: <a class="localLink" href="/Electrician">Electrician</a>, <a class="localLink" href="/GeneralContractor">GeneralContractor</a>,\n        <a class="localLink" href="/HousePainter">HousePainter</a>, <a class="localLink" href="/Locksmith">Locksmith</a>, <a class="localLink" href="/Plumber">Plumber</a>, <a class="localLink" href="/RoofingContractor">RoofingContractor</a>. <a class="localLink" href="/LegalService">LegalService</a> was introduced as a more inclusive supertype of <a class="localLink" href="/Attorney">Attorney</a>.',
    id:          'ProfessionalService',
    label:       'ProfessionalService',
    subClassOf:  'LocalBusiness',
    type:        'Type'
  },
  ProfilePage:                      {
    description: 'Web page type: Profile page.',
    id:          'ProfilePage',
    label:       'ProfilePage',
    subClassOf:  'WebPage',
    type:        'Type'
  },
  ProgramMembership:                {
    description: 'Used to describe membership in a loyalty programs (e.g. "StarAliance"), traveler clubs (e.g. "AAA"), purchase clubs ("Safeway Club"), etc.',
    id:          'ProgramMembership',
    label:       'ProgramMembership',
    subClassOf:  'Intangible',
    type:        'Type'
  },
  PropertyValue:                    {
    description: 'A property-value pair, e.g. representing a feature of a product or place. Use the \'name\' property for the name of the property. If there is an additional human-readable version of the value, put that into the \'description\' property.</p>\n<p>Always use specific schema.org properties when a) they exist and b) you can populate them. Using PropertyValue as a substitute will typically not trigger the same effect as using the original, specific property.',
    id:          'PropertyValue',
    label:       'PropertyValue',
    source:      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass',
    subClassOf:  'StructuredValue',
    type:        'Type'
  },
  PropertyValueSpecification:       {
    description: 'A Property value specification.',
    id:          'PropertyValueSpecification',
    label:       'PropertyValueSpecification',
    source:      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_ActionCollabClass',
    subClassOf:  'Intangible',
    type:        'Type'
  },
  PublicHolidays:                   {
    description: [
      'This stands for any day that is a public holiday; it is a placeholder for all official public holidays in some particular location. While not technically a "day of the week", it can be used with <a class="localLink" href="/OpeningHoursSpecification">OpeningHoursSpecification</a>. In the context of an opening hours specification it can be used to indicate opening hours on public holidays, overriding general opening hours for the day of the week on which a public holiday occurs.'
    ],
    id:          'PublicHolidays',
    label:       [
      'PublicHolidays'
    ],
    source:      [
      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass'
    ],
    type:        [
      'DayOfWeek'
    ]
  },
  PublicSwimmingPool:               {
    description: 'A public swimming pool.',
    id:          'PublicSwimmingPool',
    label:       'PublicSwimmingPool',
    subClassOf:  'SportsActivityLocation',
    type:        'Type'
  },
  PublicationEvent:                 {
    description: 'A PublicationEvent corresponds indifferently to the event of publication for a CreativeWork of any type e.g. a broadcast event, an on-demand event, a book/journal publication via a variety of delivery media.',
    id:          'PublicationEvent',
    label:       'PublicationEvent',
    subClassOf:  'Event',
    type:        'Type'
  },
  PublicationIssue:                 {
    description:     'A part of a successively published publication such as a periodical or publication volume, often numbered, usually containing a grouping of works such as articles.</p>\n<p><a href="http://blog.schema.org/2014/09/schemaorg-support-for-bibliographic_2.html">blog post</a>.',
    equivalentClass: 'http://purl.org/ontology/bibo/Issue',
    id:              'PublicationIssue',
    label:           'PublicationIssue',
    source:          'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_bibex',
    subClassOf:      'CreativeWork',
    type:            'Type'
  },
  PublicationVolume:                {
    description: '<p>A part of a successively published publication such as a periodical or multi-volume work, often numbered. It may represent a time span, such as a year.</p>\n<pre><code>  &lt;br/&gt;&lt;br/&gt;See also &lt;a href="http://blog.schema.org/2014/09/schemaorg-support-for-bibliographic_2.html"&gt;blog post&lt;/a&gt;.\n</code></pre>',
    id:          'PublicationVolume',
    label:       'PublicationVolume',
    source:      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_bibex',
    subClassOf:  'CreativeWork',
    type:        'Type'
  },
  QAPage:                           {
    description: 'A QAPage is a WebPage focussed on a specific Question and its Answer(s), e.g. in a question answering site or documenting Frequently Asked Questions (FAQs).',
    id:          'QAPage',
    label:       'QAPage',
    subClassOf:  'WebPage',
    type:        'Type'
  },
  QualitativeValue:                 {
    description: 'A predefined value for a product characteristic, e.g. the power cord plug type \'US\' or the garment sizes \'S\', \'M\', \'L\', and \'XL\'.',
    id:          'QualitativeValue',
    label:       'QualitativeValue',
    source:      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass',
    subClassOf:  'Enumeration',
    type:        'Type'
  },
  QuantitativeValue:                {
    description: 'A point value or interval for product characteristics and other purposes.',
    id:          'QuantitativeValue',
    label:       'QuantitativeValue',
    source:      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass',
    subClassOf:  'StructuredValue',
    type:        'Type'
  },
  Quantity:                         {
    description: 'Quantities such as distance, time, mass, weight, etc. Particular instances of say Mass are entities like \'3 Kg\' or \'4 milligrams\'.',
    id:          'Quantity',
    label:       'Quantity',
    subClassOf:  'Intangible',
    type:        'Type'
  },
  Question:                         {
    description: 'A specific question - e.g. from a user seeking answers online, or collected in a Frequently Asked Questions (FAQ) document.',
    id:          'Question',
    label:       'Question',
    source:      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_QAStackExchange',
    subClassOf:  'CreativeWork',
    type:        'Type'
  },
  QuoteAction:                      {
    description: 'An agent quotes/estimates/appraises an object/product/service with a price at a location/store.',
    id:          'QuoteAction',
    label:       'QuoteAction',
    subClassOf:  'TradeAction',
    type:        'Type'
  },
  RVPark:                           {
    description: 'A place offering space for "Recreational Vehicles", Caravans, mobile homes and the like.',
    id:          'RVPark',
    label:       'RVPark',
    subClassOf:  'CivicStructure',
    type:        'Type'
  },
  RadioChannel:                     {
    description: 'A unique instance of a radio BroadcastService on a CableOrSatelliteService lineup.',
    id:          'RadioChannel',
    label:       'RadioChannel',
    subClassOf:  'BroadcastChannel',
    type:        'Type'
  },
  RadioClip:                        {
    description: 'A short radio program or a segment/part of a radio program.',
    id:          'RadioClip',
    label:       'RadioClip',
    subClassOf:  'Clip',
    type:        'Type'
  },
  RadioEpisode:                     {
    description: 'A radio episode which can be part of a series or season.',
    id:          'RadioEpisode',
    label:       'RadioEpisode',
    subClassOf:  'Episode',
    type:        'Type'
  },
  RadioSeason:                      {
    description: 'Season dedicated to radio broadcast and associated online delivery.',
    id:          'RadioSeason',
    label:       'RadioSeason',
    subClassOf:  'CreativeWorkSeason',
    type:        'Type'
  },
  RadioSeries:                      {
    description: 'CreativeWorkSeries dedicated to radio broadcast and associated online delivery.',
    id:          'RadioSeries',
    label:       'RadioSeries',
    subClassOf:  'CreativeWorkSeries',
    type:        'Type'
  },
  RadioStation:                     {
    description: 'A radio station.',
    id:          'RadioStation',
    label:       'RadioStation',
    subClassOf:  'LocalBusiness',
    type:        'Type'
  },
  Rating:                           {
    description: 'A rating is an evaluation on a numeric scale, such as 1 to 5 stars.',
    id:          'Rating',
    label:       'Rating',
    subClassOf:  'Intangible',
    type:        'Type'
  },
  ReactAction:                      {
    description: 'The act of responding instinctively and emotionally to an object, expressing a sentiment.',
    id:          'ReactAction',
    label:       'ReactAction',
    subClassOf:  'AssessAction',
    type:        'Type'
  },
  ReadAction:                       {
    description: 'The act of consuming written content.',
    id:          'ReadAction',
    label:       'ReadAction',
    subClassOf:  'ConsumeAction',
    type:        'Type'
  },
  ReadPermission:                   {
    description: [
      'Permission to read or view the document.'
    ],
    id:          'ReadPermission',
    label:       [
      'ReadPermission'
    ],
    type:        [
      'DigitalDocumentPermissionType'
    ]
  },
  RealEstateAgent:                  {
    description: 'A real-estate agent.',
    id:          'RealEstateAgent',
    label:       'RealEstateAgent',
    subClassOf:  'LocalBusiness',
    type:        'Type'
  },
  RearWheelDriveConfiguration:      {
    description: [
      'Real-wheel drive is a transmission layout where the engine drives the rear wheels.'
    ],
    id:          'RearWheelDriveConfiguration',
    label:       [
      'RearWheelDriveConfiguration'
    ],
    source:      [
      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group'
    ],
    type:        [
      'DriveWheelConfigurationValue'
    ]
  },
  ReceiveAction:                    {
    description: '<p>The act of physically/electronically taking delivery of an object thathas been transferred from an origin to a destination. Reciprocal of SendAction.</p>\n<p>Related actions:</p>\n<ul>\n<li><a class="localLink" href="/SendAction">SendAction</a>: The reciprocal of ReceiveAction.</li>\n<li><a class="localLink" href="/TakeAction">TakeAction</a>: Unlike TakeAction, ReceiveAction does not imply that the ownership has been transfered (e.g. I can receive a package, but it does not mean the package is now mine).</li>\n</ul>',
    id:          'ReceiveAction',
    label:       'ReceiveAction',
    subClassOf:  'TransferAction',
    type:        'Type'
  },
  Recipe:                           {
    description: 'A recipe. For dietary restrictions covered by the recipe, a few common restrictions are enumerated via <a class="localLink" href="/suitableForDiet">suitableForDiet</a>. The <a class="localLink" href="/keywords">keywords</a> property can also be used to add more detail.',
    id:          'Recipe',
    label:       'Recipe',
    subClassOf:  'CreativeWork',
    type:        'Type'
  },
  RecyclingCenter:                  {
    description: 'A recycling center.',
    id:          'RecyclingCenter',
    label:       'RecyclingCenter',
    subClassOf:  'LocalBusiness',
    type:        'Type'
  },
  RefurbishedCondition:             {
    description: [
      'Indicates that the item is refurbished.'
    ],
    id:          'RefurbishedCondition',
    label:       [
      'RefurbishedCondition'
    ],
    type:        [
      'OfferItemCondition'
    ]
  },
  RegisterAction:                   {
    description: 'The act of registering to be a user of a service, product or web page!',
    id:          'RegisterAction',
    label:       'RegisterAction',
    subClassOf:  'InteractAction',
    type:        'Type'
  },
  RejectAction:                     {
    description: '<p>The act of rejecting to/adopting an object.</p>\n<p>Related actions:</p>\n<ul>\n<li><a class="localLink" href="/AcceptAction">AcceptAction</a>: The antonym of RejectAction.</li>\n</ul>',
    id:          'RejectAction',
    label:       'RejectAction',
    subClassOf:  'AllocateAction',
    type:        'Type'
  },
  RemixAlbum:                       {
    description: [
      'RemixAlbum.'
    ],
    id:          'RemixAlbum',
    label:       [
      'RemixAlbum'
    ],
    source:      [
      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ'
    ],
    type:        [
      'MusicAlbumProductionType'
    ]
  },
  RentAction:                       {
    description: 'The act of giving money in return for temporary use, but not ownership, of an object such as a vehicle or property. For example, an agent rents a property from a landlord in exchange for a periodic payment.',
    id:          'RentAction',
    label:       'RentAction',
    subClassOf:  'TradeAction',
    type:        'Type'
  },
  RentalCarReservation:             {
    description: 'A reservation for a rental car.</p>\n<p>Note: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations.',
    id:          'RentalCarReservation',
    label:       'RentalCarReservation',
    subClassOf:  'Reservation',
    type:        'Type'
  },
  ReplaceAction:                    {
    description: 'The act of editing a recipient by replacing an old object with a new object.',
    id:          'ReplaceAction',
    label:       'ReplaceAction',
    subClassOf:  'UpdateAction',
    type:        'Type'
  },
  ReplyAction:                      {
    description: '<p>The act of responding to a question/message asked/sent by the object. Related to <a class="localLink" href="/AskAction">AskAction</a></p>\n<p>Related actions:</p>\n<ul>\n<li><a class="localLink" href="/AskAction">AskAction</a>: Appears generally as an origin of a ReplyAction.</li>\n</ul>',
    id:          'ReplyAction',
    label:       'ReplyAction',
    subClassOf:  'CommunicateAction',
    type:        'Type'
  },
  Report:                           {
    description: 'A Report generated by governmental or non-governmental organization.',
    id:          'Report',
    label:       'Report',
    subClassOf:  'Article',
    type:        'Type'
  },
  Researcher:                       {
    description: [
      'Researchers.'
    ],
    id:          'Researcher',
    label:       [
      'Researcher'
    ],
    type:        [
      'Audience'
    ]
  },
  Reservation:                      {
    description: 'Describes a reservation for travel, dining or an event. Some reservations require tickets. </p>\n<p>Note: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, restaurant reservations, flights, or rental cars, use <a class="localLink" href="/Offer">Offer</a>.',
    id:          'Reservation',
    label:       'Reservation',
    subClassOf:  'Intangible',
    type:        'Type'
  },
  ReservationCancelled:             {
    description: [
      'The status for a previously confirmed reservation that is now cancelled.'
    ],
    id:          'ReservationCancelled',
    label:       [
      'ReservationCancelled'
    ],
    type:        [
      'ReservationStatusType'
    ]
  },
  ReservationConfirmed:             {
    description: [
      'The status of a confirmed reservation.'
    ],
    id:          'ReservationConfirmed',
    label:       [
      'ReservationConfirmed'
    ],
    type:        [
      'ReservationStatusType'
    ]
  },
  ReservationHold:                  {
    description: [
      'The status of a reservation on hold pending an update like credit card number or flight changes.'
    ],
    id:          'ReservationHold',
    label:       [
      'ReservationHold'
    ],
    type:        [
      'ReservationStatusType'
    ]
  },
  ReservationPackage:               {
    description: 'A group of multiple reservations with common values for all sub-reservations.',
    id:          'ReservationPackage',
    label:       'ReservationPackage',
    subClassOf:  'Reservation',
    type:        'Type'
  },
  ReservationPending:               {
    description: [
      'The status of a reservation when a request has been sent, but not confirmed.'
    ],
    id:          'ReservationPending',
    label:       [
      'ReservationPending'
    ],
    type:        [
      'ReservationStatusType'
    ]
  },
  ReservationStatusType:            {
    description: 'Enumerated status values for Reservation.',
    id:          'ReservationStatusType',
    label:       'ReservationStatusType',
    subClassOf:  'Enumeration',
    type:        'Type'
  },
  ReserveAction:                    {
    description: '<p>Reserving a concrete object.</p>\n<p>Related actions:</p>\n<ul>\n<li><a class="localLink" href="/ScheduleAction">ScheduleAction</a></a>: Unlike ScheduleAction, ReserveAction reserves concrete objects (e.g. a table, a hotel) towards a time slot / spatial allocation.</li>\n</ul>',
    id:          'ReserveAction',
    label:       'ReserveAction',
    subClassOf:  'PlanAction',
    type:        'Type'
  },
  Reservoir:                        {
    description: 'A reservoir of water, typically an artificially created lake, like the Lake Kariba reservoir.',
    id:          'Reservoir',
    label:       'Reservoir',
    subClassOf:  'BodyOfWater',
    type:        'Type'
  },
  Residence:                        {
    description: 'The place where a person lives.',
    id:          'Residence',
    label:       'Residence',
    subClassOf:  'Place',
    type:        'Type'
  },
  Resort:                           {
    description: 'A resort is a place used for relaxation or recreation, attracting visitors for holidays or vacations. Resorts are places, towns or sometimes commercial establishment operated by a single company (Source: Wikipedia, the free encyclopedia, see <a href="http://en.wikipedia.org/wiki/Resort">http://en.wikipedia.org/wiki/Resort</a>).\n<br /><br />\nSee also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.',
    id:          'Resort',
    label:       'Resort',
    source:      'https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology',
    subClassOf:  'LodgingBusiness',
    type:        'Type'
  },
  Restaurant:                       {
    description: 'A restaurant.',
    id:          'Restaurant',
    label:       'Restaurant',
    subClassOf:  'FoodEstablishment',
    type:        'Type'
  },
  RestrictedDiet:                   {
    description: 'A diet restricted to certain foods or preparations for cultural, religious, health or lifestyle reasons.',
    id:          'RestrictedDiet',
    label:       'RestrictedDiet',
    subClassOf:  'Enumeration',
    type:        'Type'
  },
  ResumeAction:                     {
    description: 'The act of resuming a device or application which was formerly paused (e.g. resume music playback or resume a timer).',
    id:          'ResumeAction',
    label:       'ResumeAction',
    subClassOf:  'ControlAction',
    type:        'Type'
  },
  ReturnAction:                     {
    description: 'The act of returning to the origin that which was previously received (concrete objects) or taken (ownership).',
    id:          'ReturnAction',
    label:       'ReturnAction',
    subClassOf:  'TransferAction',
    type:        'Type'
  },
  Review:                           {
    description: 'A review of an item - for example, of a restaurant, movie, or store.',
    id:          'Review',
    label:       'Review',
    subClassOf:  'CreativeWork',
    type:        'Type'
  },
  ReviewAction:                     {
    description: 'The act of producing a balanced opinion about the object for an audience. An agent reviews an object with participants resulting in a review.',
    id:          'ReviewAction',
    label:       'ReviewAction',
    subClassOf:  'AssessAction',
    type:        'Type'
  },
  RightHandDriving:                 {
    description: [
      'The steering position is on the right side of the vehicle (viewed from the main direction of driving).'
    ],
    id:          'RightHandDriving',
    label:       [
      'RightHandDriving'
    ],
    source:      [
      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group'
    ],
    type:        [
      'SteeringPositionValue'
    ]
  },
  RiverBodyOfWater:                 {
    description: 'A river (for example, the broad majestic Shannon).',
    id:          'RiverBodyOfWater',
    label:       'RiverBodyOfWater',
    subClassOf:  'BodyOfWater',
    type:        'Type'
  },
  Role:                             {
    description: 'Represents additional information about a relationship or property. For example a Role can be used to say that a \'member\' role linking some SportsTeam to a player occurred during a particular time period. Or that a Person\'s \'actor\' role in a Movie was for some particular characterName. Such properties can be attached to a Role entity, which is then associated with the main entities using ordinary properties like \'member\' or \'actor\'.</p>\n<p>See also <a href="http://blog.schema.org/2014/06/introducing-role.html">blog post</a>.',
    id:          'Role',
    label:       'Role',
    subClassOf:  'Intangible',
    type:        'Type'
  },
  RoofingContractor:                {
    description: 'A roofing contractor.',
    id:          'RoofingContractor',
    label:       'RoofingContractor',
    subClassOf:  'HomeAndConstructionBusiness',
    type:        'Type'
  },
  Room:                             {
    description: 'A room is a distinguishable space within a structure, usually separated from other spaces by interior walls. (Source: Wikipedia, the free encyclopedia, see <a href="http://en.wikipedia.org/wiki/Room">http://en.wikipedia.org/wiki/Room</a>).\n<br /><br />\nSee also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.',
    id:          'Room',
    label:       'Room',
    source:      'https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology',
    subClassOf:  'Accommodation',
    type:        'Type'
  },
  RsvpAction:                       {
    description: 'The act of notifying an event organizer as to whether you expect to attend the event.',
    id:          'RsvpAction',
    label:       'RsvpAction',
    subClassOf:  'InformAction',
    type:        'Type'
  },
  RsvpResponseMaybe:                {
    description: [
      'The invitee may or may not attend.'
    ],
    id:          'RsvpResponseMaybe',
    label:       [
      'RsvpResponseMaybe'
    ],
    type:        [
      'RsvpResponseType'
    ]
  },
  RsvpResponseNo:                   {
    description: [
      'The invitee will not attend.'
    ],
    id:          'RsvpResponseNo',
    label:       [
      'RsvpResponseNo'
    ],
    type:        [
      'RsvpResponseType'
    ]
  },
  RsvpResponseType:                 {
    description: 'RsvpResponseType is an enumeration type whose instances represent responding to an RSVP request.',
    id:          'RsvpResponseType',
    label:       'RsvpResponseType',
    subClassOf:  'Enumeration',
    type:        'Type'
  },
  RsvpResponseYes:                  {
    description: [
      'The invitee will attend.'
    ],
    id:          'RsvpResponseYes',
    label:       [
      'RsvpResponseYes'
    ],
    type:        [
      'RsvpResponseType'
    ]
  },
  SaleEvent:                        {
    description: 'Event type: Sales event.',
    id:          'SaleEvent',
    label:       'SaleEvent',
    subClassOf:  'Event',
    type:        'Type'
  },
  Saturday:                         {
    description: [
      'The day of the week between Friday and Sunday.'
    ],
    id:          'Saturday',
    label:       [
      'Saturday'
    ],
    sameAs:      [
      'http://www.wikidata.org/entity/Q131'
    ],
    type:        [
      'DayOfWeek'
    ]
  },
  ScheduleAction:                   {
    description: '<p>Scheduling future actions, events, or tasks.</p>\n<p>Related actions:</p>\n<ul>\n<li><a class="localLink" href="/ReserveAction">ReserveAction</a>: Unlike ReserveAction, ScheduleAction allocates future actions (e.g. an event, a task, etc) towards a time slot / spatial allocation.</li>\n</ul>',
    id:          'ScheduleAction',
    label:       'ScheduleAction',
    subClassOf:  'PlanAction',
    type:        'Type'
  },
  SchemaDotOrgSources:              {
    description: [
      {
        termType: 'Literal',
        value:    'This class is based upon W3C DCAT work, and benefits from collaboration around the DCAT, ADMS and VoID vocabularies. See http://www.w3.org/wiki/WebSchemas/Datasets for full details and mappings.'
      }
    ],
    id:          'SchemaDotOrgSources',
    label:       [
      {
        termType: 'Literal',
        value:    'DatasetClass'
      }
    ],
    type:        [
      'Organization'
    ]
  },
  ScholarlyArticle:                 {
    description: 'A scholarly article.',
    id:          'ScholarlyArticle',
    label:       'ScholarlyArticle',
    subClassOf:  'Article',
    type:        'Type'
  },
  School:                           {
    description: 'A school.',
    id:          'School',
    label:       'School',
    subClassOf:  'EducationalOrganization',
    type:        'Type'
  },
  ScreeningEvent:                   {
    description: 'A screening of a movie or other video.',
    id:          'ScreeningEvent',
    label:       'ScreeningEvent',
    subClassOf:  'Event',
    type:        'Type'
  },
  Sculpture:                        {
    description: 'A piece of sculpture.',
    id:          'Sculpture',
    label:       'Sculpture',
    subClassOf:  'CreativeWork',
    type:        'Type'
  },
  SeaBodyOfWater:                   {
    description: 'A sea (for example, the Caspian sea).',
    id:          'SeaBodyOfWater',
    label:       'SeaBodyOfWater',
    subClassOf:  'BodyOfWater',
    type:        'Type'
  },
  SearchAction:                     {
    description: '<p>The act of searching for an object.</p>\n<p>Related actions:</p>\n<ul>\n<li><a class="localLink" href="/FindAction">FindAction</a>: SearchAction generally leads to a FindAction, but not necessarily.</li>\n</ul>',
    id:          'SearchAction',
    label:       'SearchAction',
    subClassOf:  'Action',
    type:        'Type'
  },
  SearchResultsPage:                {
    description: 'Web page type: Search results page.',
    id:          'SearchResultsPage',
    label:       'SearchResultsPage',
    subClassOf:  'WebPage',
    type:        'Type'
  },
  Season:                           {
    description:  'A media season e.g. tv, radio, video game etc.',
    id:           'Season',
    label:        'Season',
    subClassOf:   'CreativeWork',
    supersededBy: 'CreativeWorkSeason',
    type:         'Type'
  },
  Seat:                             {
    description: 'Used to describe a seat, such as a reserved seat in an event reservation.',
    id:          'Seat',
    label:       'Seat',
    subClassOf:  'Intangible',
    type:        'Type'
  },
  SeatingMap:                       {
    description: [
      'A seating map.'
    ],
    id:          'SeatingMap',
    label:       [
      'SeatingMap'
    ],
    type:        [
      'MapCategoryType'
    ]
  },
  SelfStorage:                      {
    description: 'A self-storage facility.',
    id:          'SelfStorage',
    label:       'SelfStorage',
    subClassOf:  'LocalBusiness',
    type:        'Type'
  },
  SellAction:                       {
    description: 'The act of taking money from a buyer in exchange for goods or services rendered. An agent sells an object, product, or service to a buyer for a price. Reciprocal of BuyAction.',
    id:          'SellAction',
    label:       'SellAction',
    subClassOf:  'TradeAction',
    type:        'Type'
  },
  SendAction:                       {
    description: 'The act of physically/electronically dispatching an object for transfer from an origin to a destination.',
    id:          'SendAction',
    label:       'SendAction',
    subClassOf:  'TransferAction',
    type:        'Type'
  },
  Series:                           {
    description: 'A Series in schema.org is a group of related items, typically but not necessarily of the same kind.',
    id:          'Series',
    label:       'Series',
    subClassOf:  'CreativeWork',
    type:        'Type'
  },
  Service:                          {
    description: 'A service provided by an organization, e.g. delivery service, print services, etc.',
    id:          'Service',
    label:       'Service',
    subClassOf:  'Intangible',
    type:        'Type'
  },
  ServiceChannel:                   {
    description: 'A means for accessing a service, e.g. a government office location, web site, or phone number.',
    id:          'ServiceChannel',
    label:       'ServiceChannel',
    subClassOf:  'Intangible',
    type:        'Type'
  },
  ShareAction:                      {
    description: 'The act of distributing content to people for their amusement or edification.',
    id:          'ShareAction',
    label:       'ShareAction',
    subClassOf:  'CommunicateAction',
    type:        'Type'
  },
  ShoeStore:                        {
    description: 'A shoe store.',
    id:          'ShoeStore',
    label:       'ShoeStore',
    subClassOf:  'Store',
    type:        'Type'
  },
  ShoppingCenter:                   {
    description: 'A shopping center or mall.',
    id:          'ShoppingCenter',
    label:       'ShoppingCenter',
    subClassOf:  'LocalBusiness',
    type:        'Type'
  },
  SingleFamilyResidence:            {
    description: 'Residence type: Single-family home.',
    id:          'SingleFamilyResidence',
    label:       'SingleFamilyResidence',
    subClassOf:  'House',
    type:        'Type'
  },
  SinglePlayer:                     {
    description: [
      'Play mode: SinglePlayer. Which is played by a lone player.'
    ],
    id:          'SinglePlayer',
    label:       [
      'SinglePlayer'
    ],
    type:        [
      'GamePlayMode'
    ]
  },
  SingleRelease:                    {
    description: [
      'SingleRelease.'
    ],
    id:          'SingleRelease',
    label:       [
      'SingleRelease'
    ],
    source:      [
      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ'
    ],
    type:        [
      'MusicAlbumReleaseType'
    ]
  },
  SiteNavigationElement:            {
    description: 'A navigation element of the page.',
    id:          'SiteNavigationElement',
    label:       'SiteNavigationElement',
    subClassOf:  'WebPageElement',
    type:        'Type'
  },
  SkiResort:                        {
    description: 'A ski resort.',
    id:          'SkiResort',
    label:       'SkiResort',
    subClassOf:  'SportsActivityLocation',
    type:        'Type'
  },
  SocialEvent:                      {
    description: 'Event type: Social event.',
    id:          'SocialEvent',
    label:       'SocialEvent',
    subClassOf:  'Event',
    type:        'Type'
  },
  SocialMediaPosting:               {
    description: 'A post to a social media platform, including blog posts, tweets, Facebook posts, etc.',
    id:          'SocialMediaPosting',
    label:       'SocialMediaPosting',
    subClassOf:  'Article',
    type:        'Type'
  },
  SoftwareApplication:              {
    description: 'A software application.',
    id:          'SoftwareApplication',
    label:       'SoftwareApplication',
    subClassOf:  'CreativeWork',
    type:        'Type'
  },
  SoftwareSourceCode:               {
    description: 'Computer programming source code. Example: Full (compile ready) solutions, code snippet samples, scripts, templates.',
    id:          'SoftwareSourceCode',
    label:       'SoftwareSourceCode',
    subClassOf:  'CreativeWork',
    type:        'Type'
  },
  SoldOut:                          {
    description: [
      'Indicates that the item has sold out.'
    ],
    id:          'SoldOut',
    label:       [
      'SoldOut'
    ],
    type:        [
      'ItemAvailability'
    ]
  },
  SomeProducts:                     {
    description: 'A placeholder for multiple similar products of the same kind.',
    id:          'SomeProducts',
    label:       'SomeProducts',
    source:      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass',
    subClassOf:  'Product',
    type:        'Type'
  },
  SoundtrackAlbum:                  {
    description: [
      'SoundtrackAlbum.'
    ],
    id:          'SoundtrackAlbum',
    label:       [
      'SoundtrackAlbum'
    ],
    source:      [
      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ'
    ],
    type:        [
      'MusicAlbumProductionType'
    ]
  },
  Specialty:                        {
    description: 'Any branch of a field in which people typically develop specific expertise, usually after significant study, time, and effort.',
    id:          'Specialty',
    label:       'Specialty',
    subClassOf:  'Enumeration',
    type:        'Type'
  },
  SpokenWordAlbum:                  {
    description: [
      'SpokenWordAlbum.'
    ],
    id:          'SpokenWordAlbum',
    label:       [
      'SpokenWordAlbum'
    ],
    source:      [
      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ'
    ],
    type:        [
      'MusicAlbumProductionType'
    ]
  },
  SportingGoodsStore:               {
    description: 'A sporting goods store.',
    id:          'SportingGoodsStore',
    label:       'SportingGoodsStore',
    subClassOf:  'Store',
    type:        'Type'
  },
  SportsActivityLocation:           {
    description: 'A sports location, such as a playing field.',
    id:          'SportsActivityLocation',
    label:       'SportsActivityLocation',
    subClassOf:  'LocalBusiness',
    type:        'Type'
  },
  SportsClub:                       {
    description: 'A sports club.',
    id:          'SportsClub',
    label:       'SportsClub',
    subClassOf:  'SportsActivityLocation',
    type:        'Type'
  },
  SportsEvent:                      {
    description: 'Event type: Sports event.',
    id:          'SportsEvent',
    label:       'SportsEvent',
    subClassOf:  'Event',
    type:        'Type'
  },
  SportsOrganization:               {
    description: 'Represents the collection of all sports organizations, including sports teams, governing bodies, and sports associations.',
    id:          'SportsOrganization',
    label:       'SportsOrganization',
    subClassOf:  'Organization',
    type:        'Type'
  },
  SportsTeam:                       {
    description: 'Organization: Sports team.',
    id:          'SportsTeam',
    label:       'SportsTeam',
    subClassOf:  'SportsOrganization',
    type:        'Type'
  },
  SpreadsheetDigitalDocument:       {
    description: 'A spreadsheet file.',
    id:          'SpreadsheetDigitalDocument',
    label:       'SpreadsheetDigitalDocument',
    subClassOf:  'DigitalDocument',
    type:        'Type'
  },
  StadiumOrArena:                   {
    description: 'A stadium.',
    id:          'StadiumOrArena',
    label:       'StadiumOrArena',
    subClassOf:  [
      'SportsActivityLocation',
      'CivicStructure'
    ],
    type:        'Type'
  },
  State:                            {
    description: 'A state or province of a country.',
    id:          'State',
    label:       'State',
    subClassOf:  'AdministrativeArea',
    type:        'Type'
  },
  SteeringPositionValue:            {
    description: 'A value indicating a steering position.',
    id:          'SteeringPositionValue',
    label:       'SteeringPositionValue',
    source:      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group',
    subClassOf:  'QualitativeValue',
    type:        'Type'
  },
  Store:                            {
    description: 'A retail good store.',
    id:          'Store',
    label:       'Store',
    subClassOf:  'LocalBusiness',
    type:        'Type'
  },
  StructuredValue:                  {
    description: 'Structured values are used when the value of a property has a more complex structure than simply being a textual value or a reference to another thing.',
    id:          'StructuredValue',
    label:       'StructuredValue',
    subClassOf:  'Intangible',
    type:        'Type'
  },
  StudioAlbum:                      {
    description: [
      'StudioAlbum.'
    ],
    id:          'StudioAlbum',
    label:       [
      'StudioAlbum'
    ],
    source:      [
      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ'
    ],
    type:        [
      'MusicAlbumProductionType'
    ]
  },
  SubscribeAction:                  {
    description: '<p>The act of forming a personal connection with someone/something (object) unidirectionally/asymmetrically to get updates pushed to.</p>\n<p>Related actions:</p>\n<ul>\n<li><a class="localLink" href="/FollowAction">FollowAction</a>: Unlike FollowAction, SubscribeAction implies that the subscriber acts as a passive agent being constantly/actively pushed for updates.</li>\n<li><a class="localLink" href="/RegisterAction">RegisterAction</a>: Unlike RegisterAction, SubscribeAction implies that the agent is interested in continuing receiving updates from the object.</li>\n<li><a class="localLink" href="/JoinAction">JoinAction</a>: Unlike JoinAction, SubscribeAction implies that the agent is interested in continuing receiving updates from the object.</li>\n</ul>',
    id:          'SubscribeAction',
    label:       'SubscribeAction',
    subClassOf:  'InteractAction',
    type:        'Type'
  },
  SubwayStation:                    {
    description: 'A subway station.',
    id:          'SubwayStation',
    label:       'SubwayStation',
    subClassOf:  'CivicStructure',
    type:        'Type'
  },
  Suite:                            {
    description: 'A suite in a hotel or other public accommodation, denotes a class of luxury accommodations, the key feature of which is multiple rooms (Source: Wikipedia, the free encyclopedia, see <a href="http://en.wikipedia.org/wiki/Suite_(hotel)">http://en.wikipedia.org/wiki/Suite_(hotel)</a>).\n<br /><br />\nSee also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.',
    id:          'Suite',
    label:       'Suite',
    source:      'https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology',
    subClassOf:  'Accommodation',
    type:        'Type'
  },
  Sunday:                           {
    description: [
      'The day of the week between Saturday and Monday.'
    ],
    id:          'Sunday',
    label:       [
      'Sunday'
    ],
    sameAs:      [
      'http://www.wikidata.org/entity/Q132'
    ],
    type:        [
      'DayOfWeek'
    ]
  },
  SuspendAction:                    {
    description: 'The act of momentarily pausing a device or application (e.g. pause music playback or pause a timer).',
    id:          'SuspendAction',
    label:       'SuspendAction',
    subClassOf:  'ControlAction',
    type:        'Type'
  },
  Synagogue:                        {
    description: 'A synagogue.',
    id:          'Synagogue',
    label:       'Synagogue',
    subClassOf:  'PlaceOfWorship',
    type:        'Type'
  },
  TVClip:                           {
    description: 'A short TV program or a segment/part of a TV program.',
    id:          'TVClip',
    label:       'TVClip',
    subClassOf:  'Clip',
    type:        'Type'
  },
  TVEpisode:                        {
    description: 'A TV episode which can be part of a series or season.',
    id:          'TVEpisode',
    label:       'TVEpisode',
    subClassOf:  'Episode',
    type:        'Type'
  },
  TVSeason:                         {
    description: 'Season dedicated to TV broadcast and associated online delivery.',
    id:          'TVSeason',
    label:       'TVSeason',
    subClassOf:  [
      'CreativeWorkSeason',
      'CreativeWork'
    ],
    type:        'Type'
  },
  TVSeries:                         {
    description: 'CreativeWorkSeries dedicated to TV broadcast and associated online delivery.',
    id:          'TVSeries',
    label:       'TVSeries',
    subClassOf:  [
      'CreativeWorkSeries',
      'CreativeWork'
    ],
    type:        'Type'
  },
  Table:                            {
    description: 'A table on a Web page.',
    id:          'Table',
    label:       'Table',
    subClassOf:  'WebPageElement',
    type:        'Type'
  },
  TakeAction:                       {
    description: '<p>The act of gaining ownership of an object from an origin. Reciprocal of GiveAction.</p>\n<p>Related actions:</p>\n<ul>\n<li><a class="localLink" href="/GiveAction">GiveAction</a>: The reciprocal of TakeAction.</li>\n<li><a class="localLink" href="/ReceiveAction">ReceiveAction</a>: Unlike ReceiveAction, TakeAction implies that ownership has been transfered.</li>\n</ul>',
    id:          'TakeAction',
    label:       'TakeAction',
    subClassOf:  'TransferAction',
    type:        'Type'
  },
  TattooParlor:                     {
    description: 'A tattoo parlor.',
    id:          'TattooParlor',
    label:       'TattooParlor',
    subClassOf:  'HealthAndBeautyBusiness',
    type:        'Type'
  },
  Taxi:                             {
    description:  'A taxi.',
    id:           'Taxi',
    label:        'Taxi',
    subClassOf:   'Service',
    supersededBy: 'TaxiService',
    type:         'Type'
  },
  TaxiReservation:                  {
    description: 'A reservation for a taxi.</p>\n<p>Note: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use <a class="localLink" href="/Offer">Offer</a>.',
    id:          'TaxiReservation',
    label:       'TaxiReservation',
    subClassOf:  'Reservation',
    type:        'Type'
  },
  TaxiService:                      {
    description: 'A service for a vehicle for hire with a driver for local travel. Fares are usually calculated based on distance traveled.',
    id:          'TaxiService',
    label:       'TaxiService',
    subClassOf:  'Service',
    type:        'Type'
  },
  TaxiStand:                        {
    description: 'A taxi stand.',
    id:          'TaxiStand',
    label:       'TaxiStand',
    subClassOf:  'CivicStructure',
    type:        'Type'
  },
  TechArticle:                      {
    description: 'A technical article - Example: How-to (task) topics, step-by-step, procedural troubleshooting, specifications, etc.',
    id:          'TechArticle',
    label:       'TechArticle',
    subClassOf:  'Article',
    type:        'Type'
  },
  TelevisionChannel:                {
    description: 'A unique instance of a television BroadcastService on a CableOrSatelliteService lineup.',
    id:          'TelevisionChannel',
    label:       'TelevisionChannel',
    subClassOf:  'BroadcastChannel',
    type:        'Type'
  },
  TelevisionStation:                {
    description: 'A television station.',
    id:          'TelevisionStation',
    label:       'TelevisionStation',
    subClassOf:  'LocalBusiness',
    type:        'Type'
  },
  TennisComplex:                    {
    description: 'A tennis complex.',
    id:          'TennisComplex',
    label:       'TennisComplex',
    subClassOf:  'SportsActivityLocation',
    type:        'Type'
  },
  Text:                             {
    description: 'Data type: Text.',
    id:          'Text',
    label:       'Text',
    type:        [
      'Type',
      'DataType'
    ]
  },
  TextDigitalDocument:              {
    description: 'A file composed primarily of text.',
    id:          'TextDigitalDocument',
    label:       'TextDigitalDocument',
    subClassOf:  'DigitalDocument',
    type:        'Type'
  },
  TheaterEvent:                     {
    description: 'Event type: Theater performance.',
    id:          'TheaterEvent',
    label:       'TheaterEvent',
    subClassOf:  'Event',
    type:        'Type'
  },
  TheaterGroup:                     {
    description: 'A theater group or company, for example, the Royal Shakespeare Company or Druid Theatre.',
    id:          'TheaterGroup',
    label:       'TheaterGroup',
    subClassOf:  'PerformingGroup',
    type:        'Type'
  },
  Thing:                            {
    description: 'The most generic type of item.',
    id:          'Thing',
    label:       'Thing',
    type:        'Type'
  },
  Thursday:                         {
    description: [
      'The day of the week between Wednesday and Friday.'
    ],
    id:          'Thursday',
    label:       [
      'Thursday'
    ],
    sameAs:      [
      'http://www.wikidata.org/entity/Q129'
    ],
    type:        [
      'DayOfWeek'
    ]
  },
  Ticket:                           {
    description: 'Used to describe a ticket to an event, a flight, a bus ride, etc.',
    id:          'Ticket',
    label:       'Ticket',
    subClassOf:  'Intangible',
    type:        'Type'
  },
  TieAction:                        {
    description: 'The act of reaching a draw in a competitive activity.',
    id:          'TieAction',
    label:       'TieAction',
    subClassOf:  'AchieveAction',
    type:        'Type'
  },
  Time:                             {
    description: 'A point in time recurring on multiple days in the form hh:mm:ss[Z|(+|-)hh:mm] (see <a href="http://www.w3.org/TR/xmlschema-2/#time">XML schema for details</a>).',
    id:          'Time',
    label:       'Time',
    type:        [
      'DataType',
      'Type'
    ]
  },
  TipAction:                        {
    description: 'The act of giving money voluntarily to a beneficiary in recognition of services rendered.',
    id:          'TipAction',
    label:       'TipAction',
    subClassOf:  'TradeAction',
    type:        'Type'
  },
  TireShop:                         {
    description: 'A tire shop.',
    id:          'TireShop',
    label:       'TireShop',
    subClassOf:  'Store',
    type:        'Type'
  },
  TollFree:                         {
    description: [
      'The associated telephone number is toll free.'
    ],
    id:          'TollFree',
    label:       [
      'TollFree'
    ],
    type:        [
      'ContactPointOption'
    ]
  },
  TouristAttraction:                {
    description: 'A tourist attraction.',
    id:          'TouristAttraction',
    label:       'TouristAttraction',
    subClassOf:  'Place',
    type:        'Type'
  },
  TouristInformationCenter:         {
    description: 'A tourist information center.',
    id:          'TouristInformationCenter',
    label:       'TouristInformationCenter',
    subClassOf:  'LocalBusiness',
    type:        'Type'
  },
  ToyStore:                         {
    description: 'A toy store.',
    id:          'ToyStore',
    label:       'ToyStore',
    subClassOf:  'Store',
    type:        'Type'
  },
  TrackAction:                      {
    description: '<p>An agent tracks an object for updates.</p>\n<p>Related actions:</p>\n<ul>\n<li><a class="localLink" href="/FollowAction">FollowAction</a>: Unlike FollowAction, TrackAction refers to the interest on the location of innanimates objects.</li>\n<li><a class="localLink" href="/SubscribeAction">SubscribeAction</a>: Unlike SubscribeAction, TrackAction refers to  the interest on the location of innanimate objects.</li>\n</ul>',
    id:          'TrackAction',
    label:       'TrackAction',
    subClassOf:  'FindAction',
    type:        'Type'
  },
  TradeAction:                      {
    description: 'The act of participating in an exchange of goods and services for monetary compensation. An agent trades an object, product or service with a participant in exchange for a one time or periodic payment.',
    id:          'TradeAction',
    label:       'TradeAction',
    subClassOf:  'Action',
    type:        'Type'
  },
  TrainReservation:                 {
    description: 'A reservation for train travel.</p>\n<p>Note: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use <a class="localLink" href="/Offer">Offer</a>.',
    id:          'TrainReservation',
    label:       'TrainReservation',
    subClassOf:  'Reservation',
    type:        'Type'
  },
  TrainStation:                     {
    description: 'A train station.',
    id:          'TrainStation',
    label:       'TrainStation',
    subClassOf:  'CivicStructure',
    type:        'Type'
  },
  TrainTrip:                        {
    description: 'A trip on a commercial train line.',
    id:          'TrainTrip',
    label:       'TrainTrip',
    subClassOf:  'Intangible',
    type:        'Type'
  },
  TransferAction:                   {
    description: 'The act of transferring/moving (abstract or concrete) animate or inanimate objects from one place to another.',
    id:          'TransferAction',
    label:       'TransferAction',
    subClassOf:  'Action',
    type:        'Type'
  },
  TransitMap:                       {
    description: [
      'A transit map.'
    ],
    id:          'TransitMap',
    label:       [
      'TransitMap'
    ],
    type:        [
      'MapCategoryType'
    ]
  },
  TravelAction:                     {
    description: 'The act of traveling from an fromLocation to a destination by a specified mode of transport, optionally with participants.',
    id:          'TravelAction',
    label:       'TravelAction',
    subClassOf:  'MoveAction',
    type:        'Type'
  },
  TravelAgency:                     {
    description: 'A travel agency.',
    id:          'TravelAgency',
    label:       'TravelAgency',
    subClassOf:  'LocalBusiness',
    type:        'Type'
  },
  True:                             {
    description: [
      'The boolean value true.'
    ],
    id:          'True',
    label:       [
      'True'
    ],
    type:        [
      'Boolean'
    ]
  },
  Tuesday:                          {
    description: [
      'The day of the week between Monday and Wednesday.'
    ],
    id:          'Tuesday',
    label:       [
      'Tuesday'
    ],
    sameAs:      [
      'http://www.wikidata.org/entity/Q127'
    ],
    type:        [
      'DayOfWeek'
    ]
  },
  TypeAndQuantityNode:              {
    description: 'A structured value indicating the quantity, unit of measurement, and business function of goods included in a bundle offer.',
    id:          'TypeAndQuantityNode',
    label:       'TypeAndQuantityNode',
    source:      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass',
    subClassOf:  'StructuredValue',
    type:        'Type'
  },
  URL:                              {
    description: 'Data type: URL.',
    id:          'URL',
    label:       'URL',
    subClassOf:  'Text',
    type:        'Type'
  },
  UnRegisterAction:                 {
    description: 'The act of un-registering from a service.\n\n',
    id:          'UnRegisterAction',
    label:       'UnRegisterAction',
    subClassOf:  'InteractAction',
    type:        'Type'
  },
  UnitPriceSpecification:           {
    description: 'The price asked for a given offer by the respective organization or person.',
    id:          'UnitPriceSpecification',
    label:       'UnitPriceSpecification',
    source:      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass',
    subClassOf:  'PriceSpecification',
    type:        'Type'
  },
  UpdateAction:                     {
    description: 'The act of managing by changing/editing the state of the object.',
    id:          'UpdateAction',
    label:       'UpdateAction',
    subClassOf:  'Action',
    type:        'Type'
  },
  UseAction:                        {
    description: 'The act of applying an object to its intended purpose.',
    id:          'UseAction',
    label:       'UseAction',
    subClassOf:  'ConsumeAction',
    type:        'Type'
  },
  UsedCondition:                    {
    description: [
      'Indicates that the item is used.'
    ],
    id:          'UsedCondition',
    label:       [
      'UsedCondition'
    ],
    type:        [
      'OfferItemCondition'
    ]
  },
  UserBlocks:                       {
    description:  'UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use <a class="localLink" href="/Action">Action</a>-based vocabulary, alongside types such as <a class="localLink" href="/Comment">Comment</a>.',
    id:           'UserBlocks',
    label:        'UserBlocks',
    subClassOf:   'UserInteraction',
    supersededBy: 'InteractionCounter',
    type:         'Type'
  },
  UserCheckins:                     {
    description:  'UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use <a class="localLink" href="/Action">Action</a>-based vocabulary, alongside types such as <a class="localLink" href="/Comment">Comment</a>.',
    id:           'UserCheckins',
    label:        'UserCheckins',
    subClassOf:   'UserInteraction',
    supersededBy: 'InteractionCounter',
    type:         'Type'
  },
  UserComments:                     {
    description:  'UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use <a class="localLink" href="/Action">Action</a>-based vocabulary, alongside types such as <a class="localLink" href="/Comment">Comment</a>.',
    id:           'UserComments',
    label:        'UserComments',
    source:       'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_rNews',
    subClassOf:   'UserInteraction',
    supersededBy: 'InteractionCounter',
    type:         'Type'
  },
  UserDownloads:                    {
    description:  'UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use <a class="localLink" href="/Action">Action</a>-based vocabulary, alongside types such as <a class="localLink" href="/Comment">Comment</a>.',
    id:           'UserDownloads',
    label:        'UserDownloads',
    subClassOf:   'UserInteraction',
    supersededBy: 'InteractionCounter',
    type:         'Type'
  },
  UserInteraction:                  {
    description:  'UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use <a class="localLink" href="/Action">Action</a>-based vocabulary, alongside types such as <a class="localLink" href="/Comment">Comment</a>.',
    id:           'UserInteraction',
    label:        'UserInteraction',
    subClassOf:   'Event',
    supersededBy: 'InteractionCounter',
    type:         'Type'
  },
  UserLikes:                        {
    description:  'UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use <a class="localLink" href="/Action">Action</a>-based vocabulary, alongside types such as <a class="localLink" href="/Comment">Comment</a>.',
    id:           'UserLikes',
    label:        'UserLikes',
    subClassOf:   'UserInteraction',
    supersededBy: 'InteractionCounter',
    type:         'Type'
  },
  UserPageVisits:                   {
    description:  'UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use <a class="localLink" href="/Action">Action</a>-based vocabulary, alongside types such as <a class="localLink" href="/Comment">Comment</a>.',
    id:           'UserPageVisits',
    label:        'UserPageVisits',
    subClassOf:   'UserInteraction',
    supersededBy: 'InteractionCounter',
    type:         'Type'
  },
  UserPlays:                        {
    description:  'UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use <a class="localLink" href="/Action">Action</a>-based vocabulary, alongside types such as <a class="localLink" href="/Comment">Comment</a>.',
    id:           'UserPlays',
    label:        'UserPlays',
    subClassOf:   'UserInteraction',
    supersededBy: 'InteractionCounter',
    type:         'Type'
  },
  UserPlusOnes:                     {
    description:  'UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use <a class="localLink" href="/Action">Action</a>-based vocabulary, alongside types such as <a class="localLink" href="/Comment">Comment</a>.',
    id:           'UserPlusOnes',
    label:        'UserPlusOnes',
    subClassOf:   'UserInteraction',
    supersededBy: 'InteractionCounter',
    type:         'Type'
  },
  UserTweets:                       {
    description:  'UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use <a class="localLink" href="/Action">Action</a>-based vocabulary, alongside types such as <a class="localLink" href="/Comment">Comment</a>.',
    id:           'UserTweets',
    label:        'UserTweets',
    subClassOf:   'UserInteraction',
    supersededBy: 'InteractionCounter',
    type:         'Type'
  },
  VeganDiet:                        {
    description: [
      'A diet exclusive of all animal products.'
    ],
    id:          'VeganDiet',
    label:       [
      'VeganDiet'
    ],
    type:        [
      'RestrictedDiet'
    ]
  },
  VegetarianDiet:                   {
    description: [
      'A diet exclusive of animal meat.'
    ],
    id:          'VegetarianDiet',
    label:       [
      'VegetarianDiet'
    ],
    type:        [
      'RestrictedDiet'
    ]
  },
  Vehicle:                          {
    description: 'A vehicle is a device that is designed or used to transport people or cargo over land, water, air, or through space.',
    id:          'Vehicle',
    label:       'Vehicle',
    subClassOf:  'Product',
    type:        'Type'
  },
  VenueMap:                         {
    description: [
      'A venue map (e.g. for malls, auditoriums, museums, etc.).'
    ],
    id:          'VenueMap',
    label:       [
      'VenueMap'
    ],
    type:        [
      'MapCategoryType'
    ]
  },
  VideoGallery:                     {
    description: 'Web page type: Video gallery page.',
    id:          'VideoGallery',
    label:       'VideoGallery',
    subClassOf:  'CollectionPage',
    type:        'Type'
  },
  VideoGame:                        {
    description: 'A video game is an electronic game that involves human interaction with a user interface to generate visual feedback on a video device.',
    id:          'VideoGame',
    label:       'VideoGame',
    subClassOf:  [
      'SoftwareApplication',
      'Game'
    ],
    type:        'Type'
  },
  VideoGameClip:                    {
    description: 'A short segment/part of a video game.',
    id:          'VideoGameClip',
    label:       'VideoGameClip',
    subClassOf:  'Clip',
    type:        'Type'
  },
  VideoGameSeries:                  {
    description: 'A video game series.',
    id:          'VideoGameSeries',
    label:       'VideoGameSeries',
    subClassOf:  'CreativeWorkSeries',
    type:        'Type'
  },
  VideoObject:                      {
    description: 'A video file.',
    id:          'VideoObject',
    label:       'VideoObject',
    source:      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_rNews',
    subClassOf:  'MediaObject',
    type:        'Type'
  },
  ViewAction:                       {
    description: 'The act of consuming static visual content.',
    id:          'ViewAction',
    label:       'ViewAction',
    subClassOf:  'ConsumeAction',
    type:        'Type'
  },
  VinylFormat:                      {
    description: [
      'VinylFormat.'
    ],
    id:          'VinylFormat',
    label:       [
      'VinylFormat'
    ],
    source:      [
      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ'
    ],
    type:        [
      'MusicReleaseFormatType'
    ]
  },
  VisualArtsEvent:                  {
    description: 'Event type: Visual arts event.',
    id:          'VisualArtsEvent',
    label:       'VisualArtsEvent',
    subClassOf:  'Event',
    type:        'Type'
  },
  VisualArtwork:                    {
    description: 'A work of art that is primarily visual in character.',
    id:          'VisualArtwork',
    label:       'VisualArtwork',
    source:      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_VisualArtworkClass',
    subClassOf:  'CreativeWork',
    type:        'Type'
  },
  Volcano:                          {
    description: 'A volcano, like Fuji san.',
    id:          'Volcano',
    label:       'Volcano',
    subClassOf:  'Landform',
    type:        'Type'
  },
  VoteAction:                       {
    description: 'The act of expressing a preference from a fixed/finite/structured set of choices/options.',
    id:          'VoteAction',
    label:       'VoteAction',
    subClassOf:  'ChooseAction',
    type:        'Type'
  },
  WPAdBlock:                        {
    description: 'An advertising section of the page.',
    id:          'WPAdBlock',
    label:       'WPAdBlock',
    subClassOf:  'WebPageElement',
    type:        'Type'
  },
  WPFooter:                         {
    description: 'The footer section of the page.',
    id:          'WPFooter',
    label:       'WPFooter',
    subClassOf:  'WebPageElement',
    type:        'Type'
  },
  WPHeader:                         {
    description: 'The header section of the page.',
    id:          'WPHeader',
    label:       'WPHeader',
    subClassOf:  'WebPageElement',
    type:        'Type'
  },
  WPSideBar:                        {
    description: 'A sidebar section of the page.',
    id:          'WPSideBar',
    label:       'WPSideBar',
    subClassOf:  'WebPageElement',
    type:        'Type'
  },
  WantAction:                       {
    description: 'The act of expressing a desire about the object. An agent wants an object.',
    id:          'WantAction',
    label:       'WantAction',
    subClassOf:  'ReactAction',
    type:        'Type'
  },
  WarrantyPromise:                  {
    description: 'A structured value representing the duration and scope of services that will be provided to a customer free of charge in case of a defect or malfunction of a product.',
    id:          'WarrantyPromise',
    label:       'WarrantyPromise',
    source:      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass',
    subClassOf:  'StructuredValue',
    type:        'Type'
  },
  WarrantyScope:                    {
    description: '<p>A range of of services that will be provided to a customer free of charge in case of a defect or malfunction of a product.</p>\n<p>Commonly used values:</p>\n<ul>\n<li>http://purl.org/goodrelations/v1#Labor-BringIn</li>\n<li>http://purl.org/goodrelations/v1#PartsAndLabor-BringIn</li>\n<li>http://purl.org/goodrelations/v1#PartsAndLabor-PickUp</li>\n</ul>',
    id:          'WarrantyScope',
    label:       'WarrantyScope',
    source:      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsClass',
    subClassOf:  'Enumeration',
    type:        'Type'
  },
  WatchAction:                      {
    description: 'The act of consuming dynamic/moving visual content.',
    id:          'WatchAction',
    label:       'WatchAction',
    subClassOf:  'ConsumeAction',
    type:        'Type'
  },
  Waterfall:                        {
    description: 'A waterfall, like Niagara.',
    id:          'Waterfall',
    label:       'Waterfall',
    subClassOf:  'BodyOfWater',
    type:        'Type'
  },
  WearAction:                       {
    description: 'The act of dressing oneself in clothing.',
    id:          'WearAction',
    label:       'WearAction',
    subClassOf:  'UseAction',
    type:        'Type'
  },
  WebApplication:                   {
    description: 'Web applications.',
    id:          'WebApplication',
    label:       'WebApplication',
    subClassOf:  'SoftwareApplication',
    type:        'Type'
  },
  WebPage:                          {
    description: 'A web page. Every web page is implicitly assumed to be declared to be of type WebPage, so the various properties about that webpage, such as <code>breadcrumb</code> may be used. We recommend explicit declaration if these properties are specified, but if they are found outside of an itemscope, they will be assumed to be about the page.',
    id:          'WebPage',
    label:       'WebPage',
    subClassOf:  'CreativeWork',
    type:        'Type'
  },
  WebPageElement:                   {
    description: 'A web page element, like a table or an image.',
    id:          'WebPageElement',
    label:       'WebPageElement',
    subClassOf:  'CreativeWork',
    type:        'Type'
  },
  WebSite:                          {
    description: 'A WebSite is a set of related web pages and other items typically served from a single web domain and accessible via URLs.',
    id:          'WebSite',
    label:       'WebSite',
    subClassOf:  'CreativeWork',
    type:        'Type'
  },
  Wednesday:                        {
    description: [
      'The day of the week between Tuesday and Thursday.'
    ],
    id:          'Wednesday',
    label:       [
      'Wednesday'
    ],
    sameAs:      [
      'http://www.wikidata.org/entity/Q128'
    ],
    type:        [
      'DayOfWeek'
    ]
  },
  WholesaleStore:                   {
    description: 'A wholesale store.',
    id:          'WholesaleStore',
    label:       'WholesaleStore',
    subClassOf:  'Store',
    type:        'Type'
  },
  WinAction:                        {
    description: 'The act of achieving victory in a competitive activity.',
    id:          'WinAction',
    label:       'WinAction',
    subClassOf:  'AchieveAction',
    type:        'Type'
  },
  Winery:                           {
    description: 'A winery.',
    id:          'Winery',
    label:       'Winery',
    subClassOf:  'FoodEstablishment',
    type:        'Type'
  },
  WriteAction:                      {
    description: 'The act of authoring written creative content.',
    id:          'WriteAction',
    label:       'WriteAction',
    subClassOf:  'CreateAction',
    type:        'Type'
  },
  WritePermission:                  {
    description: [
      'Permission to write or edit the document.'
    ],
    id:          'WritePermission',
    label:       [
      'WritePermission'
    ],
    type:        [
      'DigitalDocumentPermissionType'
    ]
  },
  ZoneBoardingPolicy:               {
    description: [
      'The airline boards by zones of the plane.'
    ],
    id:          'ZoneBoardingPolicy',
    label:       [
      'ZoneBoardingPolicy'
    ],
    type:        [
      'BoardingPolicyType'
    ]
  },
  Zoo:                              {
    description: 'A zoo.',
    id:          'Zoo',
    label:       'Zoo',
    subClassOf:  'CivicStructure',
    type:        'Type'
  },
  about:                            {
    description:    'The subject matter of the content.',
    domainIncludes: [
      'CommunicateAction',
      'CreativeWork'
    ],
    id:             'about',
    label:          'about',
    rangeIncludes:  'Thing',
    type:           'Property'
  },
  acceptedAnswer:                   {
    description:    'The answer that has been accepted as best, typically on a Question/Answer site. Sites vary in their selection mechanisms, e.g. drawing on community opinion and/or the view of the Question author.',
    domainIncludes: 'Question',
    id:             'acceptedAnswer',
    label:          'acceptedAnswer',
    rangeIncludes:  'Answer',
    subPropertyOf:  'suggestedAnswer',
    type:           'Property'
  },
  acceptedOffer:                    {
    description:    'The offer(s) -- e.g., product, quantity and price combinations -- included in the order.',
    domainIncludes: 'Order',
    id:             'acceptedOffer',
    label:          'acceptedOffer',
    rangeIncludes:  'Offer',
    type:           'Property'
  },
  acceptedPaymentMethod:            {
    description:    'The payment method(s) accepted by seller for this offer.',
    domainIncludes: [
      'Offer',
      'Demand'
    ],
    id:             'acceptedPaymentMethod',
    label:          'acceptedPaymentMethod',
    rangeIncludes:  [
      'LoanOrCredit',
      'PaymentMethod'
    ],
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  acceptsReservations:              {
    description:    'Indicates whether a FoodEstablishment accepts reservations. Values can be Boolean, an URL at which reservations can be made or (for backwards compatibility) the strings <code>Yes</code> or <code>No</code>.',
    domainIncludes: 'FoodEstablishment',
    id:             'acceptsReservations',
    label:          'acceptsReservations',
    rangeIncludes:  [
      'Boolean',
      'URL',
      'Text'
    ],
    type:           'Property'
  },
  accessCode:                       {
    description:    'Password, PIN, or access code needed for delivery (e.g. from a locker).',
    domainIncludes: 'DeliveryEvent',
    id:             'accessCode',
    label:          'accessCode',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  accessibilityAPI:                 {
    description:    'Indicates that the resource is compatible with the referenced accessibility API (<a href="http://www.w3.org/wiki/WebSchemas/Accessibility">WebSchemas wiki lists possible values</a>).',
    domainIncludes: 'CreativeWork',
    id:             'accessibilityAPI',
    label:          'accessibilityAPI',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  accessibilityControl:             {
    description:    'Identifies input methods that are sufficient to fully control the described resource (<a href="http://www.w3.org/wiki/WebSchemas/Accessibility">WebSchemas wiki lists possible values</a>).',
    domainIncludes: 'CreativeWork',
    id:             'accessibilityControl',
    label:          'accessibilityControl',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  accessibilityFeature:             {
    description:    'Content features of the resource, such as accessible media, alternatives and supported enhancements for accessibility (<a href="http://www.w3.org/wiki/WebSchemas/Accessibility">WebSchemas wiki lists possible values</a>).',
    domainIncludes: 'CreativeWork',
    id:             'accessibilityFeature',
    label:          'accessibilityFeature',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  accessibilityHazard:              {
    description:    'Reference documentation for application programming interfaces (APIs).',
    domainIncludes: 'CreativeWork',
    id:             'accessibilityHazard',
    label:          'accessibilityHazard',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  accountId:                        {
    description:    'The identifier for the account the payment will be applied to.',
    domainIncludes: 'Invoice',
    id:             'accountId',
    label:          'accountId',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  accountablePerson:                {
    description:    'Specifies the Person that is legally accountable for the CreativeWork.',
    domainIncludes: 'CreativeWork',
    id:             'accountablePerson',
    label:          'accountablePerson',
    rangeIncludes:  'Person',
    type:           'Property'
  },
  acquiredFrom:                     {
    description:    'The organization or person from which the product was acquired.',
    domainIncludes: 'OwnershipInfo',
    id:             'acquiredFrom',
    label:          'acquiredFrom',
    rangeIncludes:  [
      'Organization',
      'Person'
    ],
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  actionApplication:                {
    description:    'An application that can complete the request.',
    domainIncludes: 'EntryPoint',
    id:             'actionApplication',
    label:          'actionApplication',
    rangeIncludes:  'SoftwareApplication',
    type:           'Property'
  },
  actionOption:                     {
    description:    'A sub property of object. The options subject to this action.',
    domainIncludes: 'ChooseAction',
    id:             'actionOption',
    label:          'actionOption',
    rangeIncludes:  [
      'Thing',
      'Text'
    ],
    subPropertyOf:  'object',
    type:           'Property'
  },
  actionPlatform:                   {
    description:    'The high level platform(s) where the Action can be performed for the given URL. To specify a specific application or operating system instance, use actionApplication.',
    domainIncludes: 'EntryPoint',
    id:             'actionPlatform',
    label:          'actionPlatform',
    rangeIncludes:  [
      'URL',
      'Text'
    ],
    type:           'Property'
  },
  actionStatus:                     {
    description:    'Indicates the current disposition of the Action.',
    domainIncludes: 'Action',
    id:             'actionStatus',
    label:          'actionStatus',
    rangeIncludes:  'ActionStatusType',
    type:           'Property'
  },
  actor:                            {
    description:    'An actor, e.g. in tv, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip.',
    domainIncludes: [
      'RadioSeries',
      'Episode',
      'TVSeries',
      'VideoObject',
      'Clip',
      'Movie',
      'VideoGame',
      'Event',
      'MovieSeries',
      'CreativeWorkSeason',
      'VideoGameSeries'
    ],
    id:             'actor',
    label:          'actor',
    rangeIncludes:  'Person',
    type:           'Property'
  },
  actors:                           {
    description:    'An actor, e.g. in tv, radio, movie, video games etc. Actors can be associated with individual items or with a series, episode, clip.',
    domainIncludes: [
      'VideoObject',
      'Episode',
      'MovieSeries',
      'VideoGame',
      'VideoGameSeries',
      'RadioSeries',
      'Clip',
      'TVSeries',
      'Movie'
    ],
    id:             'actors',
    label:          'actors',
    rangeIncludes:  'Person',
    supersededBy:   'actor',
    type:           'Property'
  },
  addOn:                            {
    description:    'An additional offer that can only be obtained in combination with the first base offer (e.g. supplements and extensions that are available for a surcharge).',
    domainIncludes: 'Offer',
    id:             'addOn',
    label:          'addOn',
    rangeIncludes:  'Offer',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  additionalName:                   {
    description:    'An additional name for a Person, can be used for a middle name.',
    domainIncludes: 'Person',
    id:             'additionalName',
    label:          'additionalName',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  additionalNumberOfGuests:         {
    description:    'If responding yes, the number of guests who will attend in addition to the invitee.',
    domainIncludes: 'RsvpAction',
    id:             'additionalNumberOfGuests',
    label:          'additionalNumberOfGuests',
    rangeIncludes:  'Number',
    type:           'Property'
  },
  additionalProperty:               {
    description:    'A property-value pair representing an additional characteristics of the entitity, e.g. a product feature or another characteristic for which there is no matching property in schema.org.</p>\n<p>Note: Publishers should be aware that applications designed to use specific schema.org properties (e.g. http://schema.org/width, http://schema.org/color, http://schema.org/gtin13, ...) will typically expect such data to be provided using those properties, rather than using the generic property/value mechanism.',
    domainIncludes: [
      'QuantitativeValue',
      'Product',
      'Place',
      'QualitativeValue'
    ],
    id:             'additionalProperty',
    label:          'additionalProperty',
    rangeIncludes:  'PropertyValue',
    type:           'Property'
  },
  additionalType:                   {
    description:    'An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the \'typeof\' attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.',
    domainIncludes: 'Thing',
    id:             'additionalType',
    label:          'additionalType',
    rangeIncludes:  'URL',
    subPropertyOf:  'type',
    type:           'Property'
  },
  address:                          {
    description:    'Physical address of the item.',
    domainIncludes: [
      'Organization',
      'GeoCoordinates',
      'Person',
      'Place',
      'GeoShape'
    ],
    id:             'address',
    label:          'address',
    rangeIncludes:  [
      'Text',
      'PostalAddress'
    ],
    type:           'Property'
  },
  addressCountry:                   {
    description:    'The country. For example, USA. You can also provide the two-letter <a href="http://en.wikipedia.org/wiki/ISO_3166-1">ISO 3166-1 alpha-2 country code</a>.',
    domainIncludes: [
      'GeoCoordinates',
      'GeoShape',
      'PostalAddress'
    ],
    id:             'addressCountry',
    label:          'addressCountry',
    rangeIncludes:  [
      'Country',
      'Text'
    ],
    type:           'Property'
  },
  addressLocality:                  {
    description:    'The locality. For example, Mountain View.',
    domainIncludes: 'PostalAddress',
    id:             'addressLocality',
    label:          'addressLocality',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  addressRegion:                    {
    description:    'The region. For example, CA.',
    domainIncludes: 'PostalAddress',
    id:             'addressRegion',
    label:          'addressRegion',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  advanceBookingRequirement:        {
    description:    'The amount of time that is required between accepting the offer and the actual usage of the resource or service.',
    domainIncludes: [
      'Offer',
      'Demand'
    ],
    id:             'advanceBookingRequirement',
    label:          'advanceBookingRequirement',
    rangeIncludes:  'QuantitativeValue',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  affiliation:                      {
    description:    'An organization that this person is affiliated with. For example, a school/university, a club, or a team.',
    domainIncludes: 'Person',
    id:             'affiliation',
    label:          'affiliation',
    rangeIncludes:  'Organization',
    subPropertyOf:  'memberOf',
    type:           'Property'
  },
  agent:                            {
    description:    'The direct performer or driver of the action (animate or inanimate). e.g. <em>John</em> wrote a book.',
    domainIncludes: 'Action',
    id:             'agent',
    label:          'agent',
    rangeIncludes:  [
      'Person',
      'Organization'
    ],
    type:           'Property'
  },
  aggregateRating:                  {
    description:    'The overall rating, based on a collection of reviews or ratings, of the item.',
    domainIncludes: [
      'Organization',
      'Event',
      'Place',
      'Brand',
      'CreativeWork',
      'Product',
      'Service',
      'Offer'
    ],
    id:             'aggregateRating',
    label:          'aggregateRating',
    rangeIncludes:  'AggregateRating',
    type:           'Property'
  },
  aircraft:                         {
    description:    'The kind of aircraft (e.g., "Boeing 747").',
    domainIncludes: 'Flight',
    id:             'aircraft',
    label:          'aircraft',
    rangeIncludes:  [
      'Text',
      'Vehicle'
    ],
    type:           'Property'
  },
  album:                            {
    description:    'A music album.',
    domainIncludes: 'MusicGroup',
    id:             'album',
    label:          'album',
    rangeIncludes:  'MusicAlbum',
    type:           'Property'
  },
  albumProductionType:              {
    description:    'Classification of the album by it\'s type of content: soundtrack, live album, studio album, etc.',
    domainIncludes: 'MusicAlbum',
    id:             'albumProductionType',
    label:          'albumProductionType',
    rangeIncludes:  'MusicAlbumProductionType',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ',
    type:           'Property'
  },
  albumRelease:                     {
    description:    'A release of this album.',
    domainIncludes: 'MusicAlbum',
    id:             'albumRelease',
    inverseOf:      'releaseOf',
    label:          'albumRelease',
    rangeIncludes:  'MusicRelease',
    type:           'Property'
  },
  albumReleaseType:                 {
    description:    'The kind of release which this album is: single, EP or album.',
    domainIncludes: 'MusicAlbum',
    id:             'albumReleaseType',
    label:          'albumReleaseType',
    rangeIncludes:  'MusicAlbumReleaseType',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ',
    type:           'Property'
  },
  albums:                           {
    description:    'A collection of music albums.',
    domainIncludes: 'MusicGroup',
    id:             'albums',
    label:          'albums',
    rangeIncludes:  'MusicAlbum',
    supersededBy:   'album',
    type:           'Property'
  },
  alignmentType:                    {
    description:    'A category of alignment between the learning resource and the framework node. Recommended values include: \'assesses\', \'teaches\', \'requires\', \'textComplexity\', \'readingLevel\', \'educationalSubject\', and \'educationLevel\'.',
    domainIncludes: 'AlignmentObject',
    id:             'alignmentType',
    label:          'alignmentType',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  alternateName:                    {
    description:    'An alias for the item.',
    domainIncludes: 'Thing',
    id:             'alternateName',
    label:          'alternateName',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  alternativeHeadline:              {
    description:    'A secondary title of the CreativeWork.',
    domainIncludes: 'CreativeWork',
    id:             'alternativeHeadline',
    label:          'alternativeHeadline',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  alumni:                           {
    description:    'Alumni of an organization.',
    domainIncludes: [
      'EducationalOrganization',
      'Organization'
    ],
    id:             'alumni',
    inverseOf:      'alumniOf',
    label:          'alumni',
    rangeIncludes:  'Person',
    type:           'Property'
  },
  alumniOf:                         {
    description:    'An organization that the person is an alumni of.',
    domainIncludes: 'Person',
    id:             'alumniOf',
    inverseOf:      'alumni',
    label:          'alumniOf',
    rangeIncludes:  [
      'Organization',
      'EducationalOrganization'
    ],
    type:           'Property'
  },
  amenityFeature:                   {
    description:    'An amenity feature (e.g. a characteristic or service) of the Accommodation. This generic property does not make a statement about whether the feature is included in an offer for the main accommodation or available at extra costs.',
    domainIncludes: [
      'Place',
      'LodgingBusiness',
      'Accommodation'
    ],
    id:             'amenityFeature',
    label:          'amenityFeature',
    rangeIncludes:  'LocationFeatureSpecification',
    source:         'https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology',
    type:           'Property'
  },
  amount:                           {
    description:    'The amount of money.',
    domainIncludes: [
      'DatedMoneySpecification',
      'InvestmentOrDeposit',
      'LoanOrCredit'
    ],
    id:             'amount',
    label:          'amount',
    rangeIncludes:  [
      'Number',
      'MonetaryAmount'
    ],
    type:           'Property'
  },
  amountOfThisGood:                 {
    description:    'The quantity of the goods included in the offer.',
    domainIncludes: 'TypeAndQuantityNode',
    id:             'amountOfThisGood',
    label:          'amountOfThisGood',
    rangeIncludes:  'Number',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  annualPercentageRate:             {
    description:    'The annual rate that is charged for borrowing (or made by investing), expressed as a single percentage number that represents the actual yearly cost of funds over the term of a loan. This includes any fees or additional costs associated with the transaction.',
    domainIncludes: 'FinancialProduct',
    id:             'annualPercentageRate',
    label:          'annualPercentageRate',
    rangeIncludes:  [
      'Number',
      'QuantitativeValue'
    ],
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO',
    type:           'Property'
  },
  answerCount:                      {
    description:    'The number of answers this question has received.',
    domainIncludes: 'Question',
    id:             'answerCount',
    label:          'answerCount',
    rangeIncludes:  'Integer',
    type:           'Property'
  },
  application:                      {
    description:    'An application that can complete the request.',
    domainIncludes: 'EntryPoint',
    id:             'application',
    label:          'application',
    rangeIncludes:  'SoftwareApplication',
    supersededBy:   'actionApplication',
    type:           'Property'
  },
  applicationCategory:              {
    description:    'Type of software application, e.g. \'Game, Multimedia\'.',
    domainIncludes: 'SoftwareApplication',
    id:             'applicationCategory',
    label:          'applicationCategory',
    rangeIncludes:  [
      'URL',
      'Text'
    ],
    type:           'Property'
  },
  applicationSubCategory:           {
    description:    'Subcategory of the application, e.g. \'Arcade Game\'.',
    domainIncludes: 'SoftwareApplication',
    id:             'applicationSubCategory',
    label:          'applicationSubCategory',
    rangeIncludes:  [
      'Text',
      'URL'
    ],
    type:           'Property'
  },
  applicationSuite:                 {
    description:    'The name of the application suite to which the application belongs (e.g. Excel belongs to Office).',
    domainIncludes: 'SoftwareApplication',
    id:             'applicationSuite',
    label:          'applicationSuite',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  appliesToDeliveryMethod:          {
    description:    'The delivery method(s) to which the delivery charge or payment charge specification applies.',
    domainIncludes: [
      'DeliveryChargeSpecification',
      'PaymentChargeSpecification'
    ],
    id:             'appliesToDeliveryMethod',
    label:          'appliesToDeliveryMethod',
    rangeIncludes:  'DeliveryMethod',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  appliesToPaymentMethod:           {
    description:    'The payment method(s) to which the payment charge specification applies.',
    domainIncludes: 'PaymentChargeSpecification',
    id:             'appliesToPaymentMethod',
    label:          'appliesToPaymentMethod',
    rangeIncludes:  'PaymentMethod',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  area:                             {
    description:    'The area within which users can expect to reach the broadcast service.',
    domainIncludes: 'BroadcastService',
    id:             'area',
    label:          'area',
    rangeIncludes:  'Place',
    supersededBy:   'serviceArea',
    type:           'Property'
  },
  areaServed:                       {
    description:    'The geographic area where a service or offered item is provided.',
    domainIncludes: [
      'DeliveryChargeSpecification',
      'Offer',
      'Service',
      'Organization',
      'ContactPoint',
      'Demand'
    ],
    id:             'areaServed',
    label:          'areaServed',
    rangeIncludes:  [
      'Place',
      'Text',
      'AdministrativeArea',
      'GeoShape'
    ],
    type:           'Property'
  },
  arrivalAirport:                   {
    description:    'The airport where the flight terminates.',
    domainIncludes: 'Flight',
    id:             'arrivalAirport',
    label:          'arrivalAirport',
    rangeIncludes:  'Airport',
    type:           'Property'
  },
  arrivalBusStop:                   {
    description:    'The stop or station from which the bus arrives.',
    domainIncludes: 'BusTrip',
    id:             'arrivalBusStop',
    label:          'arrivalBusStop',
    rangeIncludes:  [
      'BusStation',
      'BusStop'
    ],
    type:           'Property'
  },
  arrivalGate:                      {
    description:    'Identifier of the flight\'s arrival gate.',
    domainIncludes: 'Flight',
    id:             'arrivalGate',
    label:          'arrivalGate',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  arrivalPlatform:                  {
    description:    'The platform where the train arrives.',
    domainIncludes: 'TrainTrip',
    id:             'arrivalPlatform',
    label:          'arrivalPlatform',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  arrivalStation:                   {
    description:    'The station where the train trip ends.',
    domainIncludes: 'TrainTrip',
    id:             'arrivalStation',
    label:          'arrivalStation',
    rangeIncludes:  'TrainStation',
    type:           'Property'
  },
  arrivalTerminal:                  {
    description:    'Identifier of the flight\'s arrival terminal.',
    domainIncludes: 'Flight',
    id:             'arrivalTerminal',
    label:          'arrivalTerminal',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  arrivalTime:                      {
    description:    'The expected arrival time.',
    domainIncludes: [
      'Flight',
      'TrainTrip',
      'BusTrip'
    ],
    id:             'arrivalTime',
    label:          'arrivalTime',
    rangeIncludes:  'DateTime',
    type:           'Property'
  },
  artEdition:                       {
    description:    'The number of copies when multiple copies of a piece of artwork are produced - e.g. for a limited edition of 20 prints, \'artEdition\' refers to the total number of copies (in this example "20").',
    domainIncludes: 'VisualArtwork',
    id:             'artEdition',
    label:          'artEdition',
    rangeIncludes:  [
      'Text',
      'Integer'
    ],
    type:           'Property'
  },
  artMedium:                        {
    description:    'The material used. (e.g. Oil, Watercolour, Acrylic, Linoprint, Marble, Cyanotype, Digital, Lithograph, DryPoint, Intaglio, Pastel, Woodcut, Pencil, Mixed Media, etc.)',
    domainIncludes: 'VisualArtwork',
    id:             'artMedium',
    label:          'artMedium',
    rangeIncludes:  [
      'Text',
      'URL'
    ],
    type:           'Property'
  },
  artform:                          {
    description:    'e.g. Painting, Drawing, Sculpture, Print, Photograph, Assemblage, Collage, etc.',
    domainIncludes: 'VisualArtwork',
    id:             'artform',
    label:          'artform',
    rangeIncludes:  [
      'Text',
      'URL'
    ],
    type:           'Property'
  },
  articleBody:                      {
    description:    'The actual body of the article.',
    domainIncludes: 'Article',
    id:             'articleBody',
    label:          'articleBody',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  articleSection:                   {
    description:    'Articles may belong to one or more \'sections\' in a magazine or newspaper, such as Sports, Lifestyle, etc.',
    domainIncludes: 'Article',
    id:             'articleSection',
    label:          'articleSection',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  artworkSurface:                   {
    description:    'The supporting materials for the artwork, e.g. Canvas, Paper, Wood, Board, etc.',
    domainIncludes: 'VisualArtwork',
    id:             'artworkSurface',
    label:          'artworkSurface',
    rangeIncludes:  [
      'URL',
      'Text'
    ],
    type:           'Property'
  },
  assembly:                         {
    description:    'Library file name e.g., mscorlib.dll, system.web.dll.',
    domainIncludes: 'APIReference',
    id:             'assembly',
    label:          'assembly',
    rangeIncludes:  'Text',
    supersededBy:   'executableLibraryName',
    type:           'Property'
  },
  assemblyVersion:                  {
    description:    'Associated product/technology version. e.g., .NET Framework 4.5.',
    domainIncludes: 'APIReference',
    id:             'assemblyVersion',
    label:          'assemblyVersion',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  associatedArticle:                {
    description:    'A NewsArticle associated with the Media Object.',
    domainIncludes: 'MediaObject',
    id:             'associatedArticle',
    label:          'associatedArticle',
    rangeIncludes:  'NewsArticle',
    type:           'Property'
  },
  associatedMedia:                  {
    description:    'A media object that encodes this CreativeWork. This property is a synonym for encoding.',
    domainIncludes: 'CreativeWork',
    id:             'associatedMedia',
    label:          'associatedMedia',
    rangeIncludes:  'MediaObject',
    type:           'Property'
  },
  athlete:                          {
    description:    'A person that acts as performing member of a sports team; a player as opposed to a coach.',
    domainIncludes: 'SportsTeam',
    id:             'athlete',
    label:          'athlete',
    rangeIncludes:  'Person',
    type:           'Property'
  },
  attendee:                         {
    description:    'A person or organization attending the event.',
    domainIncludes: 'Event',
    id:             'attendee',
    label:          'attendee',
    rangeIncludes:  [
      'Organization',
      'Person'
    ],
    type:           'Property'
  },
  attendees:                        {
    description:    'A person attending the event.',
    domainIncludes: 'Event',
    id:             'attendees',
    label:          'attendees',
    rangeIncludes:  [
      'Organization',
      'Person'
    ],
    supersededBy:   'attendee',
    type:           'Property'
  },
  audience:                         {
    description:    'An intended audience, i.e. a group for whom something was created.',
    domainIncludes: [
      'CreativeWork',
      'Service',
      'PlayAction',
      'LodgingBusiness',
      'Product'
    ],
    id:             'audience',
    label:          'audience',
    rangeIncludes:  'Audience',
    type:           'Property'
  },
  audienceType:                     {
    description:    'The target group associated with a given audience (e.g. veterans, car owners, musicians, etc.).',
    domainIncludes: 'Audience',
    id:             'audienceType',
    label:          'audienceType',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  audio:                            {
    description:    'An embedded audio object.',
    domainIncludes: 'CreativeWork',
    id:             'audio',
    label:          'audio',
    rangeIncludes:  'AudioObject',
    type:           'Property'
  },
  author:                           {
    description:    'The author of this content or rating. Please note that author is special in that HTML 5 provides a special mechanism for indicating authorship via the rel tag. That is equivalent to this and may be used interchangeably.',
    domainIncludes: [
      'Rating',
      'CreativeWork'
    ],
    id:             'author',
    label:          'author',
    rangeIncludes:  [
      'Organization',
      'Person'
    ],
    type:           'Property'
  },
  availability:                     {
    description:    'The availability of this item&#x2014;for example In stock, Out of stock, Pre-order, etc.',
    domainIncludes: [
      'Offer',
      'Demand'
    ],
    id:             'availability',
    label:          'availability',
    rangeIncludes:  'ItemAvailability',
    type:           'Property'
  },
  availabilityEnds:                 {
    description:    'The end of the availability of the product or service included in the offer.',
    domainIncludes: [
      'Demand',
      'Offer'
    ],
    id:             'availabilityEnds',
    label:          'availabilityEnds',
    rangeIncludes:  'DateTime',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  availabilityStarts:               {
    description:    'The beginning of the availability of the product or service included in the offer.',
    domainIncludes: [
      'Demand',
      'Offer'
    ],
    id:             'availabilityStarts',
    label:          'availabilityStarts',
    rangeIncludes:  'DateTime',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  availableAtOrFrom:                {
    description:    'The place(s) from which the offer can be obtained (e.g. store locations).',
    domainIncludes: [
      'Offer',
      'Demand'
    ],
    id:             'availableAtOrFrom',
    label:          'availableAtOrFrom',
    rangeIncludes:  'Place',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    subPropertyOf:  'areaServed',
    type:           'Property'
  },
  availableChannel:                 {
    description:    'A means of accessing the service (e.g. a phone bank, a web site, a location, etc.).',
    domainIncludes: 'Service',
    id:             'availableChannel',
    label:          'availableChannel',
    rangeIncludes:  'ServiceChannel',
    type:           'Property'
  },
  availableDeliveryMethod:          {
    description:    'The delivery method(s) available for this offer.',
    domainIncludes: [
      'Demand',
      'Offer'
    ],
    id:             'availableDeliveryMethod',
    label:          'availableDeliveryMethod',
    rangeIncludes:  'DeliveryMethod',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  availableFrom:                    {
    description:    'When the item is available for pickup from the store, locker, etc.',
    domainIncludes: 'DeliveryEvent',
    id:             'availableFrom',
    label:          'availableFrom',
    rangeIncludes:  'DateTime',
    type:           'Property'
  },
  availableLanguage:                {
    description:    'A language someone may use with the item. Please use one of the language codes from the <a href="http://tools.ietf.org/html/bcp47">IETF BCP 47 standard</a>. See also <a class="localLink" href="/inLanguage">inLanguage</a>',
    domainIncludes: [
      'ContactPoint',
      'LodgingBusiness',
      'ServiceChannel'
    ],
    id:             'availableLanguage',
    label:          'availableLanguage',
    rangeIncludes:  [
      'Language',
      'Text'
    ],
    type:           'Property'
  },
  availableOnDevice:                {
    description:    'Device required to run the application. Used in cases where a specific make/model is required to run the application.',
    domainIncludes: 'SoftwareApplication',
    id:             'availableOnDevice',
    label:          'availableOnDevice',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  availableThrough:                 {
    description:    'After this date, the item will no longer be available for pickup.',
    domainIncludes: 'DeliveryEvent',
    id:             'availableThrough',
    label:          'availableThrough',
    rangeIncludes:  'DateTime',
    type:           'Property'
  },
  award:                            {
    description:    'An award won by or for this item.',
    domainIncludes: [
      'Person',
      'CreativeWork',
      'Product',
      'Service',
      'Organization'
    ],
    id:             'award',
    label:          'award',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  awards:                           {
    description:    'Awards won by or for this item.',
    domainIncludes: [
      'CreativeWork',
      'Organization',
      'Product',
      'Person'
    ],
    id:             'awards',
    label:          'awards',
    rangeIncludes:  'Text',
    supersededBy:   'award',
    type:           'Property'
  },
  awayTeam:                         {
    description:    'The away team in a sports event.',
    domainIncludes: 'SportsEvent',
    id:             'awayTeam',
    label:          'awayTeam',
    rangeIncludes:  [
      'Person',
      'SportsTeam'
    ],
    subPropertyOf:  'competitor',
    type:           'Property'
  },
  baseSalary:                       {
    description:    'The base salary of the job or of an employee in an EmployeeRole.',
    domainIncludes: [
      'EmployeeRole',
      'JobPosting'
    ],
    id:             'baseSalary',
    label:          'baseSalary',
    rangeIncludes:  [
      'Number',
      'MonetaryAmount',
      'PriceSpecification'
    ],
    type:           'Property'
  },
  bed:                              {
    description:    'The type of bed or beds included in the accommodation. For the single case of just one bed of a certain type, you use bed directly with a text.\n      If you want to indicate the quantity of a certain kind of bed, use an instance of BedDetails. For more detailed information, use the amenityFeature property.',
    domainIncludes: [
      'Suite',
      'HotelRoom'
    ],
    id:             'bed',
    label:          'bed',
    rangeIncludes:  [
      'BedDetails',
      'Text'
    ],
    source:         'https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology',
    type:           'Property'
  },
  benefits:                         {
    description:    'Description of benefits associated with the job.',
    domainIncludes: 'JobPosting',
    id:             'benefits',
    label:          'benefits',
    rangeIncludes:  'Text',
    supersededBy:   'jobBenefits',
    type:           'Property'
  },
  bestRating:                       {
    description:    'The highest value allowed in this rating system. If bestRating is omitted, 5 is assumed.',
    domainIncludes: 'Rating',
    id:             'bestRating',
    label:          'bestRating',
    rangeIncludes:  [
      'Number',
      'Text'
    ],
    type:           'Property'
  },
  billingAddress:                   {
    description:    'The billing address for the order.',
    domainIncludes: 'Order',
    id:             'billingAddress',
    label:          'billingAddress',
    rangeIncludes:  'PostalAddress',
    type:           'Property'
  },
  billingIncrement:                 {
    description:    'This property specifies the minimal quantity and rounding increment that will be the basis for the billing. The unit of measurement is specified by the unitCode property.',
    domainIncludes: 'UnitPriceSpecification',
    id:             'billingIncrement',
    label:          'billingIncrement',
    rangeIncludes:  'Number',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  billingPeriod:                    {
    description:    'The time interval used to compute the invoice.',
    domainIncludes: 'Invoice',
    id:             'billingPeriod',
    label:          'billingPeriod',
    rangeIncludes:  'Duration',
    type:           'Property'
  },
  birthDate:                        {
    description:    'Date of birth.',
    domainIncludes: 'Person',
    id:             'birthDate',
    label:          'birthDate',
    rangeIncludes:  'Date',
    type:           'Property'
  },
  birthPlace:                       {
    description:    'The place where the person was born.',
    domainIncludes: 'Person',
    id:             'birthPlace',
    label:          'birthPlace',
    rangeIncludes:  'Place',
    type:           'Property'
  },
  bitrate:                          {
    description:    'The bitrate of the media object.',
    domainIncludes: 'MediaObject',
    id:             'bitrate',
    label:          'bitrate',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  blogPost:                         {
    description:    'A posting that is part of this blog.',
    domainIncludes: 'Blog',
    id:             'blogPost',
    label:          'blogPost',
    rangeIncludes:  'BlogPosting',
    type:           'Property'
  },
  blogPosts:                        {
    description:    'The postings that are part of this blog.',
    domainIncludes: 'Blog',
    id:             'blogPosts',
    label:          'blogPosts',
    rangeIncludes:  'BlogPosting',
    supersededBy:   'blogPost',
    type:           'Property'
  },
  boardingGroup:                    {
    description:    'The airline-specific indicator of boarding order / preference.',
    domainIncludes: 'FlightReservation',
    id:             'boardingGroup',
    label:          'boardingGroup',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  boardingPolicy:                   {
    description:    'The type of boarding policy used by the airline (e.g. zone-based or group-based).',
    domainIncludes: [
      'Flight',
      'Airline'
    ],
    id:             'boardingPolicy',
    label:          'boardingPolicy',
    rangeIncludes:  'BoardingPolicyType',
    type:           'Property'
  },
  bookEdition:                      {
    description:    'The edition of the book.',
    domainIncludes: 'Book',
    id:             'bookEdition',
    label:          'bookEdition',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  bookFormat:                       {
    description:    'The format of the book.',
    domainIncludes: 'Book',
    id:             'bookFormat',
    label:          'bookFormat',
    rangeIncludes:  'BookFormatType',
    type:           'Property'
  },
  bookingAgent:                     {
    description:    '\'bookingAgent\' is an out-dated term indicating a \'broker\' that serves as a booking agent.',
    domainIncludes: 'Reservation',
    id:             'bookingAgent',
    label:          'bookingAgent',
    rangeIncludes:  [
      'Organization',
      'Person'
    ],
    supersededBy:   'broker',
    type:           'Property'
  },
  bookingTime:                      {
    description:    'The date and time the reservation was booked.',
    domainIncludes: 'Reservation',
    id:             'bookingTime',
    label:          'bookingTime',
    rangeIncludes:  'DateTime',
    type:           'Property'
  },
  borrower:                         {
    description:    'A sub property of participant. The person that borrows the object being lent.',
    domainIncludes: 'LendAction',
    id:             'borrower',
    label:          'borrower',
    rangeIncludes:  'Person',
    subPropertyOf:  'participant',
    type:           'Property'
  },
  box:                              {
    description:    'A box is the area enclosed by the rectangle formed by two points. The first point is the lower corner, the second point is the upper corner. A box is expressed as two points separated by a space character.',
    domainIncludes: 'GeoShape',
    id:             'box',
    label:          'box',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  branchCode:                       {
    description:    'A short textual code (also called "store code") that uniquely identifies a place of business. The code is typically assigned by the parentOrganization and used in structured URLs.</p>\n<p>For example, in the URL http://www.starbucks.co.uk/store-locator/etc/detail/3047 the code "3047" is a branchCode for a particular branch.',
    domainIncludes: 'Place',
    id:             'branchCode',
    label:          'branchCode',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  branchOf:                         {
    description:    'The larger organization that this local business is a branch of, if any. Not to be confused with (anatomical)<a class="localLink" href="/branch">branch</a>.',
    domainIncludes: 'LocalBusiness',
    id:             'branchOf',
    label:          'branchOf',
    rangeIncludes:  'Organization',
    supersededBy:   'parentOrganization',
    type:           'Property'
  },
  brand:                            {
    description:    'The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person.',
    domainIncludes: [
      'Organization',
      'Person',
      'Product',
      'Service'
    ],
    id:             'brand',
    label:          'brand',
    rangeIncludes:  [
      'Brand',
      'Organization'
    ],
    type:           'Property'
  },
  breadcrumb:                       {
    description:    'A set of links that can help a user understand and navigate a website hierarchy.',
    domainIncludes: 'WebPage',
    id:             'breadcrumb',
    label:          'breadcrumb',
    rangeIncludes:  [
      'BreadcrumbList',
      'Text'
    ],
    type:           'Property'
  },
  broadcastAffiliateOf:             {
    description:    'The media network(s) whose content is broadcast on this station.',
    domainIncludes: 'BroadcastService',
    id:             'broadcastAffiliateOf',
    label:          'broadcastAffiliateOf',
    rangeIncludes:  'Organization',
    type:           'Property'
  },
  broadcastChannelId:               {
    description:    'The unique address by which the BroadcastService can be identified in a provider lineup. In US, this is typically a number.',
    domainIncludes: 'BroadcastChannel',
    id:             'broadcastChannelId',
    label:          'broadcastChannelId',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  broadcastDisplayName:             {
    description:    'The name displayed in the channel guide. For many US affiliates, it is the network name.',
    domainIncludes: 'BroadcastService',
    id:             'broadcastDisplayName',
    label:          'broadcastDisplayName',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  broadcastOfEvent:                 {
    description:    'The event being broadcast such as a sporting event or awards ceremony.',
    domainIncludes: 'BroadcastEvent',
    id:             'broadcastOfEvent',
    label:          'broadcastOfEvent',
    rangeIncludes:  'Event',
    type:           'Property'
  },
  broadcastServiceTier:             {
    description:    'The type of service required to have access to the channel (e.g. Standard or Premium).',
    domainIncludes: 'BroadcastChannel',
    id:             'broadcastServiceTier',
    label:          'broadcastServiceTier',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  broadcastTimezone:                {
    description:    'The timezone in <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO 8601 format</a> for which the service bases its broadcasts',
    domainIncludes: 'BroadcastService',
    id:             'broadcastTimezone',
    label:          'broadcastTimezone',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  broadcaster:                      {
    description:    'The organization owning or operating the broadcast service.',
    domainIncludes: 'BroadcastService',
    id:             'broadcaster',
    label:          'broadcaster',
    rangeIncludes:  'Organization',
    type:           'Property'
  },
  broker:                           {
    description:    'An entity that arranges for an exchange between a buyer and a seller.  In most cases a broker never acquires or releases ownership of a product or service involved in an exchange.  If it is not clear whether an entity is a broker, seller, or buyer, the latter two terms are preferred.',
    domainIncludes: [
      'Invoice',
      'Reservation',
      'Order'
    ],
    id:             'broker',
    label:          'broker',
    rangeIncludes:  [
      'Person',
      'Organization'
    ],
    type:           'Property'
  },
  browserRequirements:              {
    description:    'Specifies browser requirements in human-readable text. For example, \'requires HTML5 support\'.',
    domainIncludes: 'WebApplication',
    id:             'browserRequirements',
    label:          'browserRequirements',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  busName:                          {
    description:    'The name of the bus (e.g. Bolt Express).',
    domainIncludes: 'BusTrip',
    id:             'busName',
    label:          'busName',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  busNumber:                        {
    description:    'The unique identifier for the bus.',
    domainIncludes: 'BusTrip',
    id:             'busNumber',
    label:          'busNumber',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  businessFunction:                 {
    description:    'The business function (e.g. sell, lease, repair, dispose) of the offer or component of a bundle (TypeAndQuantityNode). The default is http://purl.org/goodrelations/v1#Sell.',
    domainIncludes: [
      'TypeAndQuantityNode',
      'Demand',
      'Offer'
    ],
    id:             'businessFunction',
    label:          'businessFunction',
    rangeIncludes:  'BusinessFunction',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  buyer:                            {
    description:    'A sub property of participant. The participant/person/organization that bought the object.',
    domainIncludes: 'SellAction',
    id:             'buyer',
    label:          'buyer',
    rangeIncludes:  'Person',
    subPropertyOf:  'participant',
    type:           'Property'
  },
  byArtist:                         {
    description:    'The artist that performed this album or recording.',
    domainIncludes: [
      'MusicAlbum',
      'MusicRecording'
    ],
    id:             'byArtist',
    label:          'byArtist',
    rangeIncludes:  'MusicGroup',
    type:           'Property'
  },
  calories:                         {
    description:    'The number of calories.',
    domainIncludes: 'NutritionInformation',
    id:             'calories',
    label:          'calories',
    rangeIncludes:  'Energy',
    type:           'Property'
  },
  candidate:                        {
    description:    'A sub property of object. The candidate subject of this action.',
    domainIncludes: 'VoteAction',
    id:             'candidate',
    label:          'candidate',
    rangeIncludes:  'Person',
    subPropertyOf:  'object',
    type:           'Property'
  },
  caption:                          {
    description:    'The caption for this object.',
    domainIncludes: [
      'VideoObject',
      'ImageObject'
    ],
    id:             'caption',
    label:          'caption',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  carbohydrateContent:              {
    description:    'The number of grams of carbohydrates.',
    domainIncludes: 'NutritionInformation',
    id:             'carbohydrateContent',
    label:          'carbohydrateContent',
    rangeIncludes:  'Mass',
    type:           'Property'
  },
  cargoVolume:                      {
    description:    'The available volume for cargo or luggage. For automobiles, this is usually the trunk volume.</p>\n<p>Typical unit code(s): LTR for liters, FTQ for cubic foot/feet</p>\n<p>Note: You can use <a class="localLink" href="/minValue">minValue</a> and <a class="localLink" href="/maxValue">maxValue</a> to indicate ranges.',
    domainIncludes: 'Vehicle',
    id:             'cargoVolume',
    label:          'cargoVolume',
    rangeIncludes:  'QuantitativeValue',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group',
    type:           'Property'
  },
  carrier:                          {
    description:    '\'carrier\' is an out-dated term indicating the \'provider\' for parcel delivery and flights.',
    domainIncludes: [
      'Flight',
      'ParcelDelivery'
    ],
    id:             'carrier',
    label:          'carrier',
    rangeIncludes:  'Organization',
    supersededBy:   'provider',
    type:           'Property'
  },
  carrierRequirements:              {
    description:    'Specifies specific carrier(s) requirements for the application (e.g. an application may only work on a specific carrier network).',
    domainIncludes: 'MobileApplication',
    id:             'carrierRequirements',
    label:          'carrierRequirements',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  catalog:                          {
    description:    'A data catalog which contains this dataset.',
    domainIncludes: 'Dataset',
    id:             'catalog',
    label:          'catalog',
    rangeIncludes:  'DataCatalog',
    supersededBy:   'includedInDataCatalog',
    type:           'Property'
  },
  catalogNumber:                    {
    description:    'The catalog number for the release.',
    domainIncludes: 'MusicRelease',
    id:             'catalogNumber',
    label:          'catalogNumber',
    rangeIncludes:  'Text',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ',
    type:           'Property'
  },
  category:                         {
    description:    'A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy.',
    domainIncludes: [
      'Invoice',
      'Offer',
      'Service',
      'Product'
    ],
    id:             'category',
    label:          'category',
    rangeIncludes:  [
      'Thing',
      'Text'
    ],
    type:           'Property'
  },
  character:                        {
    description:    'Fictional person connected with a creative work.',
    domainIncludes: 'CreativeWork',
    id:             'character',
    label:          'character',
    rangeIncludes:  'Person',
    type:           'Property'
  },
  characterAttribute:               {
    description:    'A piece of data that represents a particular aspect of a fictional character (skill, power, character points, advantage, disadvantage).',
    domainIncludes: [
      'VideoGameSeries',
      'Game'
    ],
    id:             'characterAttribute',
    label:          'characterAttribute',
    rangeIncludes:  'Thing',
    type:           'Property'
  },
  characterName:                    {
    description:    'The name of a character played in some acting or performing role, i.e. in a PerformanceRole.',
    domainIncludes: 'PerformanceRole',
    id:             'characterName',
    label:          'characterName',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  cheatCode:                        {
    description:    'Cheat codes to the game.',
    domainIncludes: [
      'VideoGameSeries',
      'VideoGame'
    ],
    id:             'cheatCode',
    label:          'cheatCode',
    rangeIncludes:  'CreativeWork',
    type:           'Property'
  },
  checkinTime:                      {
    description:    'The earliest someone may check into a lodging establishment.',
    domainIncludes: [
      'LodgingReservation',
      'LodgingBusiness'
    ],
    id:             'checkinTime',
    label:          'checkinTime',
    rangeIncludes:  'DateTime',
    type:           'Property'
  },
  checkoutTime:                     {
    description:    'The latest someone may check out of a lodging establishment.',
    domainIncludes: [
      'LodgingReservation',
      'LodgingBusiness'
    ],
    id:             'checkoutTime',
    label:          'checkoutTime',
    rangeIncludes:  'DateTime',
    type:           'Property'
  },
  childMaxAge:                      {
    description:    'Maximal age of the child.',
    domainIncludes: 'ParentAudience',
    id:             'childMaxAge',
    label:          'childMaxAge',
    rangeIncludes:  'Number',
    type:           'Property'
  },
  childMinAge:                      {
    description:    'Minimal age of the child.',
    domainIncludes: 'ParentAudience',
    id:             'childMinAge',
    label:          'childMinAge',
    rangeIncludes:  'Number',
    type:           'Property'
  },
  children:                         {
    description:    'A child of the person.',
    domainIncludes: 'Person',
    id:             'children',
    label:          'children',
    rangeIncludes:  'Person',
    type:           'Property'
  },
  cholesterolContent:               {
    description:    'The number of milligrams of cholesterol.',
    domainIncludes: 'NutritionInformation',
    id:             'cholesterolContent',
    label:          'cholesterolContent',
    rangeIncludes:  'Mass',
    type:           'Property'
  },
  circle:                           {
    description:    'A circle is the circular region of a specified radius centered at a specified latitude and longitude. A circle is expressed as a pair followed by a radius in meters.',
    domainIncludes: 'GeoShape',
    id:             'circle',
    label:          'circle',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  citation:                         {
    description:    'A citation or reference to another creative work, such as another publication, web page, scholarly article, etc.',
    domainIncludes: 'CreativeWork',
    id:             'citation',
    label:          'citation',
    rangeIncludes:  [
      'CreativeWork',
      'Text'
    ],
    type:           'Property'
  },
  clipNumber:                       {
    description:    'Position of the clip within an ordered group of clips.',
    domainIncludes: 'Clip',
    id:             'clipNumber',
    label:          'clipNumber',
    rangeIncludes:  [
      'Text',
      'Integer'
    ],
    subPropertyOf:  'position',
    type:           'Property'
  },
  closes:                           {
    description:    'The closing hour of the place or service on the given day(s) of the week.',
    domainIncludes: 'OpeningHoursSpecification',
    id:             'closes',
    label:          'closes',
    rangeIncludes:  'Time',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  coach:                            {
    description:    'A person that acts in a coaching role for a sports team.',
    domainIncludes: 'SportsTeam',
    id:             'coach',
    label:          'coach',
    rangeIncludes:  'Person',
    type:           'Property'
  },
  codeRepository:                   {
    description:    'Link to the repository where the un-compiled, human readable code and related code is located (SVN, github, CodePlex).',
    domainIncludes: 'SoftwareSourceCode',
    id:             'codeRepository',
    label:          'codeRepository',
    rangeIncludes:  'URL',
    type:           'Property'
  },
  codeSampleType:                   {
    description:    'What type of code sample: full (compile ready) solution, code snippet, inline code, scripts, template.',
    domainIncludes: 'SoftwareSourceCode',
    id:             'codeSampleType',
    label:          'codeSampleType',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  colleague:                        {
    description:    'A colleague of the person.',
    domainIncludes: 'Person',
    id:             'colleague',
    label:          'colleague',
    rangeIncludes:  [
      'URL',
      'Person'
    ],
    type:           'Property'
  },
  colleagues:                       {
    description:    'A colleague of the person.',
    domainIncludes: 'Person',
    id:             'colleagues',
    label:          'colleagues',
    rangeIncludes:  'Person',
    supersededBy:   'colleague',
    type:           'Property'
  },
  collection:                       {
    description:    'A sub property of object. The collection target of the action.',
    domainIncludes: 'UpdateAction',
    id:             'collection',
    label:          'collection',
    rangeIncludes:  'Thing',
    subPropertyOf:  'object',
    supersededBy:   'targetCollection',
    type:           'Property'
  },
  color:                            {
    description:    'The color of the product.',
    domainIncludes: 'Product',
    id:             'color',
    label:          'color',
    rangeIncludes:  'Text',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  comment:                          {
    description:    'Comments, typically from users.',
    domainIncludes: [
      'RsvpAction',
      'CreativeWork'
    ],
    id:             'comment',
    label:          'comment',
    rangeIncludes:  'Comment',
    type:           'Property'
  },
  commentCount:                     {
    description:    'The number of comments this CreativeWork (e.g. Article, Question or Answer) has received. This is most applicable to works published in Web sites with commenting system; additional comments may exist elsewhere.',
    domainIncludes: 'CreativeWork',
    id:             'commentCount',
    label:          'commentCount',
    rangeIncludes:  'Integer',
    type:           'Property'
  },
  commentText:                      {
    description:    'The text of the UserComment.',
    domainIncludes: 'UserComments',
    id:             'commentText',
    label:          'commentText',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  commentTime:                      {
    description:    'The time at which the UserComment was made.',
    domainIncludes: 'UserComments',
    id:             'commentTime',
    label:          'commentTime',
    rangeIncludes:  [
      'DateTime',
      'Date'
    ],
    type:           'Property'
  },
  competitor:                       {
    description:    'A competitor in a sports event.',
    domainIncludes: 'SportsEvent',
    id:             'competitor',
    label:          'competitor',
    rangeIncludes:  [
      'SportsTeam',
      'Person'
    ],
    type:           'Property'
  },
  composer:                         {
    description:    'The person or organization who wrote a composition, or who is the composer of a work performed at some event.',
    domainIncludes: [
      'Event',
      'MusicComposition'
    ],
    id:             'composer',
    label:          'composer',
    rangeIncludes:  [
      'Organization',
      'Person'
    ],
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ',
    type:           'Property'
  },
  confirmationNumber:               {
    description:    'A number that confirms the given order or payment has been received.',
    domainIncludes: [
      'Order',
      'Invoice'
    ],
    id:             'confirmationNumber',
    label:          'confirmationNumber',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  contactOption:                    {
    description:    'An option available on this contact point (e.g. a toll-free number or support for hearing-impaired callers).',
    domainIncludes: 'ContactPoint',
    id:             'contactOption',
    label:          'contactOption',
    rangeIncludes:  'ContactPointOption',
    type:           'Property'
  },
  contactPoint:                     {
    description:    'A contact point for a person or organization.',
    domainIncludes: [
      'Organization',
      'Person'
    ],
    id:             'contactPoint',
    label:          'contactPoint',
    rangeIncludes:  'ContactPoint',
    type:           'Property'
  },
  contactPoints:                    {
    description:    'A contact point for a person or organization.',
    domainIncludes: [
      'Organization',
      'Person'
    ],
    id:             'contactPoints',
    label:          'contactPoints',
    rangeIncludes:  'ContactPoint',
    supersededBy:   'contactPoint',
    type:           'Property'
  },
  contactType:                      {
    description:    'A person or organization can have different contact points, for different purposes. For example, a sales contact point, a PR contact point and so on. This property is used to specify the kind of contact point.',
    domainIncludes: 'ContactPoint',
    id:             'contactType',
    label:          'contactType',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  containedIn:                      {
    description:    'The basic containment relation between a place and one that contains it.',
    domainIncludes: 'Place',
    id:             'containedIn',
    label:          'containedIn',
    rangeIncludes:  'Place',
    supersededBy:   'containedInPlace',
    type:           'Property'
  },
  containedInPlace:                 {
    description:    'The basic containment relation between a place and one that contains it.',
    domainIncludes: 'Place',
    id:             'containedInPlace',
    inverseOf:      'containsPlace',
    label:          'containedInPlace',
    rangeIncludes:  'Place',
    type:           'Property'
  },
  containsPlace:                    {
    description:    'The basic containment relation between a place and another that it contains.',
    domainIncludes: 'Place',
    id:             'containsPlace',
    inverseOf:      'containedInPlace',
    label:          'containsPlace',
    rangeIncludes:  'Place',
    type:           'Property'
  },
  containsSeason:                   {
    description:    'A season that is part of the media series.',
    domainIncludes: [
      'VideoGameSeries',
      'RadioSeries',
      'TVSeries'
    ],
    id:             'containsSeason',
    label:          'containsSeason',
    rangeIncludes:  'CreativeWorkSeason',
    subPropertyOf:  'hasPart',
    type:           'Property'
  },
  contentLocation:                  {
    description:    'The location depicted or described in the content. For example, the location in a photograph or painting.',
    domainIncludes: 'CreativeWork',
    id:             'contentLocation',
    label:          'contentLocation',
    rangeIncludes:  'Place',
    type:           'Property'
  },
  contentRating:                    {
    description:    'Official rating of a piece of content&#x2014;for example,\'MPAA PG-13\'.',
    domainIncludes: 'CreativeWork',
    id:             'contentRating',
    label:          'contentRating',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  contentSize:                      {
    description:    'File size in (mega/kilo) bytes.',
    domainIncludes: 'MediaObject',
    id:             'contentSize',
    label:          'contentSize',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  contentType:                      {
    description:    'The supported content type(s) for an EntryPoint response.',
    domainIncludes: 'EntryPoint',
    id:             'contentType',
    label:          'contentType',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  contentUrl:                       {
    description:    'Actual bytes of the media object, for example the image file or video file.',
    domainIncludes: 'MediaObject',
    id:             'contentUrl',
    label:          'contentUrl',
    rangeIncludes:  'URL',
    type:           'Property'
  },
  context:                          {
    APIReference:                     '<http://schema.org/APIReference>',
    AboutPage:                        '<http://schema.org/AboutPage>',
    AcceptAction:                     '<http://schema.org/AcceptAction>',
    Accommodation:                    '<http://schema.org/Accommodation>',
    AccountingService:                '<http://schema.org/AccountingService>',
    AchieveAction:                    '<http://schema.org/AchieveAction>',
    Action:                           '<http://schema.org/Action>',
    ActionStatusType:                 '<http://schema.org/ActionStatusType>',
    ActivateAction:                   '<http://schema.org/ActivateAction>',
    ActiveActionStatus:               '<http://schema.org/ActiveActionStatus>',
    AddAction:                        '<http://schema.org/AddAction>',
    AdministrativeArea:               '<http://schema.org/AdministrativeArea>',
    AdultEntertainment:               '<http://schema.org/AdultEntertainment>',
    AggregateOffer:                   '<http://schema.org/AggregateOffer>',
    AggregateRating:                  '<http://schema.org/AggregateRating>',
    AgreeAction:                      '<http://schema.org/AgreeAction>',
    Airline:                          '<http://schema.org/Airline>',
    Airport:                          '<http://schema.org/Airport>',
    AlbumRelease:                     '<http://schema.org/AlbumRelease>',
    AlignmentObject:                  '<http://schema.org/AlignmentObject>',
    AllWheelDriveConfiguration:       '<http://schema.org/AllWheelDriveConfiguration>',
    AllocateAction:                   '<http://schema.org/AllocateAction>',
    AmusementPark:                    '<http://schema.org/AmusementPark>',
    AnimalShelter:                    '<http://schema.org/AnimalShelter>',
    Answer:                           '<http://schema.org/Answer>',
    Apartment:                        '<http://schema.org/Apartment>',
    ApartmentComplex:                 '<http://schema.org/ApartmentComplex>',
    AppendAction:                     '<http://schema.org/AppendAction>',
    ApplyAction:                      '<http://schema.org/ApplyAction>',
    Aquarium:                         '<http://schema.org/Aquarium>',
    ArriveAction:                     '<http://schema.org/ArriveAction>',
    ArtGallery:                       '<http://schema.org/ArtGallery>',
    Article:                          '<http://schema.org/Article>',
    AskAction:                        '<http://schema.org/AskAction>',
    AssessAction:                     '<http://schema.org/AssessAction>',
    AssignAction:                     '<http://schema.org/AssignAction>',
    Attorney:                         '<http://schema.org/Attorney>',
    Audience:                         '<http://schema.org/Audience>',
    AudioObject:                      '<http://schema.org/AudioObject>',
    AudiobookFormat:                  '<http://schema.org/AudiobookFormat>',
    AuthorizeAction:                  '<http://schema.org/AuthorizeAction>',
    AutoBodyShop:                     '<http://schema.org/AutoBodyShop>',
    AutoDealer:                       '<http://schema.org/AutoDealer>',
    AutoPartsStore:                   '<http://schema.org/AutoPartsStore>',
    AutoRental:                       '<http://schema.org/AutoRental>',
    AutoRepair:                       '<http://schema.org/AutoRepair>',
    AutoWash:                         '<http://schema.org/AutoWash>',
    AutomatedTeller:                  '<http://schema.org/AutomatedTeller>',
    AutomotiveBusiness:               '<http://schema.org/AutomotiveBusiness>',
    Bakery:                           '<http://schema.org/Bakery>',
    BankAccount:                      '<http://schema.org/BankAccount>',
    BankOrCreditUnion:                '<http://schema.org/BankOrCreditUnion>',
    BarOrPub:                         '<http://schema.org/BarOrPub>',
    Barcode:                          '<http://schema.org/Barcode>',
    BasicContainer:                   '<http://www.w3.org/ns/ldp#BasicContainer>',
    Beach:                            '<http://schema.org/Beach>',
    BeautySalon:                      '<http://schema.org/BeautySalon>',
    BedAndBreakfast:                  '<http://schema.org/BedAndBreakfast>',
    BedDetails:                       '<http://schema.org/BedDetails>',
    BefriendAction:                   '<http://schema.org/BefriendAction>',
    BikeStore:                        '<http://schema.org/BikeStore>',
    Blog:                             '<http://schema.org/Blog>',
    BlogPosting:                      '<http://schema.org/BlogPosting>',
    BoardingPolicyType:               '<http://schema.org/BoardingPolicyType>',
    BodyOfWater:                      '<http://schema.org/BodyOfWater>',
    Book:                             '<http://schema.org/Book>',
    BookFormatType:                   '<http://schema.org/BookFormatType>',
    BookSeries:                       '<http://schema.org/BookSeries>',
    BookStore:                        '<http://schema.org/BookStore>',
    BookmarkAction:                   '<http://schema.org/BookmarkAction>',
    Boolean:                          '<http://schema.org/Boolean>',
    BorrowAction:                     '<http://schema.org/BorrowAction>',
    BowlingAlley:                     '<http://schema.org/BowlingAlley>',
    Brand:                            '<http://schema.org/Brand>',
    BreadcrumbList:                   '<http://schema.org/BreadcrumbList>',
    Brewery:                          '<http://schema.org/Brewery>',
    Bridge:                           '<http://schema.org/Bridge>',
    BroadcastChannel:                 '<http://schema.org/BroadcastChannel>',
    BroadcastEvent:                   '<http://schema.org/BroadcastEvent>',
    BroadcastRelease:                 '<http://schema.org/BroadcastRelease>',
    BroadcastService:                 '<http://schema.org/BroadcastService>',
    BuddhistTemple:                   '<http://schema.org/BuddhistTemple>',
    BusReservation:                   '<http://schema.org/BusReservation>',
    BusStation:                       '<http://schema.org/BusStation>',
    BusStop:                          '<http://schema.org/BusStop>',
    BusTrip:                          '<http://schema.org/BusTrip>',
    BusinessAudience:                 '<http://schema.org/BusinessAudience>',
    BusinessEntityType:               '<http://schema.org/BusinessEntityType>',
    BusinessEvent:                    '<http://schema.org/BusinessEvent>',
    BusinessFunction:                 '<http://schema.org/BusinessFunction>',
    BuyAction:                        '<http://schema.org/BuyAction>',
    CDFormat:                         '<http://schema.org/CDFormat>',
    CableOrSatelliteService:          '<http://schema.org/CableOrSatelliteService>',
    CafeOrCoffeeShop:                 '<http://schema.org/CafeOrCoffeeShop>',
    Campground:                       '<http://schema.org/Campground>',
    CampingPitch:                     '<http://schema.org/CampingPitch>',
    Canal:                            '<http://schema.org/Canal>',
    CancelAction:                     '<http://schema.org/CancelAction>',
    Car:                              '<http://schema.org/Car>',
    Casino:                           '<http://schema.org/Casino>',
    CassetteFormat:                   '<http://schema.org/CassetteFormat>',
    CatholicChurch:                   '<http://schema.org/CatholicChurch>',
    Cemetery:                         '<http://schema.org/Cemetery>',
    CheckAction:                      '<http://schema.org/CheckAction>',
    CheckInAction:                    '<http://schema.org/CheckInAction>',
    CheckOutAction:                   '<http://schema.org/CheckOutAction>',
    CheckoutPage:                     '<http://schema.org/CheckoutPage>',
    ChildCare:                        '<http://schema.org/ChildCare>',
    ChildrensEvent:                   '<http://schema.org/ChildrensEvent>',
    ChooseAction:                     '<http://schema.org/ChooseAction>',
    Church:                           '<http://schema.org/Church>',
    City:                             '<http://schema.org/City>',
    CityHall:                         '<http://schema.org/CityHall>',
    CivicStructure:                   '<http://schema.org/CivicStructure>',
    Clip:                             '<http://schema.org/Clip>',
    ClothingStore:                    '<http://schema.org/ClothingStore>',
    CoOp:                             '<http://schema.org/CoOp>',
    Code:                             '<http://schema.org/Code>',
    CollectionPage:                   '<http://schema.org/CollectionPage>',
    CollegeOrUniversity:              '<http://schema.org/CollegeOrUniversity>',
    ComedyClub:                       '<http://schema.org/ComedyClub>',
    ComedyEvent:                      '<http://schema.org/ComedyEvent>',
    Comment:                          '<http://schema.org/Comment>',
    CommentAction:                    '<http://schema.org/CommentAction>',
    CommentPermission:                '<http://schema.org/CommentPermission>',
    CommunicateAction:                '<http://schema.org/CommunicateAction>',
    CompilationAlbum:                 '<http://schema.org/CompilationAlbum>',
    CompletedActionStatus:            '<http://schema.org/CompletedActionStatus>',
    CompoundPriceSpecification:       '<http://schema.org/CompoundPriceSpecification>',
    ComputerLanguage:                 '<http://schema.org/ComputerLanguage>',
    ComputerStore:                    '<http://schema.org/ComputerStore>',
    ConfirmAction:                    '<http://schema.org/ConfirmAction>',
    ConsumeAction:                    '<http://schema.org/ConsumeAction>',
    ContactPage:                      '<http://schema.org/ContactPage>',
    ContactPoint:                     '<http://schema.org/ContactPoint>',
    ContactPointOption:               '<http://schema.org/ContactPointOption>',
    Container:                        '<http://www.w3.org/ns/ldp#Container>',
    Continent:                        '<http://schema.org/Continent>',
    ControlAction:                    '<http://schema.org/ControlAction>',
    ConvenienceStore:                 '<http://schema.org/ConvenienceStore>',
    Conversation:                     '<http://schema.org/Conversation>',
    CookAction:                       '<http://schema.org/CookAction>',
    Corporation:                      '<http://schema.org/Corporation>',
    Country:                          '<http://schema.org/Country>',
    Courthouse:                       '<http://schema.org/Courthouse>',
    CreateAction:                     '<http://schema.org/CreateAction>',
    CreativeWork:                     '<http://schema.org/CreativeWork>',
    CreativeWorkSeason:               '<http://schema.org/CreativeWorkSeason>',
    CreativeWorkSeries:               '<http://schema.org/CreativeWorkSeries>',
    CreditCard:                       '<http://schema.org/CreditCard>',
    Crematorium:                      '<http://schema.org/Crematorium>',
    CurrencyConversionService:        '<http://schema.org/CurrencyConversionService>',
    DJMixAlbum:                       '<http://schema.org/DJMixAlbum>',
    DVDFormat:                        '<http://schema.org/DVDFormat>',
    DamagedCondition:                 '<http://schema.org/DamagedCondition>',
    DanceEvent:                       '<http://schema.org/DanceEvent>',
    DanceGroup:                       '<http://schema.org/DanceGroup>',
    DataCatalog:                      '<http://schema.org/DataCatalog>',
    DataDownload:                     '<http://schema.org/DataDownload>',
    DataFeed:                         '<http://schema.org/DataFeed>',
    DataFeedItem:                     '<http://schema.org/DataFeedItem>',
    DataType:                         '<http://schema.org/DataType>',
    Dataset:                          '<http://schema.org/Dataset>',
    Date:                             '<http://schema.org/Date>',
    DateTime:                         '<http://schema.org/DateTime>',
    DatedMoneySpecification:          '<http://schema.org/DatedMoneySpecification>',
    DayOfWeek:                        '<http://schema.org/DayOfWeek>',
    DaySpa:                           '<http://schema.org/DaySpa>',
    DeactivateAction:                 '<http://schema.org/DeactivateAction>',
    DefenceEstablishment:             '<http://schema.org/DefenceEstablishment>',
    DeleteAction:                     '<http://schema.org/DeleteAction>',
    DeliveryChargeSpecification:      '<http://schema.org/DeliveryChargeSpecification>',
    DeliveryEvent:                    '<http://schema.org/DeliveryEvent>',
    DeliveryMethod:                   '<http://schema.org/DeliveryMethod>',
    Demand:                           '<http://schema.org/Demand>',
    DemoAlbum:                        '<http://schema.org/DemoAlbum>',
    Dentist:                          '<http://schema.org/Dentist>',
    DepartAction:                     '<http://schema.org/DepartAction>',
    DepartmentStore:                  '<http://schema.org/DepartmentStore>',
    DepositAccount:                   '<http://schema.org/DepositAccount>',
    DiabeticDiet:                     '<http://schema.org/DiabeticDiet>',
    DigitalAudioTapeFormat:           '<http://schema.org/DigitalAudioTapeFormat>',
    DigitalDocument:                  '<http://schema.org/DigitalDocument>',
    DigitalDocumentPermission:        '<http://schema.org/DigitalDocumentPermission>',
    DigitalDocumentPermissionType:    '<http://schema.org/DigitalDocumentPermissionType>',
    DigitalFormat:                    '<http://schema.org/DigitalFormat>',
    DisagreeAction:                   '<http://schema.org/DisagreeAction>',
    Discontinued:                     '<http://schema.org/Discontinued>',
    DiscoverAction:                   '<http://schema.org/DiscoverAction>',
    DiscussionForumPosting:           '<http://schema.org/DiscussionForumPosting>',
    DislikeAction:                    '<http://schema.org/DislikeAction>',
    Distance:                         '<http://schema.org/Distance>',
    Document:                         '<http://www.w3.org/2007/ont/link#Document>',
    DonateAction:                     '<http://schema.org/DonateAction>',
    DownloadAction:                   '<http://schema.org/DownloadAction>',
    DrawAction:                       '<http://schema.org/DrawAction>',
    DrinkAction:                      '<http://schema.org/DrinkAction>',
    DriveWheelConfigurationValue:     '<http://schema.org/DriveWheelConfigurationValue>',
    DryCleaningOrLaundry:             '<http://schema.org/DryCleaningOrLaundry>',
    Duration:                         '<http://schema.org/Duration>',
    EBook:                            '<http://schema.org/EBook>',
    EPRelease:                        '<http://schema.org/EPRelease>',
    EatAction:                        '<http://schema.org/EatAction>',
    EducationEvent:                   '<http://schema.org/EducationEvent>',
    EducationalAudience:              '<http://schema.org/EducationalAudience>',
    EducationalOrganization:          '<http://schema.org/EducationalOrganization>',
    Electrician:                      '<http://schema.org/Electrician>',
    ElectronicsStore:                 '<http://schema.org/ElectronicsStore>',
    ElementarySchool:                 '<http://schema.org/ElementarySchool>',
    EmailMessage:                     '<http://schema.org/EmailMessage>',
    Embassy:                          '<http://schema.org/Embassy>',
    EmergencyService:                 '<http://schema.org/EmergencyService>',
    EmployeeRole:                     '<http://schema.org/EmployeeRole>',
    EmploymentAgency:                 '<http://schema.org/EmploymentAgency>',
    EndorseAction:                    '<http://schema.org/EndorseAction>',
    Energy:                           '<http://schema.org/Energy>',
    EngineSpecification:              '<http://schema.org/EngineSpecification>',
    EntertainmentBusiness:            '<http://schema.org/EntertainmentBusiness>',
    EntryPoint:                       '<http://schema.org/EntryPoint>',
    Enumeration:                      '<http://schema.org/Enumeration>',
    Episode:                          '<http://schema.org/Episode>',
    Event:                            '<http://schema.org/Event>',
    EventCancelled:                   '<http://schema.org/EventCancelled>',
    EventPostponed:                   '<http://schema.org/EventPostponed>',
    EventRescheduled:                 '<http://schema.org/EventRescheduled>',
    EventReservation:                 '<http://schema.org/EventReservation>',
    EventScheduled:                   '<http://schema.org/EventScheduled>',
    EventStatusType:                  '<http://schema.org/EventStatusType>',
    EventVenue:                       '<http://schema.org/EventVenue>',
    ExerciseAction:                   '<http://schema.org/ExerciseAction>',
    ExerciseGym:                      '<http://schema.org/ExerciseGym>',
    ExhibitionEvent:                  '<http://schema.org/ExhibitionEvent>',
    FailedActionStatus:               '<http://schema.org/FailedActionStatus>',
    False:                            '<http://schema.org/False>',
    FastFoodRestaurant:               '<http://schema.org/FastFoodRestaurant>',
    Female:                           '<http://schema.org/Female>',
    Festival:                         '<http://schema.org/Festival>',
    FilmAction:                       '<http://schema.org/FilmAction>',
    FinancialProduct:                 '<http://schema.org/FinancialProduct>',
    FinancialService:                 '<http://schema.org/FinancialService>',
    FindAction:                       '<http://schema.org/FindAction>',
    FireStation:                      '<http://schema.org/FireStation>',
    Flight:                           '<http://schema.org/Flight>',
    FlightReservation:                '<http://schema.org/FlightReservation>',
    Float:                            '<http://schema.org/Float>',
    Florist:                          '<http://schema.org/Florist>',
    FollowAction:                     '<http://schema.org/FollowAction>',
    FoodEstablishment:                '<http://schema.org/FoodEstablishment>',
    FoodEstablishmentReservation:     '<http://schema.org/FoodEstablishmentReservation>',
    FoodEvent:                        '<http://schema.org/FoodEvent>',
    FoodService:                      '<http://schema.org/FoodService>',
    FourWheelDriveConfiguration:      '<http://schema.org/FourWheelDriveConfiguration>',
    Friday:                           '<http://schema.org/Friday>',
    FrontWheelDriveConfiguration:     '<http://schema.org/FrontWheelDriveConfiguration>',
    FurnitureStore:                   '<http://schema.org/FurnitureStore>',
    Game:                             '<http://schema.org/Game>',
    GamePlayMode:                     '<http://schema.org/GamePlayMode>',
    GameServer:                       '<http://schema.org/GameServer>',
    GameServerStatus:                 '<http://schema.org/GameServerStatus>',
    GardenStore:                      '<http://schema.org/GardenStore>',
    GasStation:                       '<http://schema.org/GasStation>',
    GatedResidenceCommunity:          '<http://schema.org/GatedResidenceCommunity>',
    GenderType:                       '<http://schema.org/GenderType>',
    GeneralContractor:                '<http://schema.org/GeneralContractor>',
    GeoCircle:                        '<http://schema.org/GeoCircle>',
    GeoCoordinates:                   '<http://schema.org/GeoCoordinates>',
    GeoShape:                         '<http://schema.org/GeoShape>',
    GiveAction:                       '<http://schema.org/GiveAction>',
    GlutenFreeDiet:                   '<http://schema.org/GlutenFreeDiet>',
    GolfCourse:                       '<http://schema.org/GolfCourse>',
    GovernmentBuilding:               '<http://schema.org/GovernmentBuilding>',
    GovernmentOffice:                 '<http://schema.org/GovernmentOffice>',
    GovernmentOrganization:           '<http://schema.org/GovernmentOrganization>',
    GovernmentPermit:                 '<http://schema.org/GovernmentPermit>',
    GovernmentService:                '<http://schema.org/GovernmentService>',
    GroceryStore:                     '<http://schema.org/GroceryStore>',
    GroupBoardingPolicy:              '<http://schema.org/GroupBoardingPolicy>',
    HVACBusiness:                     '<http://schema.org/HVACBusiness>',
    HairSalon:                        '<http://schema.org/HairSalon>',
    HalalDiet:                        '<http://schema.org/HalalDiet>',
    Hardcover:                        '<http://schema.org/Hardcover>',
    HardwareStore:                    '<http://schema.org/HardwareStore>',
    HealthAndBeautyBusiness:          '<http://schema.org/HealthAndBeautyBusiness>',
    HealthClub:                       '<http://schema.org/HealthClub>',
    HearingImpairedSupported:         '<http://schema.org/HearingImpairedSupported>',
    HighSchool:                       '<http://schema.org/HighSchool>',
    HinduDiet:                        '<http://schema.org/HinduDiet>',
    HinduTemple:                      '<http://schema.org/HinduTemple>',
    HobbyShop:                        '<http://schema.org/HobbyShop>',
    HomeAndConstructionBusiness:      '<http://schema.org/HomeAndConstructionBusiness>',
    HomeGoodsStore:                   '<http://schema.org/HomeGoodsStore>',
    Hospital:                         '<http://schema.org/Hospital>',
    Hostel:                           '<http://schema.org/Hostel>',
    Hotel:                            '<http://schema.org/Hotel>',
    HotelRoom:                        '<http://schema.org/HotelRoom>',
    House:                            '<http://schema.org/House>',
    HousePainter:                     '<http://schema.org/HousePainter>',
    IceCreamShop:                     '<http://schema.org/IceCreamShop>',
    IgnoreAction:                     '<http://schema.org/IgnoreAction>',
    ImageGallery:                     '<http://schema.org/ImageGallery>',
    ImageObject:                      '<http://schema.org/ImageObject>',
    InStock:                          '<http://schema.org/InStock>',
    InStoreOnly:                      '<http://schema.org/InStoreOnly>',
    IndividualProduct:                '<http://schema.org/IndividualProduct>',
    InformAction:                     '<http://schema.org/InformAction>',
    InsertAction:                     '<http://schema.org/InsertAction>',
    InstallAction:                    '<http://schema.org/InstallAction>',
    InsuranceAgency:                  '<http://schema.org/InsuranceAgency>',
    Intangible:                       '<http://schema.org/Intangible>',
    Integer:                          '<http://schema.org/Integer>',
    InteractAction:                   '<http://schema.org/InteractAction>',
    InteractionCounter:               '<http://schema.org/InteractionCounter>',
    InternetCafe:                     '<http://schema.org/InternetCafe>',
    InvestmentOrDeposit:              '<http://schema.org/InvestmentOrDeposit>',
    InviteAction:                     '<http://schema.org/InviteAction>',
    Invoice:                          '<http://schema.org/Invoice>',
    ItemAvailability:                 '<http://schema.org/ItemAvailability>',
    ItemList:                         '<http://schema.org/ItemList>',
    ItemListOrderAscending:           '<http://schema.org/ItemListOrderAscending>',
    ItemListOrderDescending:          '<http://schema.org/ItemListOrderDescending>',
    ItemListOrderType:                '<http://schema.org/ItemListOrderType>',
    ItemListUnordered:                '<http://schema.org/ItemListUnordered>',
    ItemPage:                         '<http://schema.org/ItemPage>',
    JewelryStore:                     '<http://schema.org/JewelryStore>',
    JobPosting:                       '<http://schema.org/JobPosting>',
    JoinAction:                       '<http://schema.org/JoinAction>',
    KosherDiet:                       '<http://schema.org/KosherDiet>',
    LakeBodyOfWater:                  '<http://schema.org/LakeBodyOfWater>',
    Landform:                         '<http://schema.org/Landform>',
    LandmarksOrHistoricalBuildings:   '<http://schema.org/LandmarksOrHistoricalBuildings>',
    Language:                         '<http://schema.org/Language>',
    LaserDiscFormat:                  '<http://schema.org/LaserDiscFormat>',
    LeaveAction:                      '<http://schema.org/LeaveAction>',
    LeftHandDriving:                  '<http://schema.org/LeftHandDriving>',
    LegalService:                     '<http://schema.org/LegalService>',
    LegislativeBuilding:              '<http://schema.org/LegislativeBuilding>',
    LendAction:                       '<http://schema.org/LendAction>',
    Library:                          '<http://schema.org/Library>',
    LikeAction:                       '<http://schema.org/LikeAction>',
    LimitedAvailability:              '<http://schema.org/LimitedAvailability>',
    LiquorStore:                      '<http://schema.org/LiquorStore>',
    ListItem:                         '<http://schema.org/ListItem>',
    ListenAction:                     '<http://schema.org/ListenAction>',
    LiteraryEvent:                    '<http://schema.org/LiteraryEvent>',
    LiveAlbum:                        '<http://schema.org/LiveAlbum>',
    LiveBlogPosting:                  '<http://schema.org/LiveBlogPosting>',
    LoanOrCredit:                     '<http://schema.org/LoanOrCredit>',
    LocalBusiness:                    '<http://schema.org/LocalBusiness>',
    LocationFeatureSpecification:     '<http://schema.org/LocationFeatureSpecification>',
    LockerDelivery:                   '<http://schema.org/LockerDelivery>',
    Locksmith:                        '<http://schema.org/Locksmith>',
    LodgingBusiness:                  '<http://schema.org/LodgingBusiness>',
    LodgingReservation:               '<http://schema.org/LodgingReservation>',
    LoseAction:                       '<http://schema.org/LoseAction>',
    LowCalorieDiet:                   '<http://schema.org/LowCalorieDiet>',
    LowFatDiet:                       '<http://schema.org/LowFatDiet>',
    LowLactoseDiet:                   '<http://schema.org/LowLactoseDiet>',
    LowSaltDiet:                      '<http://schema.org/LowSaltDiet>',
    Male:                             '<http://schema.org/Male>',
    Map:                              '<http://schema.org/Map>',
    MapCategoryType:                  '<http://schema.org/MapCategoryType>',
    MarryAction:                      '<http://schema.org/MarryAction>',
    Mass:                             '<http://schema.org/Mass>',
    MediaObject:                      '<http://schema.org/MediaObject>',
    MedicalOrganization:              '<http://schema.org/MedicalOrganization>',
    MeetingRoom:                      '<http://schema.org/MeetingRoom>',
    MensClothingStore:                '<http://schema.org/MensClothingStore>',
    Message:                          '<http://schema.org/Message>',
    MiddleSchool:                     '<http://schema.org/MiddleSchool>',
    MixtapeAlbum:                     '<http://schema.org/MixtapeAlbum>',
    MobileApplication:                '<http://schema.org/MobileApplication>',
    MobilePhoneStore:                 '<http://schema.org/MobilePhoneStore>',
    Monday:                           '<http://schema.org/Monday>',
    MonetaryAmount:                   '<http://schema.org/MonetaryAmount>',
    Mosque:                           '<http://schema.org/Mosque>',
    Motel:                            '<http://schema.org/Motel>',
    MotorcycleDealer:                 '<http://schema.org/MotorcycleDealer>',
    MotorcycleRepair:                 '<http://schema.org/MotorcycleRepair>',
    Mountain:                         '<http://schema.org/Mountain>',
    MoveAction:                       '<http://schema.org/MoveAction>',
    Movie:                            '<http://schema.org/Movie>',
    MovieClip:                        '<http://schema.org/MovieClip>',
    MovieRentalStore:                 '<http://schema.org/MovieRentalStore>',
    MovieSeries:                      '<http://schema.org/MovieSeries>',
    MovieTheater:                     '<http://schema.org/MovieTheater>',
    MovingCompany:                    '<http://schema.org/MovingCompany>',
    MultiPlayer:                      '<http://schema.org/MultiPlayer>',
    Museum:                           '<http://schema.org/Museum>',
    MusicAlbum:                       '<http://schema.org/MusicAlbum>',
    MusicAlbumProductionType:         '<http://schema.org/MusicAlbumProductionType>',
    MusicAlbumReleaseType:            '<http://schema.org/MusicAlbumReleaseType>',
    MusicComposition:                 '<http://schema.org/MusicComposition>',
    MusicEvent:                       '<http://schema.org/MusicEvent>',
    MusicGroup:                       '<http://schema.org/MusicGroup>',
    MusicPlaylist:                    '<http://schema.org/MusicPlaylist>',
    MusicRecording:                   '<http://schema.org/MusicRecording>',
    MusicRelease:                     '<http://schema.org/MusicRelease>',
    MusicReleaseFormatType:           '<http://schema.org/MusicReleaseFormatType>',
    MusicStore:                       '<http://schema.org/MusicStore>',
    MusicVenue:                       '<http://schema.org/MusicVenue>',
    MusicVideoObject:                 '<http://schema.org/MusicVideoObject>',
    NGO:                              '<http://schema.org/NGO>',
    NailSalon:                        '<http://schema.org/NailSalon>',
    NewCondition:                     '<http://schema.org/NewCondition>',
    NewsArticle:                      '<http://schema.org/NewsArticle>',
    NightClub:                        '<http://schema.org/NightClub>',
    Notary:                           '<http://schema.org/Notary>',
    NoteDigitalDocument:              '<http://schema.org/NoteDigitalDocument>',
    Number:                           '<http://schema.org/Number>',
    NutritionInformation:             '<http://schema.org/NutritionInformation>',
    OceanBodyOfWater:                 '<http://schema.org/OceanBodyOfWater>',
    Offer:                            '<http://schema.org/Offer>',
    OfferCatalog:                     '<http://schema.org/OfferCatalog>',
    OfferItemCondition:               '<http://schema.org/OfferItemCondition>',
    OfficeEquipmentStore:             '<http://schema.org/OfficeEquipmentStore>',
    OfflinePermanently:               '<http://schema.org/OfflinePermanently>',
    OfflineTemporarily:               '<http://schema.org/OfflineTemporarily>',
    OnDemandEvent:                    '<http://schema.org/OnDemandEvent>',
    OnSitePickup:                     '<http://schema.org/OnSitePickup>',
    Online:                           '<http://schema.org/Online>',
    OnlineFull:                       '<http://schema.org/OnlineFull>',
    OnlineOnly:                       '<http://schema.org/OnlineOnly>',
    OpeningHoursSpecification:        '<http://schema.org/OpeningHoursSpecification>',
    Order:                            '<http://schema.org/Order>',
    OrderAction:                      '<http://schema.org/OrderAction>',
    OrderCancelled:                   '<http://schema.org/OrderCancelled>',
    OrderDelivered:                   '<http://schema.org/OrderDelivered>',
    OrderInTransit:                   '<http://schema.org/OrderInTransit>',
    OrderItem:                        '<http://schema.org/OrderItem>',
    OrderPaymentDue:                  '<http://schema.org/OrderPaymentDue>',
    OrderPickupAvailable:             '<http://schema.org/OrderPickupAvailable>',
    OrderProblem:                     '<http://schema.org/OrderProblem>',
    OrderProcessing:                  '<http://schema.org/OrderProcessing>',
    OrderReturned:                    '<http://schema.org/OrderReturned>',
    OrderStatus:                      '<http://schema.org/OrderStatus>',
    Organization:                     '<http://schema.org/Organization>',
    OrganizationRole:                 '<http://schema.org/OrganizationRole>',
    OrganizeAction:                   '<http://schema.org/OrganizeAction>',
    OutOfStock:                       '<http://schema.org/OutOfStock>',
    OutletStore:                      '<http://schema.org/OutletStore>',
    OwnershipInfo:                    '<http://schema.org/OwnershipInfo>',
    PaintAction:                      '<http://schema.org/PaintAction>',
    Painting:                         '<http://schema.org/Painting>',
    Paperback:                        '<http://schema.org/Paperback>',
    ParcelDelivery:                   '<http://schema.org/ParcelDelivery>',
    ParcelService:                    '<http://schema.org/ParcelService>',
    ParentAudience:                   '<http://schema.org/ParentAudience>',
    Park:                             '<http://schema.org/Park>',
    ParkingFacility:                  '<http://schema.org/ParkingFacility>',
    ParkingMap:                       '<http://schema.org/ParkingMap>',
    PawnShop:                         '<http://schema.org/PawnShop>',
    PayAction:                        '<http://schema.org/PayAction>',
    PaymentAutomaticallyApplied:      '<http://schema.org/PaymentAutomaticallyApplied>',
    PaymentCard:                      '<http://schema.org/PaymentCard>',
    PaymentChargeSpecification:       '<http://schema.org/PaymentChargeSpecification>',
    PaymentComplete:                  '<http://schema.org/PaymentComplete>',
    PaymentDeclined:                  '<http://schema.org/PaymentDeclined>',
    PaymentDue:                       '<http://schema.org/PaymentDue>',
    PaymentMethod:                    '<http://schema.org/PaymentMethod>',
    PaymentPastDue:                   '<http://schema.org/PaymentPastDue>',
    PaymentService:                   '<http://schema.org/PaymentService>',
    PaymentStatusType:                '<http://schema.org/PaymentStatusType>',
    PeopleAudience:                   '<http://schema.org/PeopleAudience>',
    PerformAction:                    '<http://schema.org/PerformAction>',
    PerformanceRole:                  '<http://schema.org/PerformanceRole>',
    PerformingArtsTheater:            '<http://schema.org/PerformingArtsTheater>',
    PerformingGroup:                  '<http://schema.org/PerformingGroup>',
    Periodical:                       '<http://schema.org/Periodical>',
    Permit:                           '<http://schema.org/Permit>',
    Person:                           '<http://schema.org/Person>',
    PetStore:                         '<http://schema.org/PetStore>',
    Pharmacy:                         '<http://schema.org/Pharmacy>',
    Photograph:                       '<http://schema.org/Photograph>',
    PhotographAction:                 '<http://schema.org/PhotographAction>',
    Physician:                        '<http://schema.org/Physician>',
    Place:                            '<http://schema.org/Place>',
    PlaceOfWorship:                   '<http://schema.org/PlaceOfWorship>',
    PlanAction:                       '<http://schema.org/PlanAction>',
    PlayAction:                       '<http://schema.org/PlayAction>',
    Playground:                       '<http://schema.org/Playground>',
    Plumber:                          '<http://schema.org/Plumber>',
    PoliceStation:                    '<http://schema.org/PoliceStation>',
    Pond:                             '<http://schema.org/Pond>',
    PostOffice:                       '<http://schema.org/PostOffice>',
    PostalAddress:                    '<http://schema.org/PostalAddress>',
    PotentialActionStatus:            '<http://schema.org/PotentialActionStatus>',
    PreOrder:                         '<http://schema.org/PreOrder>',
    PreSale:                          '<http://schema.org/PreSale>',
    PrependAction:                    '<http://schema.org/PrependAction>',
    Preschool:                        '<http://schema.org/Preschool>',
    PresentationDigitalDocument:      '<http://schema.org/PresentationDigitalDocument>',
    PriceSpecification:               '<http://schema.org/PriceSpecification>',
    Product:                          '<http://schema.org/Product>',
    ProductModel:                     '<http://schema.org/ProductModel>',
    ProfessionalService:              '<http://schema.org/ProfessionalService>',
    ProfilePage:                      '<http://schema.org/ProfilePage>',
    ProgramMembership:                '<http://schema.org/ProgramMembership>',
    Property:                         '<http://www.w3.org/1999/02/22-rdf-syntax-ns#Property>',
    PropertyValue:                    '<http://schema.org/PropertyValue>',
    PropertyValueSpecification:       '<http://schema.org/PropertyValueSpecification>',
    PublicHolidays:                   '<http://schema.org/PublicHolidays>',
    PublicSwimmingPool:               '<http://schema.org/PublicSwimmingPool>',
    PublicationEvent:                 '<http://schema.org/PublicationEvent>',
    PublicationIssue:                 '<http://schema.org/PublicationIssue>',
    PublicationVolume:                '<http://schema.org/PublicationVolume>',
    QAPage:                           '<http://schema.org/QAPage>',
    QualitativeValue:                 '<http://schema.org/QualitativeValue>',
    QuantitativeValue:                '<http://schema.org/QuantitativeValue>',
    Quantity:                         '<http://schema.org/Quantity>',
    Question:                         '<http://schema.org/Question>',
    QuoteAction:                      '<http://schema.org/QuoteAction>',
    RDFDocument:                      '<http://www.w3.org/2007/ont/link#RDFDocument>',
    RVPark:                           '<http://schema.org/RVPark>',
    RadioChannel:                     '<http://schema.org/RadioChannel>',
    RadioClip:                        '<http://schema.org/RadioClip>',
    RadioEpisode:                     '<http://schema.org/RadioEpisode>',
    RadioSeason:                      '<http://schema.org/RadioSeason>',
    RadioSeries:                      '<http://schema.org/RadioSeries>',
    RadioStation:                     '<http://schema.org/RadioStation>',
    Rating:                           '<http://schema.org/Rating>',
    ReactAction:                      '<http://schema.org/ReactAction>',
    ReadAction:                       '<http://schema.org/ReadAction>',
    ReadPermission:                   '<http://schema.org/ReadPermission>',
    RealEstateAgent:                  '<http://schema.org/RealEstateAgent>',
    RearWheelDriveConfiguration:      '<http://schema.org/RearWheelDriveConfiguration>',
    ReceiveAction:                    '<http://schema.org/ReceiveAction>',
    Recipe:                           '<http://schema.org/Recipe>',
    RecyclingCenter:                  '<http://schema.org/RecyclingCenter>',
    RefurbishedCondition:             '<http://schema.org/RefurbishedCondition>',
    RegisterAction:                   '<http://schema.org/RegisterAction>',
    RejectAction:                     '<http://schema.org/RejectAction>',
    RemixAlbum:                       '<http://schema.org/RemixAlbum>',
    RentAction:                       '<http://schema.org/RentAction>',
    RentalCarReservation:             '<http://schema.org/RentalCarReservation>',
    ReplaceAction:                    '<http://schema.org/ReplaceAction>',
    ReplyAction:                      '<http://schema.org/ReplyAction>',
    Report:                           '<http://schema.org/Report>',
    Researcher:                       '<http://schema.org/Researcher>',
    Reservation:                      '<http://schema.org/Reservation>',
    ReservationCancelled:             '<http://schema.org/ReservationCancelled>',
    ReservationConfirmed:             '<http://schema.org/ReservationConfirmed>',
    ReservationHold:                  '<http://schema.org/ReservationHold>',
    ReservationPackage:               '<http://schema.org/ReservationPackage>',
    ReservationPending:               '<http://schema.org/ReservationPending>',
    ReservationStatusType:            '<http://schema.org/ReservationStatusType>',
    ReserveAction:                    '<http://schema.org/ReserveAction>',
    Reservoir:                        '<http://schema.org/Reservoir>',
    Residence:                        '<http://schema.org/Residence>',
    Resort:                           '<http://schema.org/Resort>',
    Restaurant:                       '<http://schema.org/Restaurant>',
    RestrictedDiet:                   '<http://schema.org/RestrictedDiet>',
    ResumeAction:                     '<http://schema.org/ResumeAction>',
    ReturnAction:                     '<http://schema.org/ReturnAction>',
    Review:                           '<http://schema.org/Review>',
    ReviewAction:                     '<http://schema.org/ReviewAction>',
    RightHandDriving:                 '<http://schema.org/RightHandDriving>',
    RiverBodyOfWater:                 '<http://schema.org/RiverBodyOfWater>',
    Role:                             '<http://schema.org/Role>',
    RoofingContractor:                '<http://schema.org/RoofingContractor>',
    Room:                             '<http://schema.org/Room>',
    RsvpAction:                       '<http://schema.org/RsvpAction>',
    RsvpResponseMaybe:                '<http://schema.org/RsvpResponseMaybe>',
    RsvpResponseNo:                   '<http://schema.org/RsvpResponseNo>',
    RsvpResponseType:                 '<http://schema.org/RsvpResponseType>',
    RsvpResponseYes:                  '<http://schema.org/RsvpResponseYes>',
    SaleEvent:                        '<http://schema.org/SaleEvent>',
    Saturday:                         '<http://schema.org/Saturday>',
    ScheduleAction:                   '<http://schema.org/ScheduleAction>',
    SchemaDotOrgSources:              '<http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_DatasetClass>',
    ScholarlyArticle:                 '<http://schema.org/ScholarlyArticle>',
    School:                           '<http://schema.org/School>',
    ScreeningEvent:                   '<http://schema.org/ScreeningEvent>',
    Sculpture:                        '<http://schema.org/Sculpture>',
    SeaBodyOfWater:                   '<http://schema.org/SeaBodyOfWater>',
    SearchAction:                     '<http://schema.org/SearchAction>',
    SearchResultsPage:                '<http://schema.org/SearchResultsPage>',
    Season:                           '<http://schema.org/Season>',
    Seat:                             '<http://schema.org/Seat>',
    SeatingMap:                       '<http://schema.org/SeatingMap>',
    SelfStorage:                      '<http://schema.org/SelfStorage>',
    SellAction:                       '<http://schema.org/SellAction>',
    SendAction:                       '<http://schema.org/SendAction>',
    Series:                           '<http://schema.org/Series>',
    Service:                          '<http://schema.org/Service>',
    ServiceChannel:                   '<http://schema.org/ServiceChannel>',
    ShareAction:                      '<http://schema.org/ShareAction>',
    ShoeStore:                        '<http://schema.org/ShoeStore>',
    ShoppingCenter:                   '<http://schema.org/ShoppingCenter>',
    SingleFamilyResidence:            '<http://schema.org/SingleFamilyResidence>',
    SinglePlayer:                     '<http://schema.org/SinglePlayer>',
    SingleRelease:                    '<http://schema.org/SingleRelease>',
    SiteNavigationElement:            '<http://schema.org/SiteNavigationElement>',
    SkiResort:                        '<http://schema.org/SkiResort>',
    SocialEvent:                      '<http://schema.org/SocialEvent>',
    SocialMediaPosting:               '<http://schema.org/SocialMediaPosting>',
    SoftwareApplication:              '<http://schema.org/SoftwareApplication>',
    SoftwareSourceCode:               '<http://schema.org/SoftwareSourceCode>',
    SoldOut:                          '<http://schema.org/SoldOut>',
    SomeProducts:                     '<http://schema.org/SomeProducts>',
    SoundtrackAlbum:                  '<http://schema.org/SoundtrackAlbum>',
    Specialty:                        '<http://schema.org/Specialty>',
    SpokenWordAlbum:                  '<http://schema.org/SpokenWordAlbum>',
    SportingGoodsStore:               '<http://schema.org/SportingGoodsStore>',
    SportsActivityLocation:           '<http://schema.org/SportsActivityLocation>',
    SportsClub:                       '<http://schema.org/SportsClub>',
    SportsEvent:                      '<http://schema.org/SportsEvent>',
    SportsOrganization:               '<http://schema.org/SportsOrganization>',
    SportsTeam:                       '<http://schema.org/SportsTeam>',
    SpreadsheetDigitalDocument:       '<http://schema.org/SpreadsheetDigitalDocument>',
    StadiumOrArena:                   '<http://schema.org/StadiumOrArena>',
    State:                            '<http://schema.org/State>',
    SteeringPositionValue:            '<http://schema.org/SteeringPositionValue>',
    Store:                            '<http://schema.org/Store>',
    StructuredValue:                  '<http://schema.org/StructuredValue>',
    StudioAlbum:                      '<http://schema.org/StudioAlbum>',
    SubscribeAction:                  '<http://schema.org/SubscribeAction>',
    SubwayStation:                    '<http://schema.org/SubwayStation>',
    Suite:                            '<http://schema.org/Suite>',
    Sunday:                           '<http://schema.org/Sunday>',
    SuspendAction:                    '<http://schema.org/SuspendAction>',
    Synagogue:                        '<http://schema.org/Synagogue>',
    TVClip:                           '<http://schema.org/TVClip>',
    TVEpisode:                        '<http://schema.org/TVEpisode>',
    TVSeason:                         '<http://schema.org/TVSeason>',
    TVSeries:                         '<http://schema.org/TVSeries>',
    Table:                            '<http://schema.org/Table>',
    TakeAction:                       '<http://schema.org/TakeAction>',
    TattooParlor:                     '<http://schema.org/TattooParlor>',
    Taxi:                             '<http://schema.org/Taxi>',
    TaxiReservation:                  '<http://schema.org/TaxiReservation>',
    TaxiService:                      '<http://schema.org/TaxiService>',
    TaxiStand:                        '<http://schema.org/TaxiStand>',
    TechArticle:                      '<http://schema.org/TechArticle>',
    TelevisionChannel:                '<http://schema.org/TelevisionChannel>',
    TelevisionStation:                '<http://schema.org/TelevisionStation>',
    TennisComplex:                    '<http://schema.org/TennisComplex>',
    Text:                             '<http://schema.org/Text>',
    TextDigitalDocument:              '<http://schema.org/TextDigitalDocument>',
    TheaterEvent:                     '<http://schema.org/TheaterEvent>',
    TheaterGroup:                     '<http://schema.org/TheaterGroup>',
    Thing:                            '<http://schema.org/Thing>',
    Thursday:                         '<http://schema.org/Thursday>',
    Ticket:                           '<http://schema.org/Ticket>',
    TieAction:                        '<http://schema.org/TieAction>',
    Time:                             '<http://schema.org/Time>',
    TipAction:                        '<http://schema.org/TipAction>',
    TireShop:                         '<http://schema.org/TireShop>',
    TollFree:                         '<http://schema.org/TollFree>',
    TouristAttraction:                '<http://schema.org/TouristAttraction>',
    TouristInformationCenter:         '<http://schema.org/TouristInformationCenter>',
    ToyStore:                         '<http://schema.org/ToyStore>',
    TrackAction:                      '<http://schema.org/TrackAction>',
    TradeAction:                      '<http://schema.org/TradeAction>',
    TrainReservation:                 '<http://schema.org/TrainReservation>',
    TrainStation:                     '<http://schema.org/TrainStation>',
    TrainTrip:                        '<http://schema.org/TrainTrip>',
    TransferAction:                   '<http://schema.org/TransferAction>',
    TransitMap:                       '<http://schema.org/TransitMap>',
    TravelAction:                     '<http://schema.org/TravelAction>',
    TravelAgency:                     '<http://schema.org/TravelAgency>',
    True:                             '<http://schema.org/True>',
    Tuesday:                          '<http://schema.org/Tuesday>',
    Type:                             '<http://www.w3.org/2000/01/rdf-schema#Class>',
    TypeAndQuantityNode:              '<http://schema.org/TypeAndQuantityNode>',
    URL:                              '<http://schema.org/URL>',
    UnRegisterAction:                 '<http://schema.org/UnRegisterAction>',
    UnitPriceSpecification:           '<http://schema.org/UnitPriceSpecification>',
    UpdateAction:                     '<http://schema.org/UpdateAction>',
    UseAction:                        '<http://schema.org/UseAction>',
    UsedCondition:                    '<http://schema.org/UsedCondition>',
    UserBlocks:                       '<http://schema.org/UserBlocks>',
    UserCheckins:                     '<http://schema.org/UserCheckins>',
    UserComments:                     '<http://schema.org/UserComments>',
    UserDownloads:                    '<http://schema.org/UserDownloads>',
    UserInteraction:                  '<http://schema.org/UserInteraction>',
    UserLikes:                        '<http://schema.org/UserLikes>',
    UserPageVisits:                   '<http://schema.org/UserPageVisits>',
    UserPlays:                        '<http://schema.org/UserPlays>',
    UserPlusOnes:                     '<http://schema.org/UserPlusOnes>',
    UserTweets:                       '<http://schema.org/UserTweets>',
    VeganDiet:                        '<http://schema.org/VeganDiet>',
    VegetarianDiet:                   '<http://schema.org/VegetarianDiet>',
    Vehicle:                          '<http://schema.org/Vehicle>',
    VenueMap:                         '<http://schema.org/VenueMap>',
    VideoGallery:                     '<http://schema.org/VideoGallery>',
    VideoGame:                        '<http://schema.org/VideoGame>',
    VideoGameClip:                    '<http://schema.org/VideoGameClip>',
    VideoGameSeries:                  '<http://schema.org/VideoGameSeries>',
    VideoObject:                      '<http://schema.org/VideoObject>',
    ViewAction:                       '<http://schema.org/ViewAction>',
    VinylFormat:                      '<http://schema.org/VinylFormat>',
    VisualArtsEvent:                  '<http://schema.org/VisualArtsEvent>',
    VisualArtwork:                    '<http://schema.org/VisualArtwork>',
    Vocab:                            '<http://www.w3.org/2002/07/owl#Ontology>',
    Volcano:                          '<http://schema.org/Volcano>',
    VoteAction:                       '<http://schema.org/VoteAction>',
    WPAdBlock:                        '<http://schema.org/WPAdBlock>',
    WPFooter:                         '<http://schema.org/WPFooter>',
    WPHeader:                         '<http://schema.org/WPHeader>',
    WPSideBar:                        '<http://schema.org/WPSideBar>',
    WantAction:                       '<http://schema.org/WantAction>',
    WarrantyPromise:                  '<http://schema.org/WarrantyPromise>',
    WarrantyScope:                    '<http://schema.org/WarrantyScope>',
    WatchAction:                      '<http://schema.org/WatchAction>',
    Waterfall:                        '<http://schema.org/Waterfall>',
    WearAction:                       '<http://schema.org/WearAction>',
    WebApplication:                   '<http://schema.org/WebApplication>',
    WebPage:                          '<http://schema.org/WebPage>',
    WebPageElement:                   '<http://schema.org/WebPageElement>',
    WebSite:                          '<http://schema.org/WebSite>',
    Wednesday:                        '<http://schema.org/Wednesday>',
    WholesaleStore:                   '<http://schema.org/WholesaleStore>',
    WinAction:                        '<http://schema.org/WinAction>',
    Winery:                           '<http://schema.org/Winery>',
    WriteAction:                      '<http://schema.org/WriteAction>',
    WritePermission:                  '<http://schema.org/WritePermission>',
    ZoneBoardingPolicy:               '<http://schema.org/ZoneBoardingPolicy>',
    Zoo:                              '<http://schema.org/Zoo>',
    about:                            '<http://schema.org/about>',
    acceptedAnswer:                   '<http://schema.org/acceptedAnswer>',
    acceptedOffer:                    '<http://schema.org/acceptedOffer>',
    acceptedPaymentMethod:            '<http://schema.org/acceptedPaymentMethod>',
    acceptsReservations:              '<http://schema.org/acceptsReservations>',
    accessCode:                       '<http://schema.org/accessCode>',
    accessibilityAPI:                 '<http://schema.org/accessibilityAPI>',
    accessibilityControl:             '<http://schema.org/accessibilityControl>',
    accessibilityFeature:             '<http://schema.org/accessibilityFeature>',
    accessibilityHazard:              '<http://schema.org/accessibilityHazard>',
    accountId:                        '<http://schema.org/accountId>',
    accountablePerson:                '<http://schema.org/accountablePerson>',
    acquiredFrom:                     '<http://schema.org/acquiredFrom>',
    actionApplication:                '<http://schema.org/actionApplication>',
    actionOption:                     '<http://schema.org/actionOption>',
    actionPlatform:                   '<http://schema.org/actionPlatform>',
    actionStatus:                     '<http://schema.org/actionStatus>',
    actor:                            '<http://schema.org/actor>',
    actors:                           '<http://schema.org/actors>',
    addOn:                            '<http://schema.org/addOn>',
    additionalName:                   '<http://schema.org/additionalName>',
    additionalNumberOfGuests:         '<http://schema.org/additionalNumberOfGuests>',
    additionalProperty:               '<http://schema.org/additionalProperty>',
    additionalType:                   '<http://schema.org/additionalType>',
    address:                          '<http://schema.org/address>',
    addressCountry:                   '<http://schema.org/addressCountry>',
    addressLocality:                  '<http://schema.org/addressLocality>',
    addressRegion:                    '<http://schema.org/addressRegion>',
    advanceBookingRequirement:        '<http://schema.org/advanceBookingRequirement>',
    affiliation:                      '<http://schema.org/affiliation>',
    agent:                            '<http://schema.org/agent>',
    aggregateRating:                  '<http://schema.org/aggregateRating>',
    aircraft:                         '<http://schema.org/aircraft>',
    album:                            '<http://schema.org/album>',
    albumProductionType:              '<http://schema.org/albumProductionType>',
    albumRelease:                     '<http://schema.org/albumRelease>',
    albumReleaseType:                 '<http://schema.org/albumReleaseType>',
    albums:                           '<http://schema.org/albums>',
    alignmentType:                    '<http://schema.org/alignmentType>',
    allValuesFrom:                    '<http://www.w3.org/2002/07/owl#allValuesFrom>',
    alternateName:                    '<http://schema.org/alternateName>',
    alternativeHeadline:              '<http://schema.org/alternativeHeadline>',
    alumni:                           '<http://schema.org/alumni>',
    alumniOf:                         '<http://schema.org/alumniOf>',
    amenityFeature:                   '<http://schema.org/amenityFeature>',
    amount:                           '<http://schema.org/amount>',
    amountOfThisGood:                 '<http://schema.org/amountOfThisGood>',
    annualPercentageRate:             '<http://schema.org/annualPercentageRate>',
    answerCount:                      '<http://schema.org/answerCount>',
    application:                      '<http://schema.org/application>',
    applicationCategory:              '<http://schema.org/applicationCategory>',
    applicationSubCategory:           '<http://schema.org/applicationSubCategory>',
    applicationSuite:                 '<http://schema.org/applicationSuite>',
    appliesToDeliveryMethod:          '<http://schema.org/appliesToDeliveryMethod>',
    appliesToPaymentMethod:           '<http://schema.org/appliesToPaymentMethod>',
    area:                             '<http://schema.org/area>',
    areaServed:                       '<http://schema.org/areaServed>',
    arrivalAirport:                   '<http://schema.org/arrivalAirport>',
    arrivalBusStop:                   '<http://schema.org/arrivalBusStop>',
    arrivalGate:                      '<http://schema.org/arrivalGate>',
    arrivalPlatform:                  '<http://schema.org/arrivalPlatform>',
    arrivalStation:                   '<http://schema.org/arrivalStation>',
    arrivalTerminal:                  '<http://schema.org/arrivalTerminal>',
    arrivalTime:                      '<http://schema.org/arrivalTime>',
    artEdition:                       '<http://schema.org/artEdition>',
    artMedium:                        '<http://schema.org/artMedium>',
    artform:                          '<http://schema.org/artform>',
    articleBody:                      '<http://schema.org/articleBody>',
    articleSection:                   '<http://schema.org/articleSection>',
    artworkSurface:                   '<http://schema.org/artworkSurface>',
    assembly:                         '<http://schema.org/assembly>',
    assemblyVersion:                  '<http://schema.org/assemblyVersion>',
    associatedArticle:                '<http://schema.org/associatedArticle>',
    associatedMedia:                  '<http://schema.org/associatedMedia>',
    athlete:                          '<http://schema.org/athlete>',
    attendee:                         '<http://schema.org/attendee>',
    attendees:                        '<http://schema.org/attendees>',
    audience:                         '<http://schema.org/audience>',
    audienceType:                     '<http://schema.org/audienceType>',
    audio:                            '<http://schema.org/audio>',
    author:                           '<http://schema.org/author>',
    availability:                     '<http://schema.org/availability>',
    availabilityEnds:                 '<http://schema.org/availabilityEnds>',
    availabilityStarts:               '<http://schema.org/availabilityStarts>',
    availableAtOrFrom:                '<http://schema.org/availableAtOrFrom>',
    availableChannel:                 '<http://schema.org/availableChannel>',
    availableDeliveryMethod:          '<http://schema.org/availableDeliveryMethod>',
    availableFrom:                    '<http://schema.org/availableFrom>',
    availableLanguage:                '<http://schema.org/availableLanguage>',
    availableOnDevice:                '<http://schema.org/availableOnDevice>',
    availableThrough:                 '<http://schema.org/availableThrough>',
    award:                            '<http://schema.org/award>',
    awards:                           '<http://schema.org/awards>',
    awayTeam:                         '<http://schema.org/awayTeam>',
    baseSalary:                       '<http://schema.org/baseSalary>',
    bed:                              '<http://schema.org/bed>',
    benefits:                         '<http://schema.org/benefits>',
    bestRating:                       '<http://schema.org/bestRating>',
    billingAddress:                   '<http://schema.org/billingAddress>',
    billingIncrement:                 '<http://schema.org/billingIncrement>',
    billingPeriod:                    '<http://schema.org/billingPeriod>',
    birthDate:                        '<http://schema.org/birthDate>',
    birthPlace:                       '<http://schema.org/birthPlace>',
    bitrate:                          '<http://schema.org/bitrate>',
    blogPost:                         '<http://schema.org/blogPost>',
    blogPosts:                        '<http://schema.org/blogPosts>',
    boardingGroup:                    '<http://schema.org/boardingGroup>',
    boardingPolicy:                   '<http://schema.org/boardingPolicy>',
    bookEdition:                      '<http://schema.org/bookEdition>',
    bookFormat:                       '<http://schema.org/bookFormat>',
    bookingAgent:                     '<http://schema.org/bookingAgent>',
    bookingTime:                      '<http://schema.org/bookingTime>',
    borrower:                         '<http://schema.org/borrower>',
    box:                              '<http://schema.org/box>',
    branchCode:                       '<http://schema.org/branchCode>',
    branchOf:                         '<http://schema.org/branchOf>',
    brand:                            '<http://schema.org/brand>',
    breadcrumb:                       '<http://schema.org/breadcrumb>',
    broadcastAffiliateOf:             '<http://schema.org/broadcastAffiliateOf>',
    broadcastChannelId:               '<http://schema.org/broadcastChannelId>',
    broadcastDisplayName:             '<http://schema.org/broadcastDisplayName>',
    broadcastOfEvent:                 '<http://schema.org/broadcastOfEvent>',
    broadcastServiceTier:             '<http://schema.org/broadcastServiceTier>',
    broadcastTimezone:                '<http://schema.org/broadcastTimezone>',
    broadcaster:                      '<http://schema.org/broadcaster>',
    broker:                           '<http://schema.org/broker>',
    browserRequirements:              '<http://schema.org/browserRequirements>',
    busName:                          '<http://schema.org/busName>',
    busNumber:                        '<http://schema.org/busNumber>',
    businessFunction:                 '<http://schema.org/businessFunction>',
    buyer:                            '<http://schema.org/buyer>',
    byArtist:                         '<http://schema.org/byArtist>',
    bytes:                            '<http://www.w3.org/ns/posix/stat#size>',
    calories:                         '<http://schema.org/calories>',
    candidate:                        '<http://schema.org/candidate>',
    caption:                          '<http://schema.org/caption>',
    carbohydrateContent:              '<http://schema.org/carbohydrateContent>',
    cargoVolume:                      '<http://schema.org/cargoVolume>',
    carrier:                          '<http://schema.org/carrier>',
    carrierRequirements:              '<http://schema.org/carrierRequirements>',
    catalog:                          '<http://schema.org/catalog>',
    catalogNumber:                    '<http://schema.org/catalogNumber>',
    category:                         '<http://schema.org/category>',
    character:                        '<http://schema.org/character>',
    characterAttribute:               '<http://schema.org/characterAttribute>',
    characterName:                    '<http://schema.org/characterName>',
    cheatCode:                        '<http://schema.org/cheatCode>',
    checkinTime:                      '<http://schema.org/checkinTime>',
    checkoutTime:                     '<http://schema.org/checkoutTime>',
    childMaxAge:                      '<http://schema.org/childMaxAge>',
    childMinAge:                      '<http://schema.org/childMinAge>',
    children:                         '<http://schema.org/children>',
    cholesterolContent:               '<http://schema.org/cholesterolContent>',
    circle:                           '<http://schema.org/circle>',
    citation:                         '<http://schema.org/citation>',
    clipNumber:                       '<http://schema.org/clipNumber>',
    closes:                           '<http://schema.org/closes>',
    coach:                            '<http://schema.org/coach>',
    codeRepository:                   '<http://schema.org/codeRepository>',
    codeSampleType:                   '<http://schema.org/codeSampleType>',
    colleague:                        '<http://schema.org/colleague>',
    colleagues:                       '<http://schema.org/colleagues>',
    collection:                       '<http://schema.org/collection>',
    color:                            '<http://schema.org/color>',
    comment:                          '<http://schema.org/comment>',
    commentCount:                     '<http://schema.org/commentCount>',
    commentText:                      '<http://schema.org/commentText>',
    commentTime:                      '<http://schema.org/commentTime>',
    competitor:                       '<http://schema.org/competitor>',
    composer:                         '<http://schema.org/composer>',
    confirmationNumber:               '<http://schema.org/confirmationNumber>',
    contactOption:                    '<http://schema.org/contactOption>',
    contactPoint:                     '<http://schema.org/contactPoint>',
    contactPoints:                    '<http://schema.org/contactPoints>',
    contactType:                      '<http://schema.org/contactType>',
    containedIn:                      '<http://schema.org/containedIn>',
    containedInPlace:                 '<http://schema.org/containedInPlace>',
    contains:                         '<http://www.w3.org/ns/ldp#contains>',
    containsPlace:                    '<http://schema.org/containsPlace>',
    containsSeason:                   '<http://schema.org/containsSeason>',
    contentLocation:                  '<http://schema.org/contentLocation>',
    contentRating:                    '<http://schema.org/contentRating>',
    contentSize:                      '<http://schema.org/contentSize>',
    contentType:                      '<http://schema.org/contentType>',
    contentUrl:                       '<http://schema.org/contentUrl>',
    contributor:                      '<http://purl.org/dc/terms/contributor>',
    cookTime:                         '<http://schema.org/cookTime>',
    cookingMethod:                    '<http://schema.org/cookingMethod>',
    copyrightHolder:                  '<http://schema.org/copyrightHolder>',
    copyrightYear:                    '<http://schema.org/copyrightYear>',
    countriesNotSupported:            '<http://schema.org/countriesNotSupported>',
    countriesSupported:               '<http://schema.org/countriesSupported>',
    countryOfOrigin:                  '<http://schema.org/countryOfOrigin>',
    course:                           '<http://schema.org/course>',
    coverageEndTime:                  '<http://schema.org/coverageEndTime>',
    coverageStartTime:                '<http://schema.org/coverageStartTime>',
    creator:                          '<http://purl.org/dc/terms/creator>',
    creditedTo:                       '<http://schema.org/creditedTo>',
    currenciesAccepted:               '<http://schema.org/currenciesAccepted>',
    currency:                         '<http://schema.org/currency>',
    customer:                         '<http://schema.org/customer>',
    dataFeedElement:                  '<http://schema.org/dataFeedElement>',
    dataset:                          '<http://schema.org/dataset>',
    datasetTimeInterval:              '<http://schema.org/datasetTimeInterval>',
    dateCreated:                      '<http://schema.org/dateCreated>',
    dateDeleted:                      '<http://schema.org/dateDeleted>',
    dateIssued:                       '<http://schema.org/dateIssued>',
    dateModified:                     '<http://schema.org/dateModified>',
    datePosted:                       '<http://schema.org/datePosted>',
    datePublished:                    '<http://schema.org/datePublished>',
    dateRead:                         '<http://schema.org/dateRead>',
    dateReceived:                     '<http://schema.org/dateReceived>',
    dateSent:                         '<http://schema.org/dateSent>',
    dateVehicleFirstRegistered:       '<http://schema.org/dateVehicleFirstRegistered>',
    dateline:                         '<http://schema.org/dateline>',
    dayOfWeek:                        '<http://schema.org/dayOfWeek>',
    deathDate:                        '<http://schema.org/deathDate>',
    deathPlace:                       '<http://schema.org/deathPlace>',
    defaultValue:                     '<http://schema.org/defaultValue>',
    deliveryAddress:                  '<http://schema.org/deliveryAddress>',
    deliveryLeadTime:                 '<http://schema.org/deliveryLeadTime>',
    deliveryMethod:                   '<http://schema.org/deliveryMethod>',
    deliveryStatus:                   '<http://schema.org/deliveryStatus>',
    department:                       '<http://schema.org/department>',
    departureAirport:                 '<http://schema.org/departureAirport>',
    departureBusStop:                 '<http://schema.org/departureBusStop>',
    departureGate:                    '<http://schema.org/departureGate>',
    departurePlatform:                '<http://schema.org/departurePlatform>',
    departureStation:                 '<http://schema.org/departureStation>',
    departureTerminal:                '<http://schema.org/departureTerminal>',
    departureTime:                    '<http://schema.org/departureTime>',
    dependencies:                     '<http://schema.org/dependencies>',
    deprecated:                       '<http://www.w3.org/2002/07/owl#deprecated>',
    depth:                            '<http://schema.org/depth>',
    description:                      '<http://www.w3.org/2000/01/rdf-schema#comment>',
    device:                           '<http://schema.org/device>',
    director:                         '<http://schema.org/director>',
    directors:                        '<http://schema.org/directors>',
    disambiguatingDescription:        '<http://schema.org/disambiguatingDescription>',
    discount:                         '<http://schema.org/discount>',
    discountCode:                     '<http://schema.org/discountCode>',
    discountCurrency:                 '<http://schema.org/discountCurrency>',
    discusses:                        '<http://schema.org/discusses>',
    discussionUrl:                    '<http://schema.org/discussionUrl>',
    disjointWith:                     '<http://www.w3.org/2002/07/owl#disjointWith>',
    dissolutionDate:                  '<http://schema.org/dissolutionDate>',
    distance:                         '<http://schema.org/distance>',
    distribution:                     '<http://schema.org/distribution>',
    domain:                           '<http://schema.org/domainIncludes>',
    domainIncludes:                   '<http://schema.org/domainIncludes>',
    doorTime:                         '<http://schema.org/doorTime>',
    downloadUrl:                      '<http://schema.org/downloadUrl>',
    downvoteCount:                    '<http://schema.org/downvoteCount>',
    driveWheelConfiguration:          '<http://schema.org/driveWheelConfiguration>',
    dropoffLocation:                  '<http://schema.org/dropoffLocation>',
    dropoffTime:                      '<http://schema.org/dropoffTime>',
    duns:                             '<http://schema.org/duns>',
    duration:                         '<http://schema.org/duration>',
    durationOfWarranty:               '<http://schema.org/durationOfWarranty>',
    editor:                           '<http://schema.org/editor>',
    educationRequirements:            '<http://schema.org/educationRequirements>',
    educationalAlignment:             '<http://schema.org/educationalAlignment>',
    educationalFramework:             '<http://schema.org/educationalFramework>',
    educationalRole:                  '<http://schema.org/educationalRole>',
    educationalUse:                   '<http://schema.org/educationalUse>',
    elevation:                        '<http://schema.org/elevation>',
    eligibleCustomerType:             '<http://schema.org/eligibleCustomerType>',
    eligibleDuration:                 '<http://schema.org/eligibleDuration>',
    eligibleQuantity:                 '<http://schema.org/eligibleQuantity>',
    eligibleRegion:                   '<http://schema.org/eligibleRegion>',
    eligibleTransactionVolume:        '<http://schema.org/eligibleTransactionVolume>',
    email:                            '<http://schema.org/email>',
    embedUrl:                         '<http://schema.org/embedUrl>',
    employee:                         '<http://schema.org/employee>',
    employees:                        '<http://schema.org/employees>',
    employmentType:                   '<http://schema.org/employmentType>',
    encodesCreativeWork:              '<http://schema.org/encodesCreativeWork>',
    encoding:                         '<http://schema.org/encoding>',
    encodingFormat:                   '<http://schema.org/encodingFormat>',
    encodingType:                     '<http://schema.org/encodingType>',
    encodings:                        '<http://schema.org/encodings>',
    endDate:                          '<http://schema.org/endDate>',
    endTime:                          '<http://schema.org/endTime>',
    endorsee:                         '<http://schema.org/endorsee>',
    entertainmentBusiness:            '<http://schema.org/entertainmentBusiness>',
    episode:                          '<http://schema.org/episode>',
    episodeNumber:                    '<http://schema.org/episodeNumber>',
    episodes:                         '<http://schema.org/episodes>',
    equal:                            '<http://schema.org/equal>',
    equivalentClass:                  '<http://www.w3.org/2002/07/owl#equivalentClass>',
    equivalentProperty:               '<http://www.w3.org/2002/07/owl#equivalentProperty>',
    error:                            '<http://schema.org/error>',
    estimatedFlightDuration:          '<http://schema.org/estimatedFlightDuration>',
    event:                            '<http://schema.org/event>',
    eventStatus:                      '<http://schema.org/eventStatus>',
    events:                           '<http://schema.org/events>',
    exampleOfWork:                    '<http://schema.org/exampleOfWork>',
    executableLibraryName:            '<http://schema.org/executableLibraryName>',
    exerciseCourse:                   '<http://schema.org/exerciseCourse>',
    exifData:                         '<http://schema.org/exifData>',
    expectedArrivalFrom:              '<http://schema.org/expectedArrivalFrom>',
    expectedArrivalUntil:             '<http://schema.org/expectedArrivalUntil>',
    expectsAcceptanceOf:              '<http://schema.org/expectsAcceptanceOf>',
    experienceRequirements:           '<http://schema.org/experienceRequirements>',
    expires:                          '<http://schema.org/expires>',
    familyName:                       '<http://schema.org/familyName>',
    fatContent:                       '<http://schema.org/fatContent>',
    faxNumber:                        '<http://schema.org/faxNumber>',
    featureList:                      '<http://schema.org/featureList>',
    feesAndCommissionsSpecification:  '<http://schema.org/feesAndCommissionsSpecification>',
    fiberContent:                     '<http://schema.org/fiberContent>',
    fileFormat:                       '<http://schema.org/fileFormat>',
    fileSize:                         '<http://schema.org/fileSize>',
    firstPerformance:                 '<http://schema.org/firstPerformance>',
    flightDistance:                   '<http://schema.org/flightDistance>',
    flightNumber:                     '<http://schema.org/flightNumber>',
    floorSize:                        '<http://schema.org/floorSize>',
    followee:                         '<http://schema.org/followee>',
    follows:                          '<http://schema.org/follows>',
    foodEstablishment:                '<http://schema.org/foodEstablishment>',
    foodEvent:                        '<http://schema.org/foodEvent>',
    founder:                          '<http://schema.org/founder>',
    founders:                         '<http://schema.org/founders>',
    foundingDate:                     '<http://schema.org/foundingDate>',
    foundingLocation:                 '<http://schema.org/foundingLocation>',
    free:                             '<http://schema.org/free>',
    fromLocation:                     '<http://schema.org/fromLocation>',
    fuelConsumption:                  '<http://schema.org/fuelConsumption>',
    fuelEfficiency:                   '<http://schema.org/fuelEfficiency>',
    fuelType:                         '<http://schema.org/fuelType>',
    funder:                           '<http://schema.org/funder>',
    game:                             '<http://schema.org/game>',
    gameItem:                         '<http://schema.org/gameItem>',
    gameLocation:                     '<http://schema.org/gameLocation>',
    gamePlatform:                     '<http://schema.org/gamePlatform>',
    gameServer:                       '<http://schema.org/gameServer>',
    gameTip:                          '<http://schema.org/gameTip>',
    gender:                           '<http://schema.org/gender>',
    genre:                            '<http://schema.org/genre>',
    geo:                              '<http://schema.org/geo>',
    geoMidpoint:                      '<http://schema.org/geoMidpoint>',
    geoRadius:                        '<http://schema.org/geoRadius>',
    geographicArea:                   '<http://schema.org/geographicArea>',
    givenName:                        '<http://schema.org/givenName>',
    globalLocationNumber:             '<http://schema.org/globalLocationNumber>',
    grantee:                          '<http://schema.org/grantee>',
    greater:                          '<http://schema.org/greater>',
    greaterOrEqual:                   '<http://schema.org/greaterOrEqual>',
    gtin12:                           '<http://schema.org/gtin12>',
    gtin13:                           '<http://schema.org/gtin13>',
    gtin14:                           '<http://schema.org/gtin14>',
    gtin8:                            '<http://schema.org/gtin8>',
    hasDeliveryMethod:                '<http://schema.org/hasDeliveryMethod>',
    hasDigitalDocumentPermission:     '<http://schema.org/hasDigitalDocumentPermission>',
    hasMap:                           '<http://schema.org/hasMap>',
    hasOfferCatalog:                  '<http://schema.org/hasOfferCatalog>',
    hasPOS:                           '<http://schema.org/hasPOS>',
    hasPart:                          '<http://schema.org/hasPart>',
    hasVersion:                       '<http://purl.org/dc/terms/hasVersion>',
    headline:                         '<http://schema.org/headline>',
    height:                           '<http://schema.org/height>',
    highPrice:                        '<http://schema.org/highPrice>',
    hiringOrganization:               '<http://schema.org/hiringOrganization>',
    homeLocation:                     '<http://schema.org/homeLocation>',
    homeTeam:                         '<http://schema.org/homeTeam>',
    honorificPrefix:                  '<http://schema.org/honorificPrefix>',
    honorificSuffix:                  '<http://schema.org/honorificSuffix>',
    hostingOrganization:              '<http://schema.org/hostingOrganization>',
    hoursAvailable:                   '<http://schema.org/hoursAvailable>',
    httpMethod:                       '<http://schema.org/httpMethod>',
    iataCode:                         '<http://schema.org/iataCode>',
    icaoCode:                         '<http://schema.org/icaoCode>',
    illustrator:                      '<http://schema.org/illustrator>',
    image:                            '<http://schema.org/image>',
    inAlbum:                          '<http://schema.org/inAlbum>',
    inBroadcastLineup:                '<http://schema.org/inBroadcastLineup>',
    inLanguage:                       '<http://schema.org/inLanguage>',
    inPlaylist:                       '<http://schema.org/inPlaylist>',
    inbox:                            '<http://www.w3.org/ns/ldp#inbox>',
    incentiveCompensation:            '<http://schema.org/incentiveCompensation>',
    incentives:                       '<http://schema.org/incentives>',
    includedComposition:              '<http://schema.org/includedComposition>',
    includedDataCatalog:              '<http://schema.org/includedDataCatalog>',
    includedInDataCatalog:            '<http://schema.org/includedInDataCatalog>',
    includesObject:                   '<http://schema.org/includesObject>',
    industry:                         '<http://schema.org/industry>',
    ineligibleRegion:                 '<http://schema.org/ineligibleRegion>',
    ingredients:                      '<http://schema.org/ingredients>',
    installUrl:                       '<http://schema.org/installUrl>',
    instrument:                       '<http://schema.org/instrument>',
    interactionCount:                 '<http://schema.org/interactionCount>',
    interactionService:               '<http://schema.org/interactionService>',
    interactionStatistic:             '<http://schema.org/interactionStatistic>',
    interactionType:                  '<http://schema.org/interactionType>',
    interactivityType:                '<http://schema.org/interactivityType>',
    interestRate:                     '<http://schema.org/interestRate>',
    intersectionOf:                   '<http://www.w3.org/2002/07/owl#intersectionOf>',
    inventoryLevel:                   '<http://schema.org/inventoryLevel>',
    inverseOf:                        '<http://schema.org/inverseOf>',
    isAccessibleForFree:              '<http://schema.org/isAccessibleForFree>',
    isAccessoryOrSparePartFor:        '<http://schema.org/isAccessoryOrSparePartFor>',
    isBasedOn:                        '<http://schema.org/isBasedOn>',
    isBasedOnUrl:                     '<http://schema.org/isBasedOnUrl>',
    isConsumableFor:                  '<http://schema.org/isConsumableFor>',
    isDefinedBy:                      '<http://www.w3.org/2000/01/rdf-schema#isDefinedBy>',
    isFamilyFriendly:                 '<http://schema.org/isFamilyFriendly>',
    isGift:                           '<http://schema.org/isGift>',
    isLiveBroadcast:                  '<http://schema.org/isLiveBroadcast>',
    isPartOf:                         '<http://schema.org/isPartOf>',
    isRelatedTo:                      '<http://schema.org/isRelatedTo>',
    isSimilarTo:                      '<http://schema.org/isSimilarTo>',
    isVariantOf:                      '<http://schema.org/isVariantOf>',
    isbn:                             '<http://schema.org/isbn>',
    isicV4:                           '<http://schema.org/isicV4>',
    isrcCode:                         '<http://schema.org/isrcCode>',
    issn:                             '<http://schema.org/issn>',
    issueNumber:                      '<http://schema.org/issueNumber>',
    issuedBy:                         '<http://schema.org/issuedBy>',
    issuedThrough:                    '<http://schema.org/issuedThrough>',
    iswcCode:                         '<http://schema.org/iswcCode>',
    item:                             '<http://schema.org/item>',
    itemCondition:                    '<http://schema.org/itemCondition>',
    itemListElement:                  '<http://schema.org/itemListElement>',
    itemListOrder:                    '<http://schema.org/itemListOrder>',
    itemOffered:                      '<http://schema.org/itemOffered>',
    itemReviewed:                     '<http://schema.org/itemReviewed>',
    itemShipped:                      '<http://schema.org/itemShipped>',
    jobBenefits:                      '<http://schema.org/jobBenefits>',
    jobLocation:                      '<http://schema.org/jobLocation>',
    jobTitle:                         '<http://schema.org/jobTitle>',
    keywords:                         '<http://schema.org/keywords>',
    knownVehicleDamages:              '<http://schema.org/knownVehicleDamages>',
    knows:                            '<http://schema.org/knows>',
    label:                            '<http://www.w3.org/2000/01/rdf-schema#label>',
    landlord:                         '<http://schema.org/landlord>',
    language:                         '<http://schema.org/language>',
    lastReviewed:                     '<http://schema.org/lastReviewed>',
    latitude:                         '<http://schema.org/latitude>',
    learningResourceType:             '<http://schema.org/learningResourceType>',
    legalName:                        '<http://schema.org/legalName>',
    leiCode:                          '<http://schema.org/leiCode>',
    lender:                           '<http://schema.org/lender>',
    lesser:                           '<http://schema.org/lesser>',
    lesserOrEqual:                    '<http://schema.org/lesserOrEqual>',
    license:                          '<http://schema.org/license>',
    line:                             '<http://schema.org/line>',
    liveBlogUpdate:                   '<http://schema.org/liveBlogUpdate>',
    loanTerm:                         '<http://schema.org/loanTerm>',
    location:                         '<http://schema.org/location>',
    locationCreated:                  '<http://schema.org/locationCreated>',
    lodgingUnitDescription:           '<http://schema.org/lodgingUnitDescription>',
    lodgingUnitType:                  '<http://schema.org/lodgingUnitType>',
    logo:                             '<http://schema.org/logo>',
    longitude:                        '<http://schema.org/longitude>',
    loser:                            '<http://schema.org/loser>',
    lowPrice:                         '<http://schema.org/lowPrice>',
    lyricist:                         '<http://schema.org/lyricist>',
    lyrics:                           '<http://schema.org/lyrics>',
    mainContentOfPage:                '<http://schema.org/mainContentOfPage>',
    mainEntity:                       '<http://schema.org/mainEntity>',
    mainEntityOfPage:                 '<http://schema.org/mainEntityOfPage>',
    makesOffer:                       '<http://schema.org/makesOffer>',
    manufacturer:                     '<http://schema.org/manufacturer>',
    map:                              '<http://schema.org/map>',
    mapType:                          '<http://schema.org/mapType>',
    maps:                             '<http://schema.org/maps>',
    material:                         '<http://schema.org/material>',
    maxCardinality:                   '<http://www.w3.org/2002/07/owl#maxCardinality>',
    maxPrice:                         '<http://schema.org/maxPrice>',
    maxQualifiedCardinality:          '<http://www.w3.org/2002/07/owl#maxQualifiedCardinality>',
    maxValue:                         '<http://schema.org/maxValue>',
    mealService:                      '<http://schema.org/mealService>',
    member:                           '<http://schema.org/member>',
    memberOf:                         '<http://schema.org/memberOf>',
    members:                          '<http://schema.org/members>',
    membershipNumber:                 '<http://schema.org/membershipNumber>',
    memoryRequirements:               '<http://schema.org/memoryRequirements>',
    mentions:                         '<http://schema.org/mentions>',
    menu:                             '<http://schema.org/menu>',
    merchant:                         '<http://schema.org/merchant>',
    messageAttachment:                '<http://schema.org/messageAttachment>',
    mileageFromOdometer:              '<http://schema.org/mileageFromOdometer>',
    minCardinality:                   '<http://www.w3.org/2002/07/owl#minCardinality>',
    minPrice:                         '<http://schema.org/minPrice>',
    minQualifiedCardinality:          '<http://www.w3.org/2002/07/owl#minQualifiedCardinality>',
    minValue:                         '<http://schema.org/minValue>',
    minimumPaymentDue:                '<http://schema.org/minimumPaymentDue>',
    model:                            '<http://schema.org/model>',
    modificationTimestamp:            '<http://www.w3.org/ns/posix/stat#mtime>',
    modified:                         '<http://purl.org/dc/terms/modified>',
    modifiedTime:                     '<http://schema.org/modifiedTime>',
    mpn:                              '<http://schema.org/mpn>',
    multipleValues:                   '<http://schema.org/multipleValues>',
    musicArrangement:                 '<http://schema.org/musicArrangement>',
    musicBy:                          '<http://schema.org/musicBy>',
    musicCompositionForm:             '<http://schema.org/musicCompositionForm>',
    musicGroupMember:                 '<http://schema.org/musicGroupMember>',
    musicReleaseFormat:               '<http://schema.org/musicReleaseFormat>',
    musicalKey:                       '<http://schema.org/musicalKey>',
    naics:                            '<http://schema.org/naics>',
    name:                             '<http://xmlns.com/foaf/0.1/name>',
    namedPosition:                    '<http://schema.org/namedPosition>',
    nationality:                      '<http://schema.org/nationality>',
    netWorth:                         '<http://schema.org/netWorth>',
    nextItem:                         '<http://schema.org/nextItem>',
    nonEqual:                         '<http://schema.org/nonEqual>',
    note:                             '<http://www.w3.org/2004/02/skos/core#note>',
    numAdults:                        '<http://schema.org/numAdults>',
    numChildren:                      '<http://schema.org/numChildren>',
    numTracks:                        '<http://schema.org/numTracks>',
    numberOfAirbags:                  '<http://schema.org/numberOfAirbags>',
    numberOfAxles:                    '<http://schema.org/numberOfAxles>',
    numberOfBeds:                     '<http://schema.org/numberOfBeds>',
    numberOfDoors:                    '<http://schema.org/numberOfDoors>',
    numberOfEmployees:                '<http://schema.org/numberOfEmployees>',
    numberOfEpisodes:                 '<http://schema.org/numberOfEpisodes>',
    numberOfForwardGears:             '<http://schema.org/numberOfForwardGears>',
    numberOfItems:                    '<http://schema.org/numberOfItems>',
    numberOfPages:                    '<http://schema.org/numberOfPages>',
    numberOfPlayers:                  '<http://schema.org/numberOfPlayers>',
    numberOfPreviousOwners:           '<http://schema.org/numberOfPreviousOwners>',
    numberOfRooms:                    '<http://schema.org/numberOfRooms>',
    numberOfSeasons:                  '<http://schema.org/numberOfSeasons>',
    numberedPosition:                 '<http://schema.org/numberedPosition>',
    nutrition:                        '<http://schema.org/nutrition>',
    object:                           '<http://schema.org/object>',
    occupancy:                        '<http://schema.org/occupancy>',
    occupationalCategory:             '<http://schema.org/occupationalCategory>',
    offerCount:                       '<http://schema.org/offerCount>',
    offeredBy:                        '<http://schema.org/offeredBy>',
    offers:                           '<http://schema.org/offers>',
    onClass:                          '<http://www.w3.org/2002/07/owl#onClass>',
    onDataRange:                      '<http://www.w3.org/2002/07/owl#onDataRange>',
    onProperty:                       '<http://www.w3.org/2002/07/owl#onProperty>',
    openingHours:                     '<http://schema.org/openingHours>',
    openingHoursSpecification:        '<http://schema.org/openingHoursSpecification>',
    opens:                            '<http://schema.org/opens>',
    operatingSystem:                  '<http://schema.org/operatingSystem>',
    opponent:                         '<http://schema.org/opponent>',
    option:                           '<http://schema.org/option>',
    orderDate:                        '<http://schema.org/orderDate>',
    orderDelivery:                    '<http://schema.org/orderDelivery>',
    orderItemNumber:                  '<http://schema.org/orderItemNumber>',
    orderItemStatus:                  '<http://schema.org/orderItemStatus>',
    orderNumber:                      '<http://schema.org/orderNumber>',
    orderQuantity:                    '<http://schema.org/orderQuantity>',
    orderStatus:                      '<http://schema.org/orderStatus>',
    orderedItem:                      '<http://schema.org/orderedItem>',
    organizer:                        '<http://schema.org/organizer>',
    originAddress:                    '<http://schema.org/originAddress>',
    ownedFrom:                        '<http://schema.org/ownedFrom>',
    ownedThrough:                     '<http://schema.org/ownedThrough>',
    owns:                             '<http://schema.org/owns>',
    pageEnd:                          '<http://schema.org/pageEnd>',
    pageStart:                        '<http://schema.org/pageStart>',
    pagination:                       '<http://schema.org/pagination>',
    parent:                           '<http://schema.org/parent>',
    parentItem:                       '<http://schema.org/parentItem>',
    parentOrganization:               '<http://schema.org/parentOrganization>',
    parentService:                    '<http://schema.org/parentService>',
    parents:                          '<http://schema.org/parents>',
    partOfEpisode:                    '<http://schema.org/partOfEpisode>',
    partOfInvoice:                    '<http://schema.org/partOfInvoice>',
    partOfOrder:                      '<http://schema.org/partOfOrder>',
    partOfSeason:                     '<http://schema.org/partOfSeason>',
    partOfSeries:                     '<http://schema.org/partOfSeries>',
    partOfTVSeries:                   '<http://schema.org/partOfTVSeries>',
    participant:                      '<http://schema.org/participant>',
    partySize:                        '<http://schema.org/partySize>',
    passengerPriorityStatus:          '<http://schema.org/passengerPriorityStatus>',
    passengerSequenceNumber:          '<http://schema.org/passengerSequenceNumber>',
    paymentAccepted:                  '<http://schema.org/paymentAccepted>',
    paymentDue:                       '<http://schema.org/paymentDue>',
    paymentDueDate:                   '<http://schema.org/paymentDueDate>',
    paymentMethod:                    '<http://schema.org/paymentMethod>',
    paymentMethodId:                  '<http://schema.org/paymentMethodId>',
    paymentStatus:                    '<http://schema.org/paymentStatus>',
    paymentUrl:                       '<http://schema.org/paymentUrl>',
    performer:                        '<http://schema.org/performer>',
    performerIn:                      '<http://schema.org/performerIn>',
    performers:                       '<http://schema.org/performers>',
    permissionType:                   '<http://schema.org/permissionType>',
    permissions:                      '<http://schema.org/permissions>',
    permitAudience:                   '<http://schema.org/permitAudience>',
    permittedUsage:                   '<http://schema.org/permittedUsage>',
    petsAllowed:                      '<http://schema.org/petsAllowed>',
    photo:                            '<http://schema.org/photo>',
    photos:                           '<http://schema.org/photos>',
    pickupLocation:                   '<http://schema.org/pickupLocation>',
    pickupTime:                       '<http://schema.org/pickupTime>',
    playMode:                         '<http://schema.org/playMode>',
    playerType:                       '<http://schema.org/playerType>',
    playersOnline:                    '<http://schema.org/playersOnline>',
    polygon:                          '<http://schema.org/polygon>',
    position:                         '<http://schema.org/position>',
    postOfficeBoxNumber:              '<http://schema.org/postOfficeBoxNumber>',
    postalCode:                       '<http://schema.org/postalCode>',
    potentialAction:                  '<http://schema.org/potentialAction>',
    predecessorOf:                    '<http://schema.org/predecessorOf>',
    preferencesUrl:                   '<http://www.w3.org/ns/pim/space#preferencesFile>',
    preferredNamespacePrefix:         '<http://purl.org/vocab/vann/preferredNamespacePrefix>',
    preferredNamespaceUri:            '<http://purl.org/vocab/vann/preferredNamespaceUri>',
    prepTime:                         '<http://schema.org/prepTime>',
    previousItem:                     '<http://schema.org/previousItem>',
    previousStartDate:                '<http://schema.org/previousStartDate>',
    price:                            '<http://schema.org/price>',
    priceComponent:                   '<http://schema.org/priceComponent>',
    priceCurrency:                    '<http://schema.org/priceCurrency>',
    priceRange:                       '<http://schema.org/priceRange>',
    priceSpecification:               '<http://schema.org/priceSpecification>',
    priceType:                        '<http://schema.org/priceType>',
    priceValidUntil:                  '<http://schema.org/priceValidUntil>',
    primaryImageOfPage:               '<http://schema.org/primaryImageOfPage>',
    printColumn:                      '<http://schema.org/printColumn>',
    printEdition:                     '<http://schema.org/printEdition>',
    printPage:                        '<http://schema.org/printPage>',
    printSection:                     '<http://schema.org/printSection>',
    privateTypeIndex:                 '<http://www.w3.org/ns/solid/terms#privateTypeIndex>',
    processingTime:                   '<http://schema.org/processingTime>',
    processorRequirements:            '<http://schema.org/processorRequirements>',
    producer:                         '<http://schema.org/producer>',
    produces:                         '<http://schema.org/produces>',
    productID:                        '<http://schema.org/productID>',
    productSupported:                 '<http://schema.org/productSupported>',
    productionCompany:                '<http://schema.org/productionCompany>',
    productionDate:                   '<http://schema.org/productionDate>',
    proficiencyLevel:                 '<http://schema.org/proficiencyLevel>',
    programMembershipUsed:            '<http://schema.org/programMembershipUsed>',
    programName:                      '<http://schema.org/programName>',
    programmingLanguage:              '<http://schema.org/programmingLanguage>',
    programmingModel:                 '<http://schema.org/programmingModel>',
    propertyID:                       '<http://schema.org/propertyID>',
    proteinContent:                   '<http://schema.org/proteinContent>',
    provider:                         '<http://schema.org/provider>',
    providerMobility:                 '<http://schema.org/providerMobility>',
    providesBroadcastService:         '<http://schema.org/providesBroadcastService>',
    providesService:                  '<http://schema.org/providesService>',
    publicTypeIndex:                  '<http://www.w3.org/ns/solid/terms#publicTypeIndex>',
    publication:                      '<http://schema.org/publication>',
    publishedOn:                      '<http://schema.org/publishedOn>',
    publisher:                        '<http://purl.org/dc/terms/publisher>',
    publishingPrinciples:             '<http://schema.org/publishingPrinciples>',
    purchaseDate:                     '<http://schema.org/purchaseDate>',
    qualifications:                   '<http://schema.org/qualifications>',
    query:                            '<http://schema.org/query>',
    quest:                            '<http://schema.org/quest>',
    question:                         '<http://schema.org/question>',
    range:                            '<http://schema.org/rangeIncludes>',
    rangeIncludes:                    '<http://schema.org/rangeIncludes>',
    ratingCount:                      '<http://schema.org/ratingCount>',
    ratingValue:                      '<http://schema.org/ratingValue>',
    readonlyValue:                    '<http://schema.org/readonlyValue>',
    realEstateAgent:                  '<http://schema.org/realEstateAgent>',
    recipe:                           '<http://schema.org/recipe>',
    recipeCategory:                   '<http://schema.org/recipeCategory>',
    recipeCuisine:                    '<http://schema.org/recipeCuisine>',
    recipeIngredient:                 '<http://schema.org/recipeIngredient>',
    recipeInstructions:               '<http://schema.org/recipeInstructions>',
    recipeYield:                      '<http://schema.org/recipeYield>',
    recipient:                        '<http://schema.org/recipient>',
    recordLabel:                      '<http://schema.org/recordLabel>',
    recordedAs:                       '<http://schema.org/recordedAs>',
    recordedAt:                       '<http://schema.org/recordedAt>',
    recordedIn:                       '<http://schema.org/recordedIn>',
    recordingOf:                      '<http://schema.org/recordingOf>',
    referenceQuantity:                '<http://schema.org/referenceQuantity>',
    referencesOrder:                  '<http://schema.org/referencesOrder>',
    regionsAllowed:                   '<http://schema.org/regionsAllowed>',
    relatedLink:                      '<http://schema.org/relatedLink>',
    relatedTo:                        '<http://schema.org/relatedTo>',
    releaseDate:                      '<http://schema.org/releaseDate>',
    releaseNotes:                     '<http://schema.org/releaseNotes>',
    releaseOf:                        '<http://schema.org/releaseOf>',
    releasedEvent:                    '<http://schema.org/releasedEvent>',
    replacee:                         '<http://schema.org/replacee>',
    replacer:                         '<http://schema.org/replacer>',
    replyToUrl:                       '<http://schema.org/replyToUrl>',
    reportNumber:                     '<http://schema.org/reportNumber>',
    representativeOfPage:             '<http://schema.org/representativeOfPage>',
    requiredCollateral:               '<http://schema.org/requiredCollateral>',
    requiredGender:                   '<http://schema.org/requiredGender>',
    requiredMaxAge:                   '<http://schema.org/requiredMaxAge>',
    requiredMinAge:                   '<http://schema.org/requiredMinAge>',
    requirements:                     '<http://schema.org/requirements>',
    requiresSubscription:             '<http://schema.org/requiresSubscription>',
    reservationFor:                   '<http://schema.org/reservationFor>',
    reservationId:                    '<http://schema.org/reservationId>',
    reservationStatus:                '<http://schema.org/reservationStatus>',
    reservedTicket:                   '<http://schema.org/reservedTicket>',
    responsibilities:                 '<http://schema.org/responsibilities>',
    result:                           '<http://schema.org/result>',
    resultComment:                    '<http://schema.org/resultComment>',
    resultReview:                     '<http://schema.org/resultReview>',
    review:                           '<http://schema.org/review>',
    reviewBody:                       '<http://schema.org/reviewBody>',
    reviewCount:                      '<http://schema.org/reviewCount>',
    reviewRating:                     '<http://schema.org/reviewRating>',
    reviewedBy:                       '<http://schema.org/reviewedBy>',
    reviews:                          '<http://schema.org/reviews>',
    roleName:                         '<http://schema.org/roleName>',
    rsvpResponse:                     '<http://schema.org/rsvpResponse>',
    runtime:                          '<http://schema.org/runtime>',
    runtimePlatform:                  '<http://schema.org/runtimePlatform>',
    salaryCurrency:                   '<http://schema.org/salaryCurrency>',
    sameAs:                           '<http://www.w3.org/2002/07/owl#sameAs>',
    sampleType:                       '<http://schema.org/sampleType>',
    saturatedFatContent:              '<http://schema.org/saturatedFatContent>',
    scheduledPaymentDate:             '<http://schema.org/scheduledPaymentDate>',
    scheduledTime:                    '<http://schema.org/scheduledTime>',
    schemaVersion:                    '<http://schema.org/schemaVersion>',
    screenCount:                      '<http://schema.org/screenCount>',
    screenshot:                       '<http://schema.org/screenshot>',
    season:                           '<http://schema.org/season>',
    seasonNumber:                     '<http://schema.org/seasonNumber>',
    seasons:                          '<http://schema.org/seasons>',
    seatNumber:                       '<http://schema.org/seatNumber>',
    seatRow:                          '<http://schema.org/seatRow>',
    seatSection:                      '<http://schema.org/seatSection>',
    seatingType:                      '<http://schema.org/seatingType>',
    securityScreening:                '<http://schema.org/securityScreening>',
    seeAlso:                          '<http://www.w3.org/2000/01/rdf-schema#seeAlso>',
    seeks:                            '<http://schema.org/seeks>',
    seller:                           '<http://schema.org/seller>',
    sender:                           '<http://schema.org/sender>',
    serialNumber:                     '<http://schema.org/serialNumber>',
    serverStatus:                     '<http://schema.org/serverStatus>',
    servesCuisine:                    '<http://schema.org/servesCuisine>',
    serviceArea:                      '<http://schema.org/serviceArea>',
    serviceAudience:                  '<http://schema.org/serviceAudience>',
    serviceLocation:                  '<http://schema.org/serviceLocation>',
    serviceOperator:                  '<http://schema.org/serviceOperator>',
    serviceOutput:                    '<http://schema.org/serviceOutput>',
    servicePhone:                     '<http://schema.org/servicePhone>',
    servicePostalAddress:             '<http://schema.org/servicePostalAddress>',
    serviceSmsNumber:                 '<http://schema.org/serviceSmsNumber>',
    serviceType:                      '<http://schema.org/serviceType>',
    serviceUrl:                       '<http://schema.org/serviceUrl>',
    servingSize:                      '<http://schema.org/servingSize>',
    sharedContent:                    '<http://schema.org/sharedContent>',
    sibling:                          '<http://schema.org/sibling>',
    siblings:                         '<http://schema.org/siblings>',
    significantLink:                  '<http://schema.org/significantLink>',
    significantLinks:                 '<http://schema.org/significantLinks>',
    skills:                           '<http://schema.org/skills>',
    sku:                              '<http://schema.org/sku>',
    smokingAllowed:                   '<http://schema.org/smokingAllowed>',
    sodiumContent:                    '<http://schema.org/sodiumContent>',
    softwareAddOn:                    '<http://schema.org/softwareAddOn>',
    softwareHelp:                     '<http://schema.org/softwareHelp>',
    softwareRequirements:             '<http://schema.org/softwareRequirements>',
    softwareVersion:                  '<http://schema.org/softwareVersion>',
    someValuesFrom:                   '<http://www.w3.org/2002/07/owl#someValuesFrom>',
    source:                           '<http://purl.org/dc/terms/source>',
    sourceOrganization:               '<http://schema.org/sourceOrganization>',
    spatial:                          '<http://schema.org/spatial>',
    spatialCoverage:                  '<http://schema.org/spatialCoverage>',
    specialCommitments:               '<http://schema.org/specialCommitments>',
    specialOpeningHoursSpecification: '<http://schema.org/specialOpeningHoursSpecification>',
    specialty:                        '<http://schema.org/specialty>',
    sponsor:                          '<http://schema.org/sponsor>',
    sport:                            '<http://schema.org/sport>',
    sportsActivityLocation:           '<http://schema.org/sportsActivityLocation>',
    sportsEvent:                      '<http://schema.org/sportsEvent>',
    sportsTeam:                       '<http://schema.org/sportsTeam>',
    spouse:                           '<http://schema.org/spouse>',
    starRating:                       '<http://schema.org/starRating>',
    startDate:                        '<http://schema.org/startDate>',
    startTime:                        '<http://schema.org/startTime>',
    steeringPosition:                 '<http://schema.org/steeringPosition>',
    stepValue:                        '<http://schema.org/stepValue>',
    storageRequirements:              '<http://schema.org/storageRequirements>',
    storageUrl:                       '<http://www.w3.org/ns/pim/space#storage>',
    streetAddress:                    '<http://schema.org/streetAddress>',
    subClassOf:                       '<http://www.w3.org/2000/01/rdf-schema#subClassOf>',
    subEvent:                         '<http://schema.org/subEvent>',
    subEvents:                        '<http://schema.org/subEvents>',
    subOrganization:                  '<http://schema.org/subOrganization>',
    subPropertyOf:                    '<http://www.w3.org/2000/01/rdf-schema#subPropertyOf>',
    subReservation:                   '<http://schema.org/subReservation>',
    subtitleLanguage:                 '<http://schema.org/subtitleLanguage>',
    successorOf:                      '<http://schema.org/successorOf>',
    sugarContent:                     '<http://schema.org/sugarContent>',
    suggestedAnswer:                  '<http://schema.org/suggestedAnswer>',
    suggestedGender:                  '<http://schema.org/suggestedGender>',
    suggestedMaxAge:                  '<http://schema.org/suggestedMaxAge>',
    suggestedMinAge:                  '<http://schema.org/suggestedMinAge>',
    suitableForDiet:                  '<http://schema.org/suitableForDiet>',
    superEvent:                       '<http://schema.org/superEvent>',
    supersededBy:                     '<http://schema.org/supersededBy>',
    supportingData:                   '<http://schema.org/supportingData>',
    surface:                          '<http://schema.org/surface>',
    tags:                             '<http://schema.org/keywords>',
    target:                           '<http://schema.org/target>',
    targetCollection:                 '<http://schema.org/targetCollection>',
    targetDescription:                '<http://schema.org/targetDescription>',
    targetName:                       '<http://schema.org/targetName>',
    targetPlatform:                   '<http://schema.org/targetPlatform>',
    targetProduct:                    '<http://schema.org/targetProduct>',
    targetUrl:                        '<http://schema.org/targetUrl>',
    taxID:                            '<http://schema.org/taxID>',
    telephone:                        '<http://schema.org/telephone>',
    temporal:                         '<http://schema.org/temporal>',
    temporalCoverage:                 '<http://schema.org/temporalCoverage>',
    termStatus:                       '<http://www.w3.org/2003/06/sw-vocab-status/ns#term_status>',
    text:                             '<http://schema.org/text>',
    thumbnail:                        '<http://schema.org/thumbnail>',
    thumbnailUrl:                     '<http://schema.org/thumbnailUrl>',
    tickerSymbol:                     '<http://schema.org/tickerSymbol>',
    ticketNumber:                     '<http://schema.org/ticketNumber>',
    ticketToken:                      '<http://schema.org/ticketToken>',
    ticketedSeat:                     '<http://schema.org/ticketedSeat>',
    timeRequired:                     '<http://schema.org/timeRequired>',
    title:                            '<http://purl.org/dc/terms/title>',
    toLocation:                       '<http://schema.org/toLocation>',
    totalPaymentDue:                  '<http://schema.org/totalPaymentDue>',
    totalPrice:                       '<http://schema.org/totalPrice>',
    totalTime:                        '<http://schema.org/totalTime>',
    track:                            '<http://schema.org/track>',
    trackingNumber:                   '<http://schema.org/trackingNumber>',
    trackingUrl:                      '<http://schema.org/trackingUrl>',
    tracks:                           '<http://schema.org/tracks>',
    trailer:                          '<http://schema.org/trailer>',
    trainName:                        '<http://schema.org/trainName>',
    trainNumber:                      '<http://schema.org/trainNumber>',
    transFatContent:                  '<http://schema.org/transFatContent>',
    transcript:                       '<http://schema.org/transcript>',
    translator:                       '<http://schema.org/translator>',
    type:                             '<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>',
    typeOfBed:                        '<http://schema.org/typeOfBed>',
    typeOfGood:                       '<http://schema.org/typeOfGood>',
    typicalAgeRange:                  '<http://schema.org/typicalAgeRange>',
    underName:                        '<http://schema.org/underName>',
    unionOf:                          '<http://www.w3.org/2002/07/owl#unionOf>',
    unitCode:                         '<http://schema.org/unitCode>',
    unitText:                         '<http://schema.org/unitText>',
    unsaturatedFatContent:            '<http://schema.org/unsaturatedFatContent>',
    uploadDate:                       '<http://schema.org/uploadDate>',
    upvoteCount:                      '<http://schema.org/upvoteCount>',
    url:                              '<http://schema.org/url>',
    urlTemplate:                      '<http://schema.org/urlTemplate>',
    userInteractionCount:             '<http://schema.org/userInteractionCount>',
    validFor:                         '<http://schema.org/validFor>',
    validFrom:                        '<http://schema.org/validFrom>',
    validIn:                          '<http://schema.org/validIn>',
    validThrough:                     '<http://schema.org/validThrough>',
    validUntil:                       '<http://schema.org/validUntil>',
    value:                            '<http://schema.org/value>',
    valueAddedTaxIncluded:            '<http://schema.org/valueAddedTaxIncluded>',
    valueMaxLength:                   '<http://schema.org/valueMaxLength>',
    valueMinLength:                   '<http://schema.org/valueMinLength>',
    valueName:                        '<http://schema.org/valueName>',
    valuePattern:                     '<http://schema.org/valuePattern>',
    valueReference:                   '<http://schema.org/valueReference>',
    valueRequired:                    '<http://schema.org/valueRequired>',
    vatID:                            '<http://schema.org/vatID>',
    vehicleConfiguration:             '<http://schema.org/vehicleConfiguration>',
    vehicleEngine:                    '<http://schema.org/vehicleEngine>',
    vehicleIdentificationNumber:      '<http://schema.org/vehicleIdentificationNumber>',
    vehicleInteriorColor:             '<http://schema.org/vehicleInteriorColor>',
    vehicleInteriorType:              '<http://schema.org/vehicleInteriorType>',
    vehicleModelDate:                 '<http://schema.org/vehicleModelDate>',
    vehicleSeatingCapacity:           '<http://schema.org/vehicleSeatingCapacity>',
    vehicleSpecialUsage:              '<http://schema.org/vehicleSpecialUsage>',
    vehicleTransmission:              '<http://schema.org/vehicleTransmission>',
    vendor:                           '<http://schema.org/vendor>',
    version:                          '<http://schema.org/version>',
    versionInfo:                      '<http://www.w3.org/2002/07/owl#versionInfo>',
    video:                            '<http://schema.org/video>',
    videoFormat:                      '<http://schema.org/videoFormat>',
    videoFrameSize:                   '<http://schema.org/videoFrameSize>',
    videoQuality:                     '<http://schema.org/videoQuality>',
    volumeNumber:                     '<http://schema.org/volumeNumber>',
    warranty:                         '<http://schema.org/warranty>',
    warrantyPromise:                  '<http://schema.org/warrantyPromise>',
    warrantyScope:                    '<http://schema.org/warrantyScope>',
    webCheckinTime:                   '<http://schema.org/webCheckinTime>',
    weight:                           '<http://schema.org/weight>',
    width:                            '<http://schema.org/width>',
    winner:                           '<http://schema.org/winner>',
    wordCount:                        '<http://schema.org/wordCount>',
    workExample:                      '<http://schema.org/workExample>',
    workFeatured:                     '<http://schema.org/workFeatured>',
    workHours:                        '<http://schema.org/workHours>',
    workLocation:                     '<http://schema.org/workLocation>',
    workPerformed:                    '<http://schema.org/workPerformed>',
    workPresented:                    '<http://schema.org/workPresented>',
    worksFor:                         '<http://schema.org/worksFor>',
    worstRating:                      '<http://schema.org/worstRating>',
    yearlyRevenue:                    '<http://schema.org/yearlyRevenue>',
    yearsInOperation:                 '<http://schema.org/yearsInOperation>'
  },
  contributor:                      {
    description:    'A secondary contributor to the CreativeWork or Event.',
    domainIncludes: [
      'CreativeWork',
      'Event'
    ],
    id:             'contributor',
    label:          'contributor',
    rangeIncludes:  [
      'Organization',
      'Person'
    ],
    type:           'Property'
  },
  cookTime:                         {
    description:    'The time it takes to actually cook the dish, in <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO 8601 duration format</a>.',
    domainIncludes: 'Recipe',
    id:             'cookTime',
    label:          'cookTime',
    rangeIncludes:  'Duration',
    type:           'Property'
  },
  cookingMethod:                    {
    description:    'The method of cooking, such as Frying, Steaming, ...',
    domainIncludes: 'Recipe',
    id:             'cookingMethod',
    label:          'cookingMethod',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  copyrightHolder:                  {
    description:    'The party holding the legal copyright to the CreativeWork.',
    domainIncludes: 'CreativeWork',
    id:             'copyrightHolder',
    label:          'copyrightHolder',
    rangeIncludes:  [
      'Organization',
      'Person'
    ],
    type:           'Property'
  },
  copyrightYear:                    {
    description:    'The year during which the claimed copyright for the CreativeWork was first asserted.',
    domainIncludes: 'CreativeWork',
    id:             'copyrightYear',
    label:          'copyrightYear',
    rangeIncludes:  'Number',
    type:           'Property'
  },
  countriesNotSupported:            {
    description:    'Countries for which the application is not supported. You can also provide the two-letter ISO 3166-1 alpha-2 country code.',
    domainIncludes: 'SoftwareApplication',
    id:             'countriesNotSupported',
    label:          'countriesNotSupported',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  countriesSupported:               {
    description:    'Countries for which the application is supported. You can also provide the two-letter ISO 3166-1 alpha-2 country code.',
    domainIncludes: 'SoftwareApplication',
    id:             'countriesSupported',
    label:          'countriesSupported',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  countryOfOrigin:                  {
    description:    'The country of the principal offices of the production company or individual responsible for the movie or program.',
    domainIncludes: [
      'Movie',
      'TVSeries',
      'TVEpisode',
      'TVSeason'
    ],
    id:             'countryOfOrigin',
    label:          'countryOfOrigin',
    rangeIncludes:  'Country',
    type:           'Property'
  },
  course:                           {
    description:    'A sub property of location. The course where this action was taken.',
    domainIncludes: 'ExerciseAction',
    id:             'course',
    label:          'course',
    rangeIncludes:  'Place',
    subPropertyOf:  'location',
    supersededBy:   'exerciseCourse',
    type:           'Property'
  },
  coverageEndTime:                  {
    description:    'The time when the live blog will stop covering the Event. Note that coverage may continue after the Event concludes.',
    domainIncludes: 'LiveBlogPosting',
    id:             'coverageEndTime',
    label:          'coverageEndTime',
    rangeIncludes:  'DateTime',
    type:           'Property'
  },
  coverageStartTime:                {
    description:    'The time when the live blog will begin covering the Event. Note that coverage may begin before the Event\'s start time. The LiveBlogPosting may also be created before coverage begins.',
    domainIncludes: 'LiveBlogPosting',
    id:             'coverageStartTime',
    label:          'coverageStartTime',
    rangeIncludes:  'DateTime',
    type:           'Property'
  },
  creator:                          {
    description:    'The creator/author of this CreativeWork. This is the same as the Author property for CreativeWork.',
    domainIncludes: [
      'UserComments',
      'CreativeWork'
    ],
    id:             'creator',
    label:          'creator',
    rangeIncludes:  [
      'Person',
      'Organization'
    ],
    type:           'Property'
  },
  creditedTo:                       {
    description:    'The group the release is credited to if different than the byArtist. For example, Red and Blue is credited to "Stefani Germanotta Band", but by Lady Gaga.',
    domainIncludes: 'MusicRelease',
    id:             'creditedTo',
    label:          'creditedTo',
    rangeIncludes:  [
      'Person',
      'Organization'
    ],
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ',
    type:           'Property'
  },
  currenciesAccepted:               {
    description:    'The currency accepted (in <a href="http://en.wikipedia.org/wiki/ISO_4217">ISO 4217 currency format</a>).',
    domainIncludes: 'LocalBusiness',
    id:             'currenciesAccepted',
    label:          'currenciesAccepted',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  currency:                         {
    description:    'The currency in which the monetary amount is expressed (in 3-letter <a href="http://en.wikipedia.org/wiki/ISO_4217">ISO 4217</a> format).',
    domainIncludes: [
      'MonetaryAmount',
      'DatedMoneySpecification'
    ],
    id:             'currency',
    label:          'currency',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  customer:                         {
    description:    'Party placing the order or paying the invoice.',
    domainIncludes: [
      'Order',
      'Invoice'
    ],
    id:             'customer',
    label:          'customer',
    rangeIncludes:  [
      'Organization',
      'Person'
    ],
    type:           'Property'
  },
  dataFeedElement:                  {
    description:    'An item within in a data feed. Data feeds may have many elements.',
    domainIncludes: 'DataFeed',
    id:             'dataFeedElement',
    label:          'dataFeedElement',
    rangeIncludes:  [
      'Thing',
      'DataFeedItem',
      'Text'
    ],
    type:           'Property'
  },
  dataset:                          {
    description:    'A dataset contained in this catalog.',
    domainIncludes: 'DataCatalog',
    id:             'dataset',
    inverseOf:      'includedInDataCatalog',
    label:          'dataset',
    rangeIncludes:  'Dataset',
    type:           'Property'
  },
  datasetTimeInterval:              {
    description:    'The range of temporal applicability of a dataset, e.g. for a 2011 census dataset, the year 2011 (in ISO 8601 time interval format).',
    domainIncludes: 'Dataset',
    id:             'datasetTimeInterval',
    label:          'datasetTimeInterval',
    rangeIncludes:  'DateTime',
    supersededBy:   'temporalCoverage',
    type:           'Property'
  },
  dateCreated:                      {
    description:    'The date on which the CreativeWork was created or the item was added to a DataFeed.',
    domainIncludes: [
      'DataFeedItem',
      'CreativeWork'
    ],
    id:             'dateCreated',
    label:          'dateCreated',
    rangeIncludes:  [
      'DateTime',
      'Date'
    ],
    type:           'Property'
  },
  dateDeleted:                      {
    description:    'The datetime the item was removed from the DataFeed.',
    domainIncludes: 'DataFeedItem',
    id:             'dateDeleted',
    label:          'dateDeleted',
    rangeIncludes:  'DateTime',
    type:           'Property'
  },
  dateIssued:                       {
    description:    'The date the ticket was issued.',
    domainIncludes: 'Ticket',
    id:             'dateIssued',
    label:          'dateIssued',
    rangeIncludes:  'DateTime',
    type:           'Property'
  },
  dateModified:                     {
    description:    'The date on which the CreativeWork was most recently modified or when the item\'s entry was modified within a DataFeed.',
    domainIncludes: [
      'CreativeWork',
      'DataFeedItem'
    ],
    id:             'dateModified',
    label:          'dateModified',
    rangeIncludes:  [
      'Date',
      'DateTime'
    ],
    type:           'Property'
  },
  datePosted:                       {
    description:    'Publication date for the job posting.',
    domainIncludes: 'JobPosting',
    id:             'datePosted',
    label:          'datePosted',
    rangeIncludes:  'Date',
    type:           'Property'
  },
  datePublished:                    {
    description:    'Date of first broadcast/publication.',
    domainIncludes: 'CreativeWork',
    id:             'datePublished',
    label:          'datePublished',
    rangeIncludes:  'Date',
    type:           'Property'
  },
  dateRead:                         {
    description:    'The date/time at which the message has been read by the recipient if a single recipient exists.',
    domainIncludes: 'Message',
    id:             'dateRead',
    label:          'dateRead',
    rangeIncludes:  'DateTime',
    type:           'Property'
  },
  dateReceived:                     {
    description:    'The date/time the message was received if a single recipient exists.',
    domainIncludes: 'Message',
    id:             'dateReceived',
    label:          'dateReceived',
    rangeIncludes:  'DateTime',
    type:           'Property'
  },
  dateSent:                         {
    description:    'The date/time at which the message was sent.',
    domainIncludes: 'Message',
    id:             'dateSent',
    label:          'dateSent',
    rangeIncludes:  'DateTime',
    type:           'Property'
  },
  dateVehicleFirstRegistered:       {
    description:    'The date of the first registration of the vehicle with the respective public authorities.',
    domainIncludes: 'Vehicle',
    id:             'dateVehicleFirstRegistered',
    label:          'dateVehicleFirstRegistered',
    rangeIncludes:  'Date',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group',
    type:           'Property'
  },
  dateline:                         {
    description:    'The location where the NewsArticle was produced.',
    domainIncludes: 'NewsArticle',
    id:             'dateline',
    label:          'dateline',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  dayOfWeek:                        {
    description:    'The day of the week for which these opening hours are valid.',
    domainIncludes: 'OpeningHoursSpecification',
    id:             'dayOfWeek',
    label:          'dayOfWeek',
    rangeIncludes:  'DayOfWeek',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  deathDate:                        {
    description:    'Date of death.',
    domainIncludes: 'Person',
    id:             'deathDate',
    label:          'deathDate',
    rangeIncludes:  'Date',
    type:           'Property'
  },
  deathPlace:                       {
    description:    'The place where the person died.',
    domainIncludes: 'Person',
    id:             'deathPlace',
    label:          'deathPlace',
    rangeIncludes:  'Place',
    type:           'Property'
  },
  defaultValue:                     {
    description:    'The default value of the input.  For properties that expect a literal, the default is a literal value, for properties that expect an object, it\'s an ID reference to one of the current values.',
    domainIncludes: 'PropertyValueSpecification',
    id:             'defaultValue',
    label:          'defaultValue',
    rangeIncludes:  [
      'Thing',
      'Text'
    ],
    type:           'Property'
  },
  deliveryAddress:                  {
    description:    'Destination address.',
    domainIncludes: 'ParcelDelivery',
    id:             'deliveryAddress',
    label:          'deliveryAddress',
    rangeIncludes:  'PostalAddress',
    type:           'Property'
  },
  deliveryLeadTime:                 {
    description:    'The typical delay between the receipt of the order and the goods either leaving the warehouse or being prepared for pickup, in case the delivery method is on site pickup.',
    domainIncludes: [
      'Demand',
      'Offer'
    ],
    id:             'deliveryLeadTime',
    label:          'deliveryLeadTime',
    rangeIncludes:  'QuantitativeValue',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  deliveryMethod:                   {
    description:    'A sub property of instrument. The method of delivery.',
    domainIncludes: [
      'OrderAction',
      'SendAction',
      'TrackAction',
      'ReceiveAction'
    ],
    id:             'deliveryMethod',
    label:          'deliveryMethod',
    rangeIncludes:  'DeliveryMethod',
    subPropertyOf:  'instrument',
    type:           'Property'
  },
  deliveryStatus:                   {
    description:    'New entry added as the package passes through each leg of its journey (from shipment to final delivery).',
    domainIncludes: 'ParcelDelivery',
    id:             'deliveryStatus',
    label:          'deliveryStatus',
    rangeIncludes:  'DeliveryEvent',
    type:           'Property'
  },
  department:                       {
    description:    'A relationship between an organization and a department of that organization, also described as an organization (allowing different urls, logos, opening hours). For example: a store with a pharmacy, or a bakery with a cafe.',
    domainIncludes: 'Organization',
    id:             'department',
    label:          'department',
    rangeIncludes:  'Organization',
    type:           'Property'
  },
  departureAirport:                 {
    description:    'The airport where the flight originates.',
    domainIncludes: 'Flight',
    id:             'departureAirport',
    label:          'departureAirport',
    rangeIncludes:  'Airport',
    type:           'Property'
  },
  departureBusStop:                 {
    description:    'The stop or station from which the bus departs.',
    domainIncludes: 'BusTrip',
    id:             'departureBusStop',
    label:          'departureBusStop',
    rangeIncludes:  [
      'BusStation',
      'BusStop'
    ],
    type:           'Property'
  },
  departureGate:                    {
    description:    'Identifier of the flight\'s departure gate.',
    domainIncludes: 'Flight',
    id:             'departureGate',
    label:          'departureGate',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  departurePlatform:                {
    description:    'The platform from which the train departs.',
    domainIncludes: 'TrainTrip',
    id:             'departurePlatform',
    label:          'departurePlatform',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  departureStation:                 {
    description:    'The station from which the train departs.',
    domainIncludes: 'TrainTrip',
    id:             'departureStation',
    label:          'departureStation',
    rangeIncludes:  'TrainStation',
    type:           'Property'
  },
  departureTerminal:                {
    description:    'Identifier of the flight\'s departure terminal.',
    domainIncludes: 'Flight',
    id:             'departureTerminal',
    label:          'departureTerminal',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  departureTime:                    {
    description:    'The expected departure time.',
    domainIncludes: [
      'Flight',
      'BusTrip',
      'TrainTrip'
    ],
    id:             'departureTime',
    label:          'departureTime',
    rangeIncludes:  'DateTime',
    type:           'Property'
  },
  dependencies:                     {
    description:    'Prerequisites needed to fulfill steps in article.',
    domainIncludes: 'TechArticle',
    id:             'dependencies',
    label:          'dependencies',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  depth:                            {
    description:    'The depth of the item.',
    domainIncludes: [
      'Product',
      'VisualArtwork'
    ],
    id:             'depth',
    label:          'depth',
    rangeIncludes:  [
      'Distance',
      'QuantitativeValue'
    ],
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  description:                      {
    description:        'A description of the item.',
    domainIncludes:     'Thing',
    equivalentProperty: 'http://purl.org/dc/terms/description',
    id:                 'description',
    label:              'description',
    rangeIncludes:      'Text',
    type:               'Property'
  },
  device:                           {
    description:    'Device required to run the application. Used in cases where a specific make/model is required to run the application.',
    domainIncludes: 'SoftwareApplication',
    id:             'device',
    label:          'device',
    rangeIncludes:  'Text',
    supersededBy:   'availableOnDevice',
    type:           'Property'
  },
  director:                         {
    description:    'A director of e.g. tv, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip.',
    domainIncludes: [
      'VideoGameSeries',
      'MovieSeries',
      'VideoObject',
      'VideoGame',
      'Episode',
      'RadioSeries',
      'Event',
      'Movie',
      'TVSeries',
      'Clip',
      'CreativeWorkSeason'
    ],
    id:             'director',
    label:          'director',
    rangeIncludes:  'Person',
    type:           'Property'
  },
  directors:                        {
    description:    'A director of e.g. tv, radio, movie, video games etc. content. Directors can be associated with individual items or with a series, episode, clip.',
    domainIncludes: [
      'VideoObject',
      'TVSeries',
      'VideoGameSeries',
      'Episode',
      'Clip',
      'RadioSeries',
      'MovieSeries',
      'Movie',
      'VideoGame'
    ],
    id:             'directors',
    label:          'directors',
    rangeIncludes:  'Person',
    supersededBy:   'director',
    type:           'Property'
  },
  disambiguatingDescription:        {
    description:    'A sub property of description. A short description of the item used to disambiguate from other, similar items. Information from other properties (in particular, name) may be necessary for the description to be useful for disambiguation.',
    domainIncludes: 'Thing',
    id:             'disambiguatingDescription',
    label:          'disambiguatingDescription',
    rangeIncludes:  'Text',
    subPropertyOf:  'description',
    type:           'Property'
  },
  discount:                         {
    description:    'Any discount applied (to an Order).',
    domainIncludes: 'Order',
    id:             'discount',
    label:          'discount',
    rangeIncludes:  [
      'Number',
      'Text'
    ],
    type:           'Property'
  },
  discountCode:                     {
    description:    'Code used to redeem a discount.',
    domainIncludes: 'Order',
    id:             'discountCode',
    label:          'discountCode',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  discountCurrency:                 {
    description:    'The currency (in 3-letter ISO 4217 format) of the discount.',
    domainIncludes: 'Order',
    id:             'discountCurrency',
    label:          'discountCurrency',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  discusses:                        {
    description:    'Specifies the CreativeWork associated with the UserComment.',
    domainIncludes: 'UserComments',
    id:             'discusses',
    label:          'discusses',
    rangeIncludes:  'CreativeWork',
    type:           'Property'
  },
  discussionUrl:                    {
    description:    'A link to the page containing the comments of the CreativeWork.',
    domainIncludes: 'CreativeWork',
    id:             'discussionUrl',
    label:          'discussionUrl',
    rangeIncludes:  'URL',
    type:           'Property'
  },
  dissolutionDate:                  {
    description:    'The date that this organization was dissolved.',
    domainIncludes: 'Organization',
    id:             'dissolutionDate',
    label:          'dissolutionDate',
    rangeIncludes:  'Date',
    type:           'Property'
  },
  distance:                         {
    description:    'The distance travelled, e.g. exercising or travelling.',
    domainIncludes: [
      'ExerciseAction',
      'TravelAction'
    ],
    id:             'distance',
    label:          'distance',
    rangeIncludes:  'Distance',
    type:           'Property'
  },
  distribution:                     {
    description:    'A downloadable form of this dataset, at a specific location, in a specific format.',
    domainIncludes: 'Dataset',
    id:             'distribution',
    label:          'distribution',
    rangeIncludes:  'DataDownload',
    type:           'Property'
  },
  domainIncludes:                   {
    id: 'domainIncludes'
  },
  doorTime:                         {
    description:    'The time admission will commence.',
    domainIncludes: 'Event',
    id:             'doorTime',
    label:          'doorTime',
    rangeIncludes:  'DateTime',
    type:           'Property'
  },
  downloadUrl:                      {
    description:    'If the file can be downloaded, URL to download the binary.',
    domainIncludes: 'SoftwareApplication',
    id:             'downloadUrl',
    label:          'downloadUrl',
    rangeIncludes:  'URL',
    type:           'Property'
  },
  downvoteCount:                    {
    description:    'The number of downvotes this question, answer or comment has received from the community.',
    domainIncludes: [
      'Comment',
      'Question'
    ],
    id:             'downvoteCount',
    label:          'downvoteCount',
    rangeIncludes:  'Integer',
    type:           'Property'
  },
  driveWheelConfiguration:          {
    description:    'The drive wheel configuration, i.e. which roadwheels will receive torque from the vehicle\'s engine via the drivetrain.',
    domainIncludes: 'Vehicle',
    id:             'driveWheelConfiguration',
    label:          'driveWheelConfiguration',
    rangeIncludes:  [
      'Text',
      'DriveWheelConfigurationValue'
    ],
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group',
    type:           'Property'
  },
  dropoffLocation:                  {
    description:    'Where a rental car can be dropped off.',
    domainIncludes: 'RentalCarReservation',
    id:             'dropoffLocation',
    label:          'dropoffLocation',
    rangeIncludes:  'Place',
    type:           'Property'
  },
  dropoffTime:                      {
    description:    'When a rental car can be dropped off.',
    domainIncludes: 'RentalCarReservation',
    id:             'dropoffTime',
    label:          'dropoffTime',
    rangeIncludes:  'DateTime',
    type:           'Property'
  },
  duns:                             {
    description:    'The Dun &amp; Bradstreet DUNS number for identifying an organization or business person.',
    domainIncludes: [
      'Organization',
      'Person'
    ],
    id:             'duns',
    label:          'duns',
    rangeIncludes:  'Text',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  duration:                         {
    description:    'The duration of the item (movie, audio recording, event, etc.) in <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO 8601 date format</a>.',
    domainIncludes: [
      'MediaObject',
      'MusicRecording',
      'MusicRelease',
      'Movie',
      'Event'
    ],
    id:             'duration',
    label:          'duration',
    rangeIncludes:  'Duration',
    type:           'Property'
  },
  durationOfWarranty:               {
    description:    'The duration of the warranty promise. Common unitCode values are ANN for year, MON for months, or DAY for days.',
    domainIncludes: 'WarrantyPromise',
    id:             'durationOfWarranty',
    label:          'durationOfWarranty',
    rangeIncludes:  'QuantitativeValue',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  editor:                           {
    description:    'Specifies the Person who edited the CreativeWork.',
    domainIncludes: 'CreativeWork',
    id:             'editor',
    label:          'editor',
    rangeIncludes:  'Person',
    type:           'Property'
  },
  educationRequirements:            {
    description:    'Educational background needed for the position.',
    domainIncludes: 'JobPosting',
    id:             'educationRequirements',
    label:          'educationRequirements',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  educationalAlignment:             {
    description:    'An alignment to an established educational framework.',
    domainIncludes: 'CreativeWork',
    id:             'educationalAlignment',
    label:          'educationalAlignment',
    rangeIncludes:  'AlignmentObject',
    type:           'Property'
  },
  educationalFramework:             {
    description:    'The framework to which the resource being described is aligned.',
    domainIncludes: 'AlignmentObject',
    id:             'educationalFramework',
    label:          'educationalFramework',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  educationalRole:                  {
    description:    'An educationalRole of an EducationalAudience.',
    domainIncludes: 'EducationalAudience',
    id:             'educationalRole',
    label:          'educationalRole',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  educationalUse:                   {
    description:    'The purpose of a work in the context of education; for example, \'assignment\', \'group work\'.',
    domainIncludes: 'CreativeWork',
    id:             'educationalUse',
    label:          'educationalUse',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  elevation:                        {
    description:    'The elevation of a location (<a href="https://en.wikipedia.org/wiki/World_Geodetic_System">WGS 84</a>).',
    domainIncludes: [
      'GeoCoordinates',
      'GeoShape'
    ],
    id:             'elevation',
    label:          'elevation',
    rangeIncludes:  [
      'Number',
      'Text'
    ],
    type:           'Property'
  },
  eligibleCustomerType:             {
    description:    'The type(s) of customers for which the given offer is valid.',
    domainIncludes: [
      'Demand',
      'Offer'
    ],
    id:             'eligibleCustomerType',
    label:          'eligibleCustomerType',
    rangeIncludes:  'BusinessEntityType',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  eligibleDuration:                 {
    description:    'The duration for which the given offer is valid.',
    domainIncludes: [
      'Demand',
      'Offer'
    ],
    id:             'eligibleDuration',
    label:          'eligibleDuration',
    rangeIncludes:  'QuantitativeValue',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  eligibleQuantity:                 {
    description:    'The interval and unit of measurement of ordering quantities for which the offer or price specification is valid. This allows e.g. specifying that a certain freight charge is valid only for a certain quantity.',
    domainIncludes: [
      'Demand',
      'Offer',
      'PriceSpecification'
    ],
    id:             'eligibleQuantity',
    label:          'eligibleQuantity',
    rangeIncludes:  'QuantitativeValue',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  eligibleRegion:                   {
    description:    'The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is valid.</p>\n<p>See also <a class="localLink" href="/ineligibleRegion">ineligibleRegion</a>.',
    domainIncludes: [
      'Offer',
      'Demand',
      'DeliveryChargeSpecification'
    ],
    id:             'eligibleRegion',
    label:          'eligibleRegion',
    rangeIncludes:  [
      'Text',
      'Place',
      'GeoShape'
    ],
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    subPropertyOf:  'areaServed',
    type:           'Property'
  },
  eligibleTransactionVolume:        {
    description:    'The transaction volume, in a monetary unit, for which the offer or price specification is valid, e.g. for indicating a minimal purchasing volume, to express free shipping above a certain order volume, or to limit the acceptance of credit cards to purchases to a certain minimal amount.',
    domainIncludes: [
      'Demand',
      'Offer',
      'PriceSpecification'
    ],
    id:             'eligibleTransactionVolume',
    label:          'eligibleTransactionVolume',
    rangeIncludes:  'PriceSpecification',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  email:                            {
    description:    'Email address.',
    domainIncludes: [
      'Person',
      'Organization',
      'ContactPoint'
    ],
    id:             'email',
    label:          'email',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  embedUrl:                         {
    description:    'A URL pointing to a player for a specific video. In general, this is the information in the <code>src</code> element of an <code>embed</code> tag and should not be the same as the content of the <code>loc</code> tag.',
    domainIncludes: 'MediaObject',
    id:             'embedUrl',
    label:          'embedUrl',
    rangeIncludes:  'URL',
    type:           'Property'
  },
  employee:                         {
    description:    'Someone working for this organization.',
    domainIncludes: 'Organization',
    id:             'employee',
    label:          'employee',
    rangeIncludes:  'Person',
    type:           'Property'
  },
  employees:                        {
    description:    'People working for this organization.',
    domainIncludes: 'Organization',
    id:             'employees',
    label:          'employees',
    rangeIncludes:  'Person',
    supersededBy:   'employee',
    type:           'Property'
  },
  employmentType:                   {
    description:    'Type of employment (e.g. full-time, part-time, contract, temporary, seasonal, internship).',
    domainIncludes: 'JobPosting',
    id:             'employmentType',
    label:          'employmentType',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  encodesCreativeWork:              {
    description:    'The CreativeWork encoded by this media object.',
    domainIncludes: 'MediaObject',
    id:             'encodesCreativeWork',
    label:          'encodesCreativeWork',
    rangeIncludes:  'CreativeWork',
    type:           'Property'
  },
  encoding:                         {
    description:    'A media object that encodes this CreativeWork. This property is a synonym for associatedMedia.',
    domainIncludes: 'CreativeWork',
    id:             'encoding',
    label:          'encoding',
    rangeIncludes:  'MediaObject',
    type:           'Property'
  },
  encodingFormat:                   {
    description:    'mp3, mpeg4, etc.',
    domainIncludes: 'MediaObject',
    id:             'encodingFormat',
    label:          'encodingFormat',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  encodingType:                     {
    description:    'The supported encoding type(s) for an EntryPoint request.',
    domainIncludes: 'EntryPoint',
    id:             'encodingType',
    label:          'encodingType',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  encodings:                        {
    description:    'A media object that encodes this CreativeWork.',
    domainIncludes: 'CreativeWork',
    id:             'encodings',
    label:          'encodings',
    rangeIncludes:  'MediaObject',
    supersededBy:   'encoding',
    type:           'Property'
  },
  endDate:                          {
    description:    'The end date and time of the item (in <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO 8601 date format</a>).',
    domainIncludes: [
      'CreativeWorkSeries',
      'DatedMoneySpecification',
      'Role',
      'Event',
      'CreativeWorkSeason'
    ],
    id:             'endDate',
    label:          'endDate',
    rangeIncludes:  [
      'DateTime',
      'Date'
    ],
    type:           'Property'
  },
  endTime:                          {
    description:    'The endTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to end. For actions that span a period of time, when the action was performed. e.g. John wrote a book from January to <em>December</em>.</p>\n<p>Note that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.',
    domainIncludes: [
      'FoodEstablishmentReservation',
      'Action'
    ],
    id:             'endTime',
    label:          'endTime',
    rangeIncludes:  'DateTime',
    type:           'Property'
  },
  endorsee:                         {
    description:    'A sub property of participant. The person/organization being supported.',
    domainIncludes: 'EndorseAction',
    id:             'endorsee',
    label:          'endorsee',
    rangeIncludes:  [
      'Person',
      'Organization'
    ],
    subPropertyOf:  'participant',
    type:           'Property'
  },
  entertainmentBusiness:            {
    description:    'A sub property of location. The entertainment business where the action occurred.',
    domainIncludes: 'PerformAction',
    id:             'entertainmentBusiness',
    label:          'entertainmentBusiness',
    rangeIncludes:  'EntertainmentBusiness',
    subPropertyOf:  'location',
    type:           'Property'
  },
  episode:                          {
    description:    'An episode of a tv, radio or game media within a series or season.',
    domainIncludes: [
      'CreativeWorkSeason',
      'RadioSeries',
      'VideoGameSeries',
      'TVSeries'
    ],
    id:             'episode',
    label:          'episode',
    rangeIncludes:  'Episode',
    subPropertyOf:  'hasPart',
    type:           'Property'
  },
  episodeNumber:                    {
    description:    'Position of the episode within an ordered group of episodes.',
    domainIncludes: 'Episode',
    id:             'episodeNumber',
    label:          'episodeNumber',
    rangeIncludes:  [
      'Integer',
      'Text'
    ],
    subPropertyOf:  'position',
    type:           'Property'
  },
  episodes:                         {
    description:    'An episode of a TV/radio series or season.',
    domainIncludes: [
      'TVSeries',
      'VideoGameSeries',
      'RadioSeries',
      'CreativeWorkSeason'
    ],
    id:             'episodes',
    label:          'episodes',
    rangeIncludes:  'Episode',
    supersededBy:   'episode',
    type:           'Property'
  },
  equal:                            {
    description:    'This ordering relation for qualitative values indicates that the subject is equal to the object.',
    domainIncludes: 'QualitativeValue',
    id:             'equal',
    label:          'equal',
    rangeIncludes:  'QualitativeValue',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  error:                            {
    description:    'For failed actions, more information on the cause of the failure.',
    domainIncludes: 'Action',
    id:             'error',
    label:          'error',
    rangeIncludes:  'Thing',
    type:           'Property'
  },
  estimatedFlightDuration:          {
    description:    'The estimated time the flight will take.',
    domainIncludes: 'Flight',
    id:             'estimatedFlightDuration',
    label:          'estimatedFlightDuration',
    rangeIncludes:  [
      'Duration',
      'Text'
    ],
    type:           'Property'
  },
  event:                            {
    description:    'Upcoming or past event associated with this place, organization, or action.',
    domainIncludes: [
      'Place',
      'LeaveAction',
      'InviteAction',
      'Organization',
      'InformAction',
      'JoinAction',
      'PlayAction'
    ],
    id:             'event',
    label:          'event',
    rangeIncludes:  'Event',
    type:           'Property'
  },
  eventStatus:                      {
    description:    'An eventStatus of an event represents its status; particularly useful when an event is cancelled or rescheduled.',
    domainIncludes: 'Event',
    id:             'eventStatus',
    label:          'eventStatus',
    rangeIncludes:  'EventStatusType',
    type:           'Property'
  },
  events:                           {
    description:    'Upcoming or past events associated with this place or organization.',
    domainIncludes: [
      'Place',
      'Organization'
    ],
    id:             'events',
    label:          'events',
    rangeIncludes:  'Event',
    supersededBy:   'event',
    type:           'Property'
  },
  exampleOfWork:                    {
    description:    'A creative work that this work is an example/instance/realization/derivation of.',
    domainIncludes: 'CreativeWork',
    id:             'exampleOfWork',
    inverseOf:      'workExample',
    label:          'exampleOfWork',
    rangeIncludes:  'CreativeWork',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_bibex',
    type:           'Property'
  },
  executableLibraryName:            {
    description:    'Library file name e.g., mscorlib.dll, system.web.dll.',
    domainIncludes: 'APIReference',
    id:             'executableLibraryName',
    label:          'executableLibraryName',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  exerciseCourse:                   {
    description:    'A sub property of location. The course where this action was taken.',
    domainIncludes: 'ExerciseAction',
    id:             'exerciseCourse',
    label:          'exerciseCourse',
    rangeIncludes:  'Place',
    subPropertyOf:  'location',
    type:           'Property'
  },
  exifData:                         {
    description:    'exif data for this object.',
    domainIncludes: 'ImageObject',
    id:             'exifData',
    label:          'exifData',
    rangeIncludes:  [
      'Text',
      'PropertyValue'
    ],
    type:           'Property'
  },
  expectedArrivalFrom:              {
    description:    'The earliest date the package may arrive.',
    domainIncludes: 'ParcelDelivery',
    id:             'expectedArrivalFrom',
    label:          'expectedArrivalFrom',
    rangeIncludes:  'DateTime',
    type:           'Property'
  },
  expectedArrivalUntil:             {
    description:    'The latest date the package may arrive.',
    domainIncludes: 'ParcelDelivery',
    id:             'expectedArrivalUntil',
    label:          'expectedArrivalUntil',
    rangeIncludes:  'DateTime',
    type:           'Property'
  },
  expectsAcceptanceOf:              {
    description:    'An Offer which must be accepted before the user can perform the Action. For example, the user may need to buy a movie before being able to watch it.',
    domainIncludes: 'ConsumeAction',
    id:             'expectsAcceptanceOf',
    label:          'expectsAcceptanceOf',
    rangeIncludes:  'Offer',
    type:           'Property'
  },
  experienceRequirements:           {
    description:    'Description of skills and experience needed for the position.',
    domainIncludes: 'JobPosting',
    id:             'experienceRequirements',
    label:          'experienceRequirements',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  expires:                          {
    description:    'Date the content expires and is no longer useful or available. Useful for videos.',
    domainIncludes: 'MediaObject',
    id:             'expires',
    label:          'expires',
    rangeIncludes:  'Date',
    type:           'Property'
  },
  familyName:                       {
    description:    'Family name. In the U.S., the last name of an Person. This can be used along with givenName instead of the name property.',
    domainIncludes: 'Person',
    id:             'familyName',
    label:          'familyName',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  fatContent:                       {
    description:    'The number of grams of fat.',
    domainIncludes: 'NutritionInformation',
    id:             'fatContent',
    label:          'fatContent',
    rangeIncludes:  'Mass',
    type:           'Property'
  },
  faxNumber:                        {
    description:    'The fax number.',
    domainIncludes: [
      'Place',
      'Organization',
      'Person',
      'ContactPoint'
    ],
    id:             'faxNumber',
    label:          'faxNumber',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  featureList:                      {
    description:    'Features or modules provided by this application (and possibly required by other applications).',
    domainIncludes: 'SoftwareApplication',
    id:             'featureList',
    label:          'featureList',
    rangeIncludes:  [
      'URL',
      'Text'
    ],
    type:           'Property'
  },
  feesAndCommissionsSpecification:  {
    description:    'Description of fees, commissions, and other terms applied either to a class of financial product, or by a financial service organization.',
    domainIncludes: [
      'FinancialProduct',
      'FinancialService'
    ],
    id:             'feesAndCommissionsSpecification',
    label:          'feesAndCommissionsSpecification',
    rangeIncludes:  [
      'URL',
      'Text'
    ],
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO',
    type:           'Property'
  },
  fiberContent:                     {
    description:    'The number of grams of fiber.',
    domainIncludes: 'NutritionInformation',
    id:             'fiberContent',
    label:          'fiberContent',
    rangeIncludes:  'Mass',
    type:           'Property'
  },
  fileFormat:                       {
    description:    'Media type, typically MIME format (see <a href="http://www.iana.org/assignments/media-types/media-types.xhtml">IANA site</a>) of the content e.g. application/zip of a SoftwareApplication binary. In cases where a CreativeWork has several media type representations, \'encoding\' can be used to indicate each MediaObject alongside particular fileFormat information. Unregistered or niche file formats can be indicated instead via the most appropriate URL, e.g. defining Web page or a Wikipedia entry.',
    domainIncludes: 'CreativeWork',
    id:             'fileFormat',
    label:          'fileFormat',
    rangeIncludes:  [
      'Text',
      'URL'
    ],
    type:           'Property'
  },
  fileSize:                         {
    description:    'Size of the application / package (e.g. 18MB). In the absence of a unit (MB, KB etc.), KB will be assumed.',
    domainIncludes: 'SoftwareApplication',
    id:             'fileSize',
    label:          'fileSize',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  firstPerformance:                 {
    description:    'The date and place the work was first performed.',
    domainIncludes: 'MusicComposition',
    id:             'firstPerformance',
    label:          'firstPerformance',
    rangeIncludes:  'Event',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ',
    type:           'Property'
  },
  flightDistance:                   {
    description:    'The distance of the flight.',
    domainIncludes: 'Flight',
    id:             'flightDistance',
    label:          'flightDistance',
    rangeIncludes:  [
      'Text',
      'Distance'
    ],
    type:           'Property'
  },
  flightNumber:                     {
    description:    'The unique identifier for a flight including the airline IATA code. For example, if describing United flight 110, where the IATA code for United is \'UA\', the flightNumber is \'UA110\'.',
    domainIncludes: 'Flight',
    id:             'flightNumber',
    label:          'flightNumber',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  floorSize:                        {
    description:    'The size of the accommodation, e.g. in square meter or squarefoot.\nTypical unit code(s): MTK for square meter, FTK for square foot, or YDK for square yard',
    domainIncludes: 'Accommodation',
    id:             'floorSize',
    label:          'floorSize',
    rangeIncludes:  'QuantitativeValue',
    source:         'https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology',
    type:           'Property'
  },
  followee:                         {
    description:    'A sub property of object. The person or organization being followed.',
    domainIncludes: 'FollowAction',
    id:             'followee',
    label:          'followee',
    rangeIncludes:  [
      'Person',
      'Organization'
    ],
    subPropertyOf:  'object',
    type:           'Property'
  },
  follows:                          {
    description:    'The most generic uni-directional social relation.',
    domainIncludes: 'Person',
    id:             'follows',
    label:          'follows',
    rangeIncludes:  'Person',
    type:           'Property'
  },
  foodEstablishment:                {
    description:    'A sub property of location. The specific food establishment where the action occurred.',
    domainIncludes: 'CookAction',
    id:             'foodEstablishment',
    label:          'foodEstablishment',
    rangeIncludes:  [
      'Place',
      'FoodEstablishment'
    ],
    subPropertyOf:  'location',
    type:           'Property'
  },
  foodEvent:                        {
    description:    'A sub property of location. The specific food event where the action occurred.',
    domainIncludes: 'CookAction',
    id:             'foodEvent',
    label:          'foodEvent',
    rangeIncludes:  'FoodEvent',
    subPropertyOf:  'location',
    type:           'Property'
  },
  founder:                          {
    description:    'A person who founded this organization.',
    domainIncludes: 'Organization',
    id:             'founder',
    label:          'founder',
    rangeIncludes:  'Person',
    type:           'Property'
  },
  founders:                         {
    description:    'A person who founded this organization.',
    domainIncludes: 'Organization',
    id:             'founders',
    label:          'founders',
    rangeIncludes:  'Person',
    supersededBy:   'founder',
    type:           'Property'
  },
  foundingDate:                     {
    description:    'The date that this organization was founded.',
    domainIncludes: 'Organization',
    id:             'foundingDate',
    label:          'foundingDate',
    rangeIncludes:  'Date',
    type:           'Property'
  },
  foundingLocation:                 {
    description:    'The place where the Organization was founded.',
    domainIncludes: 'Organization',
    id:             'foundingLocation',
    label:          'foundingLocation',
    rangeIncludes:  'Place',
    type:           'Property'
  },
  free:                             {
    description:    'A flag to signal that the publication is accessible for free.',
    domainIncludes: 'PublicationEvent',
    id:             'free',
    label:          'free',
    rangeIncludes:  'Boolean',
    supersededBy:   'isAccessibleForFree',
    type:           'Property'
  },
  fromLocation:                     {
    description:    'A sub property of location. The original location of the object or the agent before the action.',
    domainIncludes: [
      'TransferAction',
      'MoveAction',
      'ExerciseAction'
    ],
    id:             'fromLocation',
    label:          'fromLocation',
    rangeIncludes:  'Place',
    subPropertyOf:  'location',
    type:           'Property'
  },
  fuelConsumption:                  {
    description:    '<p>The amount of fuel consumed for traveling a particular distance or temporal duration with the given vehicle (e.g. liters per 100 km).</p>\n<ul>\n<li>Note 1: There are unfortunately no standard unit codes for liters per 100 km.  Use <a class="localLink" href="/unitText">unitText</a> to indicate the unit of measurement, e.g. L/100 km.</li>\n<li>Note 2: There are two ways of indicating the fuel consumption, <a class="localLink" href="/fuelConsumption">fuelConsumption</a> (e.g. 8 liters per 100 km) and <a class="localLink" href="/fuelEfficiency">fuelEfficiency</a> (e.g. 30 miles per gallon). They are reciprocal.</li>\n<li>Note 3: Often, the absolute value is useful only when related to driving speed ("at 80 km/h") or usage pattern ("city traffic"). You can use <a class="localLink" href="/valueReference">valueReference</a> to link the value for the fuel consumption to another value.</li>\n</ul>',
    domainIncludes: 'Vehicle',
    id:             'fuelConsumption',
    label:          'fuelConsumption',
    rangeIncludes:  'QuantitativeValue',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group',
    type:           'Property'
  },
  fuelEfficiency:                   {
    description:    '<p>The distance traveled per unit of fuel used; most commonly miles per gallon (mpg) or kilometers per liter (km/L).</p>\n<ul>\n<li>Note 1: There are unfortunately no standard unit codes for miles per gallon or kilometers per liter. Use <a class="localLink" href="/unitText">unitText</a> to indicate the unit of measurement, e.g. mpg or km/L.</li>\n<li>Note 2: There are two ways of indicating the fuel consumption, <a class="localLink" href="/fuelConsumption">fuelConsumption</a> (e.g. 8 liters per 100 km) and <a class="localLink" href="/fuelEfficiency">fuelEfficiency</a> (e.g. 30 miles per gallon). They are reciprocal.</li>\n<li>Note 3: Often, the absolute value is useful only when related to driving speed ("at 80 km/h") or usage pattern ("city traffic"). You can use <a class="localLink" href="/valueReference">valueReference</a> to link the value for the fuel economy to another value.</li>\n</ul>',
    domainIncludes: 'Vehicle',
    id:             'fuelEfficiency',
    label:          'fuelEfficiency',
    rangeIncludes:  'QuantitativeValue',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group',
    type:           'Property'
  },
  fuelType:                         {
    description:    'The type of fuel suitable for the engine or engines of the vehicle. If the vehicle has only one engine, this property can be attached directly to the vehicle.',
    domainIncludes: [
      'Vehicle',
      'EngineSpecification'
    ],
    id:             'fuelType',
    label:          'fuelType',
    rangeIncludes:  [
      'Text',
      'QualitativeValue',
      'URL'
    ],
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group',
    type:           'Property'
  },
  funder:                           {
    description:    'A person or organization that supports (sponsors) something through some kind of financial contribution.',
    domainIncludes: [
      'Event',
      'Person',
      'CreativeWork',
      'Organization'
    ],
    id:             'funder',
    label:          'funder',
    rangeIncludes:  [
      'Person',
      'Organization'
    ],
    subPropertyOf:  'sponsor',
    type:           'Property'
  },
  game:                             {
    description:    'Video game which is played on this server.',
    domainIncludes: 'GameServer',
    id:             'game',
    inverseOf:      'gameServer',
    label:          'game',
    rangeIncludes:  'VideoGame',
    type:           'Property'
  },
  gameItem:                         {
    description:    'An item is an object within the game world that can be collected by a player or, occasionally, a non-player character.',
    domainIncludes: [
      'Game',
      'VideoGameSeries'
    ],
    id:             'gameItem',
    label:          'gameItem',
    rangeIncludes:  'Thing',
    type:           'Property'
  },
  gameLocation:                     {
    description:    'Real or fictional location of the game (or part of game).',
    domainIncludes: [
      'Game',
      'VideoGameSeries'
    ],
    id:             'gameLocation',
    label:          'gameLocation',
    rangeIncludes:  [
      'Place',
      'URL',
      'PostalAddress'
    ],
    type:           'Property'
  },
  gamePlatform:                     {
    description:    'The electronic systems used to play <a href="http://en.wikipedia.org/wiki/Category:Video_game_platforms">video games</a>.',
    domainIncludes: [
      'VideoGame',
      'VideoGameSeries'
    ],
    id:             'gamePlatform',
    label:          'gamePlatform',
    rangeIncludes:  [
      'URL',
      'Thing',
      'Text'
    ],
    type:           'Property'
  },
  gameServer:                       {
    description:    'The server on which  it is possible to play the game.',
    domainIncludes: 'VideoGame',
    id:             'gameServer',
    inverseOf:      'game',
    label:          'gameServer',
    rangeIncludes:  'GameServer',
    type:           'Property'
  },
  gameTip:                          {
    description:    'Links to tips, tactics, etc.',
    domainIncludes: 'VideoGame',
    id:             'gameTip',
    label:          'gameTip',
    rangeIncludes:  'CreativeWork',
    type:           'Property'
  },
  gender:                           {
    description:    'Gender of the person. While http://schema.org/Male and http://schema.org/Female may be used, text strings are also acceptable for people who do not identify as a binary gender.',
    domainIncludes: 'Person',
    id:             'gender',
    label:          'gender',
    rangeIncludes:  [
      'Text',
      'GenderType'
    ],
    type:           'Property'
  },
  genre:                            {
    description:    'Genre of the creative work or group.',
    domainIncludes: [
      'CreativeWork',
      'MusicGroup'
    ],
    id:             'genre',
    label:          'genre',
    rangeIncludes:  [
      'URL',
      'Text'
    ],
    type:           'Property'
  },
  geo:                              {
    description:    'The geo coordinates of the place.',
    domainIncludes: 'Place',
    id:             'geo',
    label:          'geo',
    rangeIncludes:  [
      'GeoShape',
      'GeoCoordinates'
    ],
    type:           'Property'
  },
  geoMidpoint:                      {
    description:    'Indicates the GeoCoordinates at the centre of a GeoShape e.g. GeoCircle.',
    domainIncludes: 'GeoCircle',
    id:             'geoMidpoint',
    label:          'geoMidpoint',
    rangeIncludes:  'GeoCoordinates',
    type:           'Property'
  },
  geoRadius:                        {
    description:    'Indicates the approximate radius of a GeoCircle (metres unless indicated otherwise via Distance notation).',
    domainIncludes: 'GeoCircle',
    id:             'geoRadius',
    label:          'geoRadius',
    rangeIncludes:  [
      'Text',
      'Distance',
      'Number'
    ],
    type:           'Property'
  },
  geographicArea:                   {
    description:    'The geographic area associated with the audience.',
    domainIncludes: 'Audience',
    id:             'geographicArea',
    label:          'geographicArea',
    rangeIncludes:  'AdministrativeArea',
    type:           'Property'
  },
  givenName:                        {
    description:    'Given name. In the U.S., the first name of a Person. This can be used along with familyName instead of the name property.',
    domainIncludes: 'Person',
    id:             'givenName',
    label:          'givenName',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  globalLocationNumber:             {
    description:    'The <a href="http://www.gs1.org/gln">Global Location Number</a> (GLN, sometimes also referred to as International Location Number or ILN) of the respective organization, person, or place. The GLN is a 13-digit number used to identify parties and physical locations.',
    domainIncludes: [
      'Organization',
      'Place',
      'Person'
    ],
    id:             'globalLocationNumber',
    label:          'globalLocationNumber',
    rangeIncludes:  'Text',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  grantee:                          {
    description:    'The person, organization, contact point, or audience that has been granted this permission.',
    domainIncludes: 'DigitalDocumentPermission',
    id:             'grantee',
    label:          'grantee',
    rangeIncludes:  [
      'ContactPoint',
      'Audience',
      'Person',
      'Organization'
    ],
    type:           'Property'
  },
  greater:                          {
    description:    'This ordering relation for qualitative values indicates that the subject is greater than the object.',
    domainIncludes: 'QualitativeValue',
    id:             'greater',
    label:          'greater',
    rangeIncludes:  'QualitativeValue',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  greaterOrEqual:                   {
    description:    'This ordering relation for qualitative values indicates that the subject is greater than or equal to the object.',
    domainIncludes: 'QualitativeValue',
    id:             'greaterOrEqual',
    label:          'greaterOrEqual',
    rangeIncludes:  'QualitativeValue',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  gtin12:                           {
    description:    'The <a href="http://apps.gs1.org/GDD/glossary/Pages/GTIN-12.aspx">GTIN-12</a> code of the product, or the product to which the offer refers. The GTIN-12 is the 12-digit GS1 Identification Key composed of a U.P.C. Company Prefix, Item Reference, and Check Digit used to identify trade items. See <a href="http://www.gs1.org/barcodes/technical/idkeys/gtin">GS1 GTIN Summary</a> for more details.',
    domainIncludes: [
      'Offer',
      'Product',
      'Demand'
    ],
    id:             'gtin12',
    label:          'gtin12',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  gtin13:                           {
    description:    'The <a href="http://apps.gs1.org/GDD/glossary/Pages/GTIN-13.aspx">GTIN-13</a> code of the product, or the product to which the offer refers. This is equivalent to 13-digit ISBN codes and EAN UCC-13. Former 12-digit UPC codes can be converted into a GTIN-13 code by simply adding a preceeding zero. See <a href="http://www.gs1.org/barcodes/technical/idkeys/gtin">GS1 GTIN Summary</a> for more details.',
    domainIncludes: [
      'Demand',
      'Product',
      'Offer'
    ],
    id:             'gtin13',
    label:          'gtin13',
    rangeIncludes:  'Text',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  gtin14:                           {
    description:    'The <a href="http://apps.gs1.org/GDD/glossary/Pages/GTIN-14.aspx">GTIN-14</a> code of the product, or the product to which the offer refers. See <a href="http://www.gs1.org/barcodes/technical/idkeys/gtin">GS1 GTIN Summary</a> for more details.',
    domainIncludes: [
      'Offer',
      'Product',
      'Demand'
    ],
    id:             'gtin14',
    label:          'gtin14',
    rangeIncludes:  'Text',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  gtin8:                            {
    description:    'The <a href="http://apps.gs1.org/GDD/glossary/Pages/GTIN-8.aspx">GTIN-8</a> code of the product, or the product to which the offer refers. This code is also known as EAN/UCC-8 or 8-digit EAN. See <a href="http://www.gs1.org/barcodes/technical/idkeys/gtin">GS1 GTIN Summary</a> for more details.',
    domainIncludes: [
      'Demand',
      'Product',
      'Offer'
    ],
    id:             'gtin8',
    label:          'gtin8',
    rangeIncludes:  'Text',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  hasDeliveryMethod:                {
    description:    'Method used for delivery or shipping.',
    domainIncludes: [
      'ParcelDelivery',
      'DeliveryEvent'
    ],
    id:             'hasDeliveryMethod',
    label:          'hasDeliveryMethod',
    rangeIncludes:  'DeliveryMethod',
    type:           'Property'
  },
  hasDigitalDocumentPermission:     {
    description:    'A permission related to the access to this document (e.g. permission to read or write an electronic document). For a public document, specify a grantee with an Audience with audienceType equal to "public".',
    domainIncludes: 'DigitalDocument',
    id:             'hasDigitalDocumentPermission',
    label:          'hasDigitalDocumentPermission',
    rangeIncludes:  'DigitalDocumentPermission',
    type:           'Property'
  },
  hasMap:                           {
    description:    'A URL to a map of the place.',
    domainIncludes: 'Place',
    id:             'hasMap',
    label:          'hasMap',
    rangeIncludes:  [
      'Map',
      'URL'
    ],
    type:           'Property'
  },
  hasOfferCatalog:                  {
    description:    'Indicates an OfferCatalog listing for this Organization, Person, or Service.',
    domainIncludes: [
      'Service',
      'Organization',
      'Person'
    ],
    id:             'hasOfferCatalog',
    label:          'hasOfferCatalog',
    rangeIncludes:  'OfferCatalog',
    type:           'Property'
  },
  hasPOS:                           {
    description:    'Points-of-Sales operated by the organization or person.',
    domainIncludes: [
      'Organization',
      'Person'
    ],
    id:             'hasPOS',
    label:          'hasPOS',
    rangeIncludes:  'Place',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  hasPart:                          {
    description:    'Indicates a CreativeWork that is (in some sense) a part of this CreativeWork.',
    domainIncludes: 'CreativeWork',
    id:             'hasPart',
    inverseOf:      'isPartOf',
    label:          'hasPart',
    rangeIncludes:  'CreativeWork',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_bibex',
    type:           'Property'
  },
  headline:                         {
    description:    'Headline of the article.',
    domainIncludes: 'CreativeWork',
    id:             'headline',
    label:          'headline',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  height:                           {
    description:    'The height of the item.',
    domainIncludes: [
      'Person',
      'VisualArtwork',
      'Product',
      'MediaObject'
    ],
    id:             'height',
    label:          'height',
    rangeIncludes:  [
      'Distance',
      'QuantitativeValue'
    ],
    type:           'Property'
  },
  highPrice:                        {
    description:    'The highest price of all offers available.',
    domainIncludes: 'AggregateOffer',
    id:             'highPrice',
    label:          'highPrice',
    rangeIncludes:  [
      'Text',
      'Number'
    ],
    type:           'Property'
  },
  hiringOrganization:               {
    description:    'Organization offering the job position.',
    domainIncludes: 'JobPosting',
    id:             'hiringOrganization',
    label:          'hiringOrganization',
    rangeIncludes:  'Organization',
    type:           'Property'
  },
  homeLocation:                     {
    description:    'A contact location for a person\'s residence.',
    domainIncludes: 'Person',
    id:             'homeLocation',
    label:          'homeLocation',
    rangeIncludes:  [
      'Place',
      'ContactPoint'
    ],
    subPropertyOf:  'location',
    type:           'Property'
  },
  homeTeam:                         {
    description:    'The home team in a sports event.',
    domainIncludes: 'SportsEvent',
    id:             'homeTeam',
    label:          'homeTeam',
    rangeIncludes:  [
      'Person',
      'SportsTeam'
    ],
    subPropertyOf:  'competitor',
    type:           'Property'
  },
  honorificPrefix:                  {
    description:    'An honorific prefix preceding a Person\'s name such as Dr/Mrs/Mr.',
    domainIncludes: 'Person',
    id:             'honorificPrefix',
    label:          'honorificPrefix',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  honorificSuffix:                  {
    description:    'An honorific suffix preceding a Person\'s name such as M.D. /PhD/MSCSW.',
    domainIncludes: 'Person',
    id:             'honorificSuffix',
    label:          'honorificSuffix',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  hostingOrganization:              {
    description:    'The organization (airline, travelers\' club, etc.) the membership is made with.',
    domainIncludes: 'ProgramMembership',
    id:             'hostingOrganization',
    label:          'hostingOrganization',
    rangeIncludes:  'Organization',
    type:           'Property'
  },
  hoursAvailable:                   {
    description:    'The hours during which this service or contact is available.',
    domainIncludes: [
      'Service',
      'LocationFeatureSpecification',
      'ContactPoint'
    ],
    id:             'hoursAvailable',
    label:          'hoursAvailable',
    rangeIncludes:  'OpeningHoursSpecification',
    type:           'Property'
  },
  httpMethod:                       {
    description:    'An HTTP method that specifies the appropriate HTTP method for a request to an HTTP EntryPoint. Values are capitalized strings as used in HTTP.',
    domainIncludes: 'EntryPoint',
    id:             'httpMethod',
    label:          'httpMethod',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  iataCode:                         {
    description:    'IATA identifier for an airline or airport.',
    domainIncludes: [
      'Airline',
      'Airport'
    ],
    id:             'iataCode',
    label:          'iataCode',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  icaoCode:                         {
    description:    'ICAO identifier for an airport.',
    domainIncludes: 'Airport',
    id:             'icaoCode',
    label:          'icaoCode',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  illustrator:                      {
    description:    'The illustrator of the book.',
    domainIncludes: 'Book',
    id:             'illustrator',
    label:          'illustrator',
    rangeIncludes:  'Person',
    type:           'Property'
  },
  image:                            {
    description:    'An image of the item. This can be a <a class="localLink" href="/URL">URL</a> or a fully described <a class="localLink" href="/ImageObject">ImageObject</a>.',
    domainIncludes: 'Thing',
    id:             'image',
    label:          'image',
    rangeIncludes:  [
      'ImageObject',
      'URL'
    ],
    type:           'Property'
  },
  inAlbum:                          {
    description:    'The album to which this recording belongs.',
    domainIncludes: 'MusicRecording',
    id:             'inAlbum',
    label:          'inAlbum',
    rangeIncludes:  'MusicAlbum',
    type:           'Property'
  },
  inBroadcastLineup:                {
    description:    'The CableOrSatelliteService offering the channel.',
    domainIncludes: 'BroadcastChannel',
    id:             'inBroadcastLineup',
    label:          'inBroadcastLineup',
    rangeIncludes:  'CableOrSatelliteService',
    type:           'Property'
  },
  inLanguage:                       {
    description:    'The language of the content or performance or used in an action. Please use one of the language codes from the <a href="http://tools.ietf.org/html/bcp47">IETF BCP 47 standard</a>. See also <a class="localLink" href="/availableLanguage">availableLanguage</a>.',
    domainIncludes: [
      'CreativeWork',
      'Event',
      'CommunicateAction',
      'WriteAction'
    ],
    id:             'inLanguage',
    label:          'inLanguage',
    rangeIncludes:  [
      'Text',
      'Language'
    ],
    type:           'Property'
  },
  inPlaylist:                       {
    description:    'The playlist to which this recording belongs.',
    domainIncludes: 'MusicRecording',
    id:             'inPlaylist',
    label:          'inPlaylist',
    rangeIncludes:  'MusicPlaylist',
    type:           'Property'
  },
  incentiveCompensation:            {
    description:    'Description of bonus and commission compensation aspects of the job.',
    domainIncludes: 'JobPosting',
    id:             'incentiveCompensation',
    label:          'incentiveCompensation',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  incentives:                       {
    description:    'Description of bonus and commission compensation aspects of the job.',
    domainIncludes: 'JobPosting',
    id:             'incentives',
    label:          'incentives',
    rangeIncludes:  'Text',
    supersededBy:   'incentiveCompensation',
    type:           'Property'
  },
  includedComposition:              {
    description:    'Smaller compositions included in this work (e.g. a movement in a symphony).',
    domainIncludes: 'MusicComposition',
    id:             'includedComposition',
    label:          'includedComposition',
    rangeIncludes:  'MusicComposition',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ',
    type:           'Property'
  },
  includedDataCatalog:              {
    description:    'A data catalog which contains this dataset (this property was previously \'catalog\', preferred name is now \'includedInDataCatalog\').',
    domainIncludes: 'Dataset',
    id:             'includedDataCatalog',
    label:          'includedDataCatalog',
    rangeIncludes:  'DataCatalog',
    supersededBy:   'includedInDataCatalog',
    type:           'Property'
  },
  includedInDataCatalog:            {
    description:    'A data catalog which contains this dataset.',
    domainIncludes: 'Dataset',
    id:             'includedInDataCatalog',
    inverseOf:      'dataset',
    label:          'includedInDataCatalog',
    rangeIncludes:  'DataCatalog',
    type:           'Property'
  },
  includesObject:                   {
    description:    'This links to a node or nodes indicating the exact quantity of the products included in the offer.',
    domainIncludes: [
      'Demand',
      'Offer'
    ],
    id:             'includesObject',
    label:          'includesObject',
    rangeIncludes:  'TypeAndQuantityNode',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  index:                            {
    AboutPage: {
      description: 'Web page type: About page.'
    }
  },
  industry:                         {
    description:    'The industry associated with the job position.',
    domainIncludes: 'JobPosting',
    id:             'industry',
    label:          'industry',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  ineligibleRegion:                 {
    description:    'The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is not valid, e.g. a region where the transaction is not allowed.</p>\n<p>See also <a class="localLink" href="/eligibleRegion">eligibleRegion</a>.',
    domainIncludes: [
      'Offer',
      'DeliveryChargeSpecification',
      'Demand'
    ],
    id:             'ineligibleRegion',
    label:          'ineligibleRegion',
    rangeIncludes:  [
      'Place',
      'Text',
      'GeoShape'
    ],
    type:           'Property'
  },
  ingredients:                      {
    description:    'A single ingredient used in the recipe, e.g. sugar, flour or garlic.',
    domainIncludes: 'Recipe',
    id:             'ingredients',
    label:          'ingredients',
    rangeIncludes:  'Text',
    supersededBy:   'recipeIngredient',
    type:           'Property'
  },
  installUrl:                       {
    description:    'URL at which the app may be installed, if different from the URL of the item.',
    domainIncludes: 'SoftwareApplication',
    id:             'installUrl',
    label:          'installUrl',
    rangeIncludes:  'URL',
    type:           'Property'
  },
  instrument:                       {
    description:    'The object that helped the agent perform the action. e.g. John wrote a book with <em>a pen</em>.',
    domainIncludes: 'Action',
    id:             'instrument',
    label:          'instrument',
    rangeIncludes:  'Thing',
    type:           'Property'
  },
  interactionCount:                 {
    description:  'This property is deprecated, alongside the UserInteraction types on which it depended.',
    id:           'interactionCount',
    label:        'interactionCount',
    supersededBy: 'interactionStatistic',
    type:         'Property'
  },
  interactionService:               {
    description:    'The WebSite or SoftwareApplication where the interactions took place.',
    domainIncludes: 'InteractionCounter',
    id:             'interactionService',
    label:          'interactionService',
    rangeIncludes:  [
      'WebSite',
      'SoftwareApplication'
    ],
    type:           'Property'
  },
  interactionStatistic:             {
    description:    'The number of interactions for the CreativeWork using the WebSite or SoftwareApplication. The most specific child type of InteractionCounter should be used.',
    domainIncludes: 'CreativeWork',
    id:             'interactionStatistic',
    label:          'interactionStatistic',
    rangeIncludes:  'InteractionCounter',
    type:           'Property'
  },
  interactionType:                  {
    description:    'The Action representing the type of interaction. For up votes, +1s, etc. use <a class="localLink" href="/LikeAction">LikeAction</a>. For down votes use <a class="localLink" href="/DislikeAction">DislikeAction</a>. Otherwise, use the most specific Action.',
    domainIncludes: 'InteractionCounter',
    id:             'interactionType',
    label:          'interactionType',
    rangeIncludes:  'Action',
    type:           'Property'
  },
  interactivityType:                {
    description:    'The predominant mode of learning supported by the learning resource. Acceptable values are \'active\', \'expositive\', or \'mixed\'.',
    domainIncludes: 'CreativeWork',
    id:             'interactivityType',
    label:          'interactivityType',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  interestRate:                     {
    description:    'The interest rate, charged or paid, applicable to the financial product. Note: This is different from the calculated annualPercentageRate.',
    domainIncludes: 'FinancialProduct',
    id:             'interestRate',
    label:          'interestRate',
    rangeIncludes:  [
      'Number',
      'QuantitativeValue'
    ],
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO',
    type:           'Property'
  },
  inventoryLevel:                   {
    description:    'The current approximate inventory level for the item or items.',
    domainIncludes: [
      'SomeProducts',
      'Demand',
      'Offer'
    ],
    id:             'inventoryLevel',
    label:          'inventoryLevel',
    rangeIncludes:  'QuantitativeValue',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  isAccessibleForFree:              {
    description:    'A flag to signal that the publication is accessible for free.',
    domainIncludes: [
      'PublicationEvent',
      'CreativeWork',
      'Event'
    ],
    id:             'isAccessibleForFree',
    label:          'isAccessibleForFree',
    rangeIncludes:  'Boolean',
    type:           'Property'
  },
  isAccessoryOrSparePartFor:        {
    description:    'A pointer to another product (or multiple products) for which this product is an accessory or spare part.',
    domainIncludes: 'Product',
    id:             'isAccessoryOrSparePartFor',
    label:          'isAccessoryOrSparePartFor',
    rangeIncludes:  'Product',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  isBasedOn:                        {
    description:    'A resource that was used in the creation of this resource. This term can be repeated for multiple sources. For example, http://example.com/great-multiplication-intro.html.',
    domainIncludes: 'CreativeWork',
    id:             'isBasedOn',
    label:          'isBasedOn',
    rangeIncludes:  [
      'URL',
      'Product',
      'CreativeWork'
    ],
    type:           'Property'
  },
  isBasedOnUrl:                     {
    description:    'A resource that was used in the creation of this resource. This term can be repeated for multiple sources. For example, http://example.com/great-multiplication-intro.html.',
    domainIncludes: 'CreativeWork',
    id:             'isBasedOnUrl',
    label:          'isBasedOnUrl',
    rangeIncludes:  [
      'URL',
      'CreativeWork',
      'Product'
    ],
    supersededBy:   'isBasedOn',
    type:           'Property'
  },
  isConsumableFor:                  {
    description:    'A pointer to another product (or multiple products) for which this product is a consumable.',
    domainIncludes: 'Product',
    id:             'isConsumableFor',
    label:          'isConsumableFor',
    rangeIncludes:  'Product',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  isFamilyFriendly:                 {
    description:    'Indicates whether this content is family friendly.',
    domainIncludes: 'CreativeWork',
    id:             'isFamilyFriendly',
    label:          'isFamilyFriendly',
    rangeIncludes:  'Boolean',
    type:           'Property'
  },
  isGift:                           {
    description:    'Was the offer accepted as a gift for someone other than the buyer.',
    domainIncludes: 'Order',
    id:             'isGift',
    label:          'isGift',
    rangeIncludes:  'Boolean',
    type:           'Property'
  },
  isLiveBroadcast:                  {
    description:    'True is the broadcast is of a live event.',
    domainIncludes: 'BroadcastEvent',
    id:             'isLiveBroadcast',
    label:          'isLiveBroadcast',
    rangeIncludes:  'Boolean',
    type:           'Property'
  },
  isPartOf:                         {
    description:    'Indicates a CreativeWork that this CreativeWork is (in some sense) part of.',
    domainIncludes: 'CreativeWork',
    id:             'isPartOf',
    inverseOf:      'hasPart',
    label:          'isPartOf',
    rangeIncludes:  'CreativeWork',
    type:           'Property'
  },
  isRelatedTo:                      {
    description:    'A pointer to another, somehow related product (or multiple products).',
    domainIncludes: [
      'Service',
      'Product'
    ],
    id:             'isRelatedTo',
    label:          'isRelatedTo',
    rangeIncludes:  [
      'Product',
      'Service'
    ],
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  isSimilarTo:                      {
    description:    'A pointer to another, functionally similar product (or multiple products).',
    domainIncludes: [
      'Product',
      'Service'
    ],
    id:             'isSimilarTo',
    label:          'isSimilarTo',
    rangeIncludes:  [
      'Product',
      'Service'
    ],
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  isVariantOf:                      {
    description:    'A pointer to a base product from which this product is a variant. It is safe to infer that the variant inherits all product features from the base model, unless defined locally. This is not transitive.',
    domainIncludes: 'ProductModel',
    id:             'isVariantOf',
    label:          'isVariantOf',
    rangeIncludes:  'ProductModel',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  isbn:                             {
    description:        'The ISBN of the book.',
    domainIncludes:     'Book',
    equivalentProperty: 'http://purl.org/ontology/bibo/isbn',
    id:                 'isbn',
    label:              'isbn',
    rangeIncludes:      'Text',
    type:               'Property'
  },
  isicV4:                           {
    description:    'The International Standard of Industrial Classification of All Economic Activities (ISIC), Revision 4 code for a particular organization, business person, or place.',
    domainIncludes: [
      'Person',
      'Place',
      'Organization'
    ],
    id:             'isicV4',
    label:          'isicV4',
    rangeIncludes:  'Text',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  isrcCode:                         {
    description:    'The International Standard Recording Code for the recording.',
    domainIncludes: 'MusicRecording',
    id:             'isrcCode',
    label:          'isrcCode',
    rangeIncludes:  'Text',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ',
    type:           'Property'
  },
  issn:                             {
    description:        'The International Standard Serial Number (ISSN) that identifies this periodical. You can repeat this property to (for example) identify different formats of this periodical.',
    domainIncludes:     'Periodical',
    equivalentProperty: 'http://purl.org/ontology/bibo/issn',
    id:                 'issn',
    label:              'issn',
    rangeIncludes:      'Text',
    source:             'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_bibex',
    type:               'Property'
  },
  issueNumber:                      {
    description:        'Identifies the issue of publication; for example, "iii" or "2".',
    domainIncludes:     'PublicationIssue',
    equivalentProperty: 'http://purl.org/ontology/bibo/issue',
    id:                 'issueNumber',
    label:              'issueNumber',
    rangeIncludes:      [
      'Integer',
      'Text'
    ],
    source:             'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_bibex',
    subPropertyOf:      'position',
    type:               'Property'
  },
  issuedBy:                         {
    description:    'The organization issuing the ticket or permit.',
    domainIncludes: [
      'Ticket',
      'Permit'
    ],
    id:             'issuedBy',
    label:          'issuedBy',
    rangeIncludes:  'Organization',
    type:           'Property'
  },
  issuedThrough:                    {
    description:    'The service through with the permit was granted.',
    domainIncludes: 'Permit',
    id:             'issuedThrough',
    label:          'issuedThrough',
    rangeIncludes:  'Service',
    type:           'Property'
  },
  iswcCode:                         {
    description:    'The International Standard Musical Work Code for the composition.',
    domainIncludes: 'MusicComposition',
    id:             'iswcCode',
    label:          'iswcCode',
    rangeIncludes:  'Text',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ',
    type:           'Property'
  },
  item:                             {
    description:    'An entity represented by an entry in a list or data feed (e.g. an \'artist\' in a list of \'artists\')’.',
    domainIncludes: [
      'ListItem',
      'DataFeedItem'
    ],
    id:             'item',
    label:          'item',
    rangeIncludes:  'Thing',
    type:           'Property'
  },
  itemCondition:                    {
    description:    'A predefined value from OfferItemCondition or a textual description of the condition of the product or service, or the products or services included in the offer.',
    domainIncludes: [
      'Demand',
      'Product',
      'Offer'
    ],
    id:             'itemCondition',
    label:          'itemCondition',
    rangeIncludes:  'OfferItemCondition',
    type:           'Property'
  },
  itemListElement:                  {
    description:    'For itemListElement values, you can use simple strings (e.g. "Peter", "Paul", "Mary"), existing entities, or use ListItem.</p>\n<p>Text values are best if the elements in the list are plain strings. Existing entities are best for a simple, unordered list of existing things in your data. ListItem is used with ordered lists when you want to provide additional context about the element in that list or when the same item might be in different places in different lists.</p>\n<p>Note: The order of elements in your mark-up is not sufficient for indicating the order or elements.  Use ListItem with a \'position\' property in such cases.',
    domainIncludes: 'ItemList',
    id:             'itemListElement',
    label:          'itemListElement',
    rangeIncludes:  [
      'ListItem',
      'Text',
      'Thing'
    ],
    type:           'Property'
  },
  itemListOrder:                    {
    description:    'Type of ordering (e.g. Ascending, Descending, Unordered).',
    domainIncludes: 'ItemList',
    id:             'itemListOrder',
    label:          'itemListOrder',
    rangeIncludes:  [
      'Text',
      'ItemListOrderType'
    ],
    type:           'Property'
  },
  itemOffered:                      {
    description:    'The item being offered.',
    domainIncludes: [
      'Offer',
      'Demand'
    ],
    id:             'itemOffered',
    label:          'itemOffered',
    rangeIncludes:  [
      'Product',
      'Service'
    ],
    type:           'Property'
  },
  itemReviewed:                     {
    description:    'The item that is being reviewed/rated.',
    domainIncludes: [
      'Review',
      'AggregateRating'
    ],
    id:             'itemReviewed',
    label:          'itemReviewed',
    rangeIncludes:  'Thing',
    type:           'Property'
  },
  itemShipped:                      {
    description:    'Item(s) being shipped.',
    domainIncludes: 'ParcelDelivery',
    id:             'itemShipped',
    label:          'itemShipped',
    rangeIncludes:  'Product',
    type:           'Property'
  },
  jobBenefits:                      {
    description:    'Description of benefits associated with the job.',
    domainIncludes: 'JobPosting',
    id:             'jobBenefits',
    label:          'jobBenefits',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  jobLocation:                      {
    description:    'A (typically single) geographic location associated with the job position.',
    domainIncludes: 'JobPosting',
    id:             'jobLocation',
    label:          'jobLocation',
    rangeIncludes:  'Place',
    type:           'Property'
  },
  jobTitle:                         {
    description:    'The job title of the person (for example, Financial Manager).',
    domainIncludes: 'Person',
    id:             'jobTitle',
    label:          'jobTitle',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  keywords:                         {
    description:    'Keywords or tags used to describe this content. Multiple entries in a keywords list are typically delimited by commas.',
    domainIncludes: 'CreativeWork',
    id:             'keywords',
    label:          'keywords',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  knownVehicleDamages:              {
    description:    'A textual description of known damages, both repaired and unrepaired.',
    domainIncludes: 'Vehicle',
    id:             'knownVehicleDamages',
    label:          'knownVehicleDamages',
    rangeIncludes:  'Text',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group',
    type:           'Property'
  },
  knows:                            {
    description:    'The most generic bi-directional social/work relation.',
    domainIncludes: 'Person',
    id:             'knows',
    label:          'knows',
    rangeIncludes:  'Person',
    type:           'Property'
  },
  landlord:                         {
    description:    'A sub property of participant. The owner of the real estate property.',
    domainIncludes: 'RentAction',
    id:             'landlord',
    label:          'landlord',
    rangeIncludes:  [
      'Organization',
      'Person'
    ],
    subPropertyOf:  'participant',
    type:           'Property'
  },
  language:                         {
    description:    'A sub property of instrument. The language used on this action.',
    domainIncludes: [
      'WriteAction',
      'CommunicateAction'
    ],
    id:             'language',
    label:          'language',
    rangeIncludes:  'Language',
    subPropertyOf:  'instrument',
    supersededBy:   'inLanguage',
    type:           'Property'
  },
  lastReviewed:                     {
    description:    'Date on which the content on this web page was last reviewed for accuracy and/or completeness.',
    domainIncludes: 'WebPage',
    id:             'lastReviewed',
    label:          'lastReviewed',
    rangeIncludes:  'Date',
    type:           'Property'
  },
  latitude:                         {
    description:    'The latitude of a location. For example <code>37.42242</code> (<a href="https://en.wikipedia.org/wiki/World_Geodetic_System">WGS 84</a>).',
    domainIncludes: 'GeoCoordinates',
    id:             'latitude',
    label:          'latitude',
    rangeIncludes:  [
      'Text',
      'Number'
    ],
    type:           'Property'
  },
  learningResourceType:             {
    description:    'The predominant type or kind characterizing the learning resource. For example, \'presentation\', \'handout\'.',
    domainIncludes: 'CreativeWork',
    id:             'learningResourceType',
    label:          'learningResourceType',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  legalName:                        {
    description:    'The official name of the organization, e.g. the registered company name.',
    domainIncludes: 'Organization',
    id:             'legalName',
    label:          'legalName',
    rangeIncludes:  'Text',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  leiCode:                          {
    description:    'An organization identifier that uniquely identifies a legal entity as defined in ISO 17442.',
    domainIncludes: 'Organization',
    id:             'leiCode',
    label:          'leiCode',
    rangeIncludes:  'Text',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO',
    type:           'Property'
  },
  lender:                           {
    description:    'A sub property of participant. The person that lends the object being borrowed.',
    domainIncludes: 'BorrowAction',
    id:             'lender',
    label:          'lender',
    rangeIncludes:  'Person',
    subPropertyOf:  'participant',
    type:           'Property'
  },
  lesser:                           {
    description:    'This ordering relation for qualitative values indicates that the subject is lesser than the object.',
    domainIncludes: 'QualitativeValue',
    id:             'lesser',
    label:          'lesser',
    rangeIncludes:  'QualitativeValue',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  lesserOrEqual:                    {
    description:    'This ordering relation for qualitative values indicates that the subject is lesser than or equal to the object.',
    domainIncludes: 'QualitativeValue',
    id:             'lesserOrEqual',
    label:          'lesserOrEqual',
    rangeIncludes:  'QualitativeValue',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  license:                          {
    description:    'A license document that applies to this content, typically indicated by URL.',
    domainIncludes: 'CreativeWork',
    id:             'license',
    label:          'license',
    rangeIncludes:  [
      'CreativeWork',
      'URL'
    ],
    type:           'Property'
  },
  line:                             {
    description:    'A line is a point-to-point path consisting of two or more points. A line is expressed as a series of two or more point objects separated by space.',
    domainIncludes: 'GeoShape',
    id:             'line',
    label:          'line',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  liveBlogUpdate:                   {
    description:    'An update to the LiveBlog.',
    domainIncludes: 'LiveBlogPosting',
    id:             'liveBlogUpdate',
    label:          'liveBlogUpdate',
    rangeIncludes:  'BlogPosting',
    type:           'Property'
  },
  loanTerm:                         {
    description:    'The duration of the loan or credit agreement.',
    domainIncludes: 'LoanOrCredit',
    id:             'loanTerm',
    label:          'loanTerm',
    rangeIncludes:  'QuantitativeValue',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO',
    subPropertyOf:  'duration',
    type:           'Property'
  },
  location:                         {
    description:    'The location of for example where the event is happening, an organization is located, or where an action takes place.',
    domainIncludes: [
      'Action',
      'Event',
      'Organization'
    ],
    id:             'location',
    label:          'location',
    rangeIncludes:  [
      'Text',
      'PostalAddress',
      'Place'
    ],
    type:           'Property'
  },
  locationCreated:                  {
    description:    'The location where the CreativeWork was created, which may not be the same as the location depicted in the CreativeWork.',
    domainIncludes: 'CreativeWork',
    id:             'locationCreated',
    label:          'locationCreated',
    rangeIncludes:  'Place',
    type:           'Property'
  },
  lodgingUnitDescription:           {
    description:    'A full description of the lodging unit.',
    domainIncludes: 'LodgingReservation',
    id:             'lodgingUnitDescription',
    label:          'lodgingUnitDescription',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  lodgingUnitType:                  {
    description:    'Textual description of the unit type (including suite vs. room, size of bed, etc.).',
    domainIncludes: 'LodgingReservation',
    id:             'lodgingUnitType',
    label:          'lodgingUnitType',
    rangeIncludes:  [
      'QualitativeValue',
      'Text'
    ],
    type:           'Property'
  },
  logo:                             {
    description:    'An associated logo.',
    domainIncludes: [
      'Organization',
      'Brand',
      'Product',
      'Service',
      'Place'
    ],
    id:             'logo',
    label:          'logo',
    rangeIncludes:  [
      'URL',
      'ImageObject'
    ],
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    subPropertyOf:  'image',
    type:           'Property'
  },
  longitude:                        {
    description:    'The longitude of a location. For example <code>-122.08585</code> (<a href="https://en.wikipedia.org/wiki/World_Geodetic_System">WGS 84</a>).',
    domainIncludes: 'GeoCoordinates',
    id:             'longitude',
    label:          'longitude',
    rangeIncludes:  [
      'Text',
      'Number'
    ],
    type:           'Property'
  },
  loser:                            {
    description:    'A sub property of participant. The loser of the action.',
    domainIncludes: 'WinAction',
    id:             'loser',
    label:          'loser',
    rangeIncludes:  'Person',
    subPropertyOf:  'participant',
    type:           'Property'
  },
  lowPrice:                         {
    description:    'The lowest price of all offers available.',
    domainIncludes: 'AggregateOffer',
    id:             'lowPrice',
    label:          'lowPrice',
    rangeIncludes:  [
      'Text',
      'Number'
    ],
    type:           'Property'
  },
  lyricist:                         {
    description:    'The person who wrote the words.',
    domainIncludes: 'MusicComposition',
    id:             'lyricist',
    label:          'lyricist',
    rangeIncludes:  'Person',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ',
    type:           'Property'
  },
  lyrics:                           {
    description:    'The words in the song.',
    domainIncludes: 'MusicComposition',
    id:             'lyrics',
    label:          'lyrics',
    rangeIncludes:  'CreativeWork',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ',
    type:           'Property'
  },
  mainContentOfPage:                {
    description:    'Indicates if this web page element is the main subject of the page.',
    domainIncludes: 'WebPage',
    id:             'mainContentOfPage',
    label:          'mainContentOfPage',
    rangeIncludes:  'WebPageElement',
    type:           'Property'
  },
  mainEntity:                       {
    description:    'Indicates the primary entity described in some page or other CreativeWork.',
    domainIncludes: 'CreativeWork',
    id:             'mainEntity',
    inverseOf:      'mainEntityOfPage',
    label:          'mainEntity',
    rangeIncludes:  'Thing',
    type:           'Property'
  },
  mainEntityOfPage:                 {
    description:    'Indicates a page (or other CreativeWork) for which this thing is the main entity being described. See <a href="/docs/datamodel.html#mainEntityBackground">background notes</a> for details.',
    domainIncludes: 'Thing',
    id:             'mainEntityOfPage',
    inverseOf:      'mainEntity',
    label:          'mainEntityOfPage',
    rangeIncludes:  [
      'CreativeWork',
      'URL'
    ],
    type:           'Property'
  },
  makesOffer:                       {
    description:    'A pointer to products or services offered by the organization or person.',
    domainIncludes: [
      'Organization',
      'Person'
    ],
    id:             'makesOffer',
    inverseOf:      'offeredBy',
    label:          'makesOffer',
    rangeIncludes:  'Offer',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  manufacturer:                     {
    description:    'The manufacturer of the product.',
    domainIncludes: 'Product',
    id:             'manufacturer',
    label:          'manufacturer',
    rangeIncludes:  'Organization',
    type:           'Property'
  },
  map:                              {
    description:    'A URL to a map of the place.',
    domainIncludes: 'Place',
    id:             'map',
    label:          'map',
    rangeIncludes:  'URL',
    supersededBy:   'hasMap',
    type:           'Property'
  },
  mapType:                          {
    description:    'Indicates the kind of Map, from the MapCategoryType Enumeration.',
    domainIncludes: 'Map',
    id:             'mapType',
    label:          'mapType',
    rangeIncludes:  'MapCategoryType',
    type:           'Property'
  },
  maps:                             {
    description:    'A URL to a map of the place.',
    domainIncludes: 'Place',
    id:             'maps',
    label:          'maps',
    rangeIncludes:  'URL',
    supersededBy:   'hasMap',
    type:           'Property'
  },
  material:                         {
    description:    'e.g. Oil, Watercolour, Acrylic, Linoprint, Marble, Cyanotype, Digital, Lithograph, DryPoint, Intaglio, Pastel, Woodcut, Pencil, Mixed Media, etc.',
    domainIncludes: 'VisualArtwork',
    id:             'material',
    label:          'material',
    rangeIncludes:  [
      'Text',
      'URL'
    ],
    supersededBy:   'artMedium',
    type:           'Property'
  },
  maxPrice:                         {
    description:    'The highest price if the price is a range.',
    domainIncludes: 'PriceSpecification',
    id:             'maxPrice',
    label:          'maxPrice',
    rangeIncludes:  'Number',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  maxValue:                         {
    description:    'The upper value of some characteristic or property.',
    domainIncludes: [
      'MonetaryAmount',
      'QuantitativeValue',
      'PropertyValue',
      'PropertyValueSpecification'
    ],
    id:             'maxValue',
    label:          'maxValue',
    rangeIncludes:  'Number',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  mealService:                      {
    description:    'Description of the meals that will be provided or available for purchase.',
    domainIncludes: 'Flight',
    id:             'mealService',
    label:          'mealService',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  member:                           {
    description:    'A member of an Organization or a ProgramMembership. Organizations can be members of organizations; ProgramMembership is typically for individuals.',
    domainIncludes: [
      'Organization',
      'ProgramMembership'
    ],
    id:             'member',
    inverseOf:      'memberOf',
    label:          'member',
    rangeIncludes:  [
      'Organization',
      'Person'
    ],
    type:           'Property'
  },
  memberOf:                         {
    description:    'An Organization (or ProgramMembership) to which this Person or Organization belongs.',
    domainIncludes: [
      'Person',
      'Organization'
    ],
    id:             'memberOf',
    inverseOf:      'member',
    label:          'memberOf',
    rangeIncludes:  [
      'ProgramMembership',
      'Organization'
    ],
    type:           'Property'
  },
  members:                          {
    description:    'A member of this organization.',
    domainIncludes: [
      'Organization',
      'ProgramMembership'
    ],
    id:             'members',
    label:          'members',
    rangeIncludes:  [
      'Organization',
      'Person'
    ],
    supersededBy:   'member',
    type:           'Property'
  },
  membershipNumber:                 {
    description:    'A unique identifier for the membership.',
    domainIncludes: 'ProgramMembership',
    id:             'membershipNumber',
    label:          'membershipNumber',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  memoryRequirements:               {
    description:    'Minimum memory requirements.',
    domainIncludes: 'SoftwareApplication',
    id:             'memoryRequirements',
    label:          'memoryRequirements',
    rangeIncludes:  [
      'Text',
      'URL'
    ],
    type:           'Property'
  },
  mentions:                         {
    description:    'Indicates that the CreativeWork contains a reference to, but is not necessarily about a concept.',
    domainIncludes: 'CreativeWork',
    id:             'mentions',
    label:          'mentions',
    rangeIncludes:  'Thing',
    type:           'Property'
  },
  menu:                             {
    description:    'Either the actual menu or a URL of the menu.',
    domainIncludes: 'FoodEstablishment',
    id:             'menu',
    label:          'menu',
    rangeIncludes:  [
      'URL',
      'Text'
    ],
    type:           'Property'
  },
  merchant:                         {
    description:    '\'merchant\' is an out-dated term for \'seller\'.',
    domainIncludes: 'Order',
    id:             'merchant',
    label:          'merchant',
    rangeIncludes:  [
      'Organization',
      'Person'
    ],
    supersededBy:   'seller',
    type:           'Property'
  },
  messageAttachment:                {
    description:    'A CreativeWork attached to the message.',
    domainIncludes: 'Message',
    id:             'messageAttachment',
    label:          'messageAttachment',
    rangeIncludes:  'CreativeWork',
    type:           'Property'
  },
  mileageFromOdometer:              {
    description:    'The total distance travelled by the particular vehicle since its initial production, as read from its odometer.</p>\n<p>Typical unit code(s): KMT for kilometers, SMI for statute miles',
    domainIncludes: 'Vehicle',
    id:             'mileageFromOdometer',
    label:          'mileageFromOdometer',
    rangeIncludes:  'QuantitativeValue',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group',
    type:           'Property'
  },
  minPrice:                         {
    description:    'The lowest price if the price is a range.',
    domainIncludes: 'PriceSpecification',
    id:             'minPrice',
    label:          'minPrice',
    rangeIncludes:  'Number',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  minValue:                         {
    description:    'The lower value of some characteristic or property.',
    domainIncludes: [
      'MonetaryAmount',
      'PropertyValue',
      'PropertyValueSpecification',
      'QuantitativeValue'
    ],
    id:             'minValue',
    label:          'minValue',
    rangeIncludes:  'Number',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  minimumPaymentDue:                {
    description:    'The minimum payment required at this time.',
    domainIncludes: 'Invoice',
    id:             'minimumPaymentDue',
    label:          'minimumPaymentDue',
    rangeIncludes:  [
      'PriceSpecification',
      'MonetaryAmount'
    ],
    type:           'Property'
  },
  model:                            {
    description:    'The model of the product. Use with the URL of a ProductModel or a textual representation of the model identifier. The URL of the ProductModel can be from an external source. It is recommended to additionally provide strong product identifiers via the gtin8/gtin13/gtin14 and mpn properties.',
    domainIncludes: 'Product',
    id:             'model',
    label:          'model',
    rangeIncludes:  [
      'ProductModel',
      'Text'
    ],
    type:           'Property'
  },
  modified:                         {
    id:     'modified',
    sameAs: 'dateModified'
  },
  modifiedTime:                     {
    description:    'The date and time the reservation was modified.',
    domainIncludes: 'Reservation',
    id:             'modifiedTime',
    label:          'modifiedTime',
    rangeIncludes:  'DateTime',
    type:           'Property'
  },
  mpn:                              {
    description:    'The Manufacturer Part Number (MPN) of the product, or the product to which the offer refers.',
    domainIncludes: [
      'Demand',
      'Product',
      'Offer'
    ],
    id:             'mpn',
    label:          'mpn',
    rangeIncludes:  'Text',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  multipleValues:                   {
    description:    'Whether multiple values are allowed for the property.  Default is false.',
    domainIncludes: 'PropertyValueSpecification',
    id:             'multipleValues',
    label:          'multipleValues',
    rangeIncludes:  'Boolean',
    type:           'Property'
  },
  musicArrangement:                 {
    description:    'An arrangement derived from the composition.',
    domainIncludes: 'MusicComposition',
    id:             'musicArrangement',
    label:          'musicArrangement',
    rangeIncludes:  'MusicComposition',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ',
    type:           'Property'
  },
  musicBy:                          {
    description:    'The composer of the soundtrack.',
    domainIncludes: [
      'VideoGame',
      'VideoObject',
      'Clip',
      'Movie',
      'Episode',
      'RadioSeries',
      'VideoGameSeries',
      'MovieSeries',
      'TVSeries'
    ],
    id:             'musicBy',
    label:          'musicBy',
    rangeIncludes:  [
      'Person',
      'MusicGroup'
    ],
    type:           'Property'
  },
  musicCompositionForm:             {
    description:    'The type of composition (e.g. overture, sonata, symphony, etc.).',
    domainIncludes: 'MusicComposition',
    id:             'musicCompositionForm',
    label:          'musicCompositionForm',
    rangeIncludes:  'Text',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ',
    type:           'Property'
  },
  musicGroupMember:                 {
    description:    'A member of a music group&#x2014;for example, John, Paul, George, or Ringo.',
    domainIncludes: 'MusicGroup',
    id:             'musicGroupMember',
    label:          'musicGroupMember',
    rangeIncludes:  'Person',
    supersededBy:   'member',
    type:           'Property'
  },
  musicReleaseFormat:               {
    description:    'Format of this release (the type of recording media used, ie. compact disc, digital media, LP, etc.).',
    domainIncludes: 'MusicRelease',
    id:             'musicReleaseFormat',
    label:          'musicReleaseFormat',
    rangeIncludes:  'MusicReleaseFormatType',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ',
    type:           'Property'
  },
  musicalKey:                       {
    description:    'The key, mode, or scale this composition uses.',
    domainIncludes: 'MusicComposition',
    id:             'musicalKey',
    label:          'musicalKey',
    rangeIncludes:  'Text',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ',
    type:           'Property'
  },
  naics:                            {
    description:    'The North American Industry Classification System (NAICS) code for a particular organization or business person.',
    domainIncludes: [
      'Organization',
      'Person'
    ],
    id:             'naics',
    label:          'naics',
    rangeIncludes:  'Text',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  name:                             {
    description:    'The name of the item.',
    domainIncludes: 'Thing',
    id:             'name',
    label:          'name',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  namedPosition:                    {
    description:    'A position played, performed or filled by a person or organization, as part of an organization. For example, an athlete in a SportsTeam might play in the position named \'Quarterback\'.',
    domainIncludes: 'Role',
    id:             'namedPosition',
    label:          'namedPosition',
    rangeIncludes:  [
      'URL',
      'Text'
    ],
    supersededBy:   'roleName',
    type:           'Property'
  },
  nationality:                      {
    description:    'Nationality of the person.',
    domainIncludes: 'Person',
    id:             'nationality',
    label:          'nationality',
    rangeIncludes:  'Country',
    type:           'Property'
  },
  netWorth:                         {
    description:    'The total financial value of the person as calculated by subtracting assets from liabilities.',
    domainIncludes: 'Person',
    id:             'netWorth',
    label:          'netWorth',
    rangeIncludes:  [
      'PriceSpecification',
      'MonetaryAmount'
    ],
    type:           'Property'
  },
  nextItem:                         {
    description:    'A link to the ListItem that follows the current one.',
    domainIncludes: 'ListItem',
    id:             'nextItem',
    label:          'nextItem',
    rangeIncludes:  'ListItem',
    type:           'Property'
  },
  nonEqual:                         {
    description:    'This ordering relation for qualitative values indicates that the subject is not equal to the object.',
    domainIncludes: 'QualitativeValue',
    id:             'nonEqual',
    label:          'nonEqual',
    rangeIncludes:  'QualitativeValue',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  numAdults:                        {
    description:    'The number of adults staying in the unit.',
    domainIncludes: 'LodgingReservation',
    id:             'numAdults',
    label:          'numAdults',
    rangeIncludes:  [
      'Integer',
      'QuantitativeValue'
    ],
    type:           'Property'
  },
  numChildren:                      {
    description:    'The number of children staying in the unit.',
    domainIncludes: 'LodgingReservation',
    id:             'numChildren',
    label:          'numChildren',
    rangeIncludes:  [
      'Integer',
      'QuantitativeValue'
    ],
    type:           'Property'
  },
  numTracks:                        {
    description:    'The number of tracks in this album or playlist.',
    domainIncludes: 'MusicPlaylist',
    id:             'numTracks',
    label:          'numTracks',
    rangeIncludes:  'Integer',
    type:           'Property'
  },
  numberOfAirbags:                  {
    description:    'The number or type of airbags in the vehicle.',
    domainIncludes: 'Vehicle',
    id:             'numberOfAirbags',
    label:          'numberOfAirbags',
    rangeIncludes:  [
      'Number',
      'Text'
    ],
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group',
    type:           'Property'
  },
  numberOfAxles:                    {
    description:    'The number of axles.</p>\n<p>Typical unit code(s): C62',
    domainIncludes: 'Vehicle',
    id:             'numberOfAxles',
    label:          'numberOfAxles',
    rangeIncludes:  [
      'Number',
      'QuantitativeValue'
    ],
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group',
    type:           'Property'
  },
  numberOfBeds:                     {
    description:    'The quantity of the given bed type available in the HotelRoom, Suite, House, or Apartment.',
    domainIncludes: 'BedDetails',
    id:             'numberOfBeds',
    label:          'numberOfBeds',
    rangeIncludes:  'Number',
    source:         'https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology',
    type:           'Property'
  },
  numberOfDoors:                    {
    description:    'The number of doors.</p>\n<p>Typical unit code(s): C62',
    domainIncludes: 'Vehicle',
    id:             'numberOfDoors',
    label:          'numberOfDoors',
    rangeIncludes:  [
      'QuantitativeValue',
      'Number'
    ],
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group',
    type:           'Property'
  },
  numberOfEmployees:                {
    description:    'The number of employees in an organization e.g. business.',
    domainIncludes: [
      'BusinessAudience',
      'Organization'
    ],
    id:             'numberOfEmployees',
    label:          'numberOfEmployees',
    rangeIncludes:  'QuantitativeValue',
    type:           'Property'
  },
  numberOfEpisodes:                 {
    description:    'The number of episodes in this season or series.',
    domainIncludes: [
      'TVSeries',
      'VideoGameSeries',
      'RadioSeries',
      'CreativeWorkSeason'
    ],
    id:             'numberOfEpisodes',
    label:          'numberOfEpisodes',
    rangeIncludes:  'Integer',
    type:           'Property'
  },
  numberOfForwardGears:             {
    description:    'The total number of forward gears available for the transmission system of the vehicle.</p>\n<p>Typical unit code(s): C62',
    domainIncludes: 'Vehicle',
    id:             'numberOfForwardGears',
    label:          'numberOfForwardGears',
    rangeIncludes:  [
      'QuantitativeValue',
      'Number'
    ],
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group',
    type:           'Property'
  },
  numberOfItems:                    {
    description:    'The number of items in an ItemList. Note that some descriptions might not fully describe all items in a list (e.g., multi-page pagination); in such cases, the numberOfItems would be for the entire list.',
    domainIncludes: 'ItemList',
    id:             'numberOfItems',
    label:          'numberOfItems',
    rangeIncludes:  'Integer',
    type:           'Property'
  },
  numberOfPages:                    {
    description:    'The number of pages in the book.',
    domainIncludes: 'Book',
    id:             'numberOfPages',
    label:          'numberOfPages',
    rangeIncludes:  'Integer',
    type:           'Property'
  },
  numberOfPlayers:                  {
    description:    'Indicate how many people can play this game (minimum, maximum, or range).',
    domainIncludes: [
      'Game',
      'VideoGameSeries'
    ],
    id:             'numberOfPlayers',
    label:          'numberOfPlayers',
    rangeIncludes:  'QuantitativeValue',
    type:           'Property'
  },
  numberOfPreviousOwners:           {
    description:    'The number of owners of the vehicle, including the current one.</p>\n<p>Typical unit code(s): C62',
    domainIncludes: 'Vehicle',
    id:             'numberOfPreviousOwners',
    label:          'numberOfPreviousOwners',
    rangeIncludes:  [
      'Number',
      'QuantitativeValue'
    ],
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group',
    type:           'Property'
  },
  numberOfRooms:                    {
    description:    'The number of rooms (excluding bathrooms and closets) of the acccommodation or lodging business.\nTypical unit code(s): ROM for room or C62 for no unit. The type of room can be put in the unitText property of the QuantitativeValue.',
    domainIncludes: [
      'SingleFamilyResidence',
      'House',
      'Suite',
      'Accomodation',
      'Apartment'
    ],
    id:             'numberOfRooms',
    label:          'numberOfRooms',
    rangeIncludes:  [
      'Number',
      'QuantitativeValue'
    ],
    source:         'https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology',
    type:           'Property'
  },
  numberOfSeasons:                  {
    description:    'The number of seasons in this series.',
    domainIncludes: [
      'RadioSeries',
      'TVSeries',
      'VideoGameSeries'
    ],
    id:             'numberOfSeasons',
    label:          'numberOfSeasons',
    rangeIncludes:  'Integer',
    type:           'Property'
  },
  numberedPosition:                 {
    description:    'A number associated with a role in an organization, for example, the number on an athlete\'s jersey.',
    domainIncludes: 'OrganizationRole',
    id:             'numberedPosition',
    label:          'numberedPosition',
    rangeIncludes:  'Number',
    type:           'Property'
  },
  nutrition:                        {
    description:    'Nutrition information about the recipe.',
    domainIncludes: 'Recipe',
    id:             'nutrition',
    label:          'nutrition',
    rangeIncludes:  'NutritionInformation',
    type:           'Property'
  },
  object:                           {
    description:    'The object upon the action is carried out, whose state is kept intact or changed. Also known as the semantic roles patient, affected or undergoer (which change their state) or theme (which doesn\'t). e.g. John read <em>a book</em>.',
    domainIncludes: 'Action',
    id:             'object',
    label:          'object',
    rangeIncludes:  'Thing',
    type:           'Property'
  },
  occupancy:                        {
    description:    'The allowed total occupancy for the accommodation in persons (including infants etc). For individual accommodations, this is not necessarily the legal maximum but defines the permitted usage as per the contractual agreement (e.g. a double room used by a single person).\nTypical unit code(s): C62 for person',
    domainIncludes: [
      'Suite',
      'HotelRoom',
      'Apartment',
      'SingleFamilyResidence'
    ],
    id:             'occupancy',
    label:          'occupancy',
    rangeIncludes:  'QuantitativeValue',
    source:         'https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology',
    type:           'Property'
  },
  occupationalCategory:             {
    description:    'Category or categories describing the job. Use BLS O*NET-SOC taxonomy: http://www.onetcenter.org/taxonomy.html. Ideally includes textual label and formal code, with the property repeated for each applicable value.',
    domainIncludes: 'JobPosting',
    id:             'occupationalCategory',
    label:          'occupationalCategory',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  offerCount:                       {
    description:    'The number of offers for the product.',
    domainIncludes: 'AggregateOffer',
    id:             'offerCount',
    label:          'offerCount',
    rangeIncludes:  'Integer',
    type:           'Property'
  },
  offeredBy:                        {
    description:    'A pointer to the organization or person making the offer.',
    domainIncludes: 'Offer',
    id:             'offeredBy',
    inverseOf:      'makesOffer',
    label:          'offeredBy',
    rangeIncludes:  [
      'Person',
      'Organization'
    ],
    type:           'Property'
  },
  offers:                           {
    description:    'An offer to provide this item&#x2014;for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event.',
    domainIncludes: [
      'Product',
      'Service',
      'Event',
      'CreativeWork',
      'AggregateOffer'
    ],
    id:             'offers',
    label:          'offers',
    rangeIncludes:  'Offer',
    type:           'Property'
  },
  openingHours:                     {
    description:    '<p>The general opening hours for a business. Opening hours can be specified as a weekly time range, starting with days, then times per day. Multiple days can be listed with commas \',\' separating each day. Day or time ranges are specified using a hyphen \'-\'.</p>\n<ul>\n<li>Days are specified using the following two-letter combinations: <code>Mo</code>, <code>Tu</code>, <code>We</code>, <code>Th</code>, <code>Fr</code>, <code>Sa</code>, <code>Su</code>.</li>\n<li>Times are specified using 24:00 time. For example, 3pm is specified as <code>15:00</code>. </li>\n<li>Here is an example: <code>&lt;time itemprop="openingHours" datetime=&quot;Tu,Th 16:00-20:00&quot;&gt;Tuesdays and Thursdays 4-8pm&lt;/time&gt;</code>.</li>\n<li>If a business is open 7 days a week, then it can be specified as <code>&lt;time itemprop=&quot;openingHours&quot; datetime=&quot;Mo-Su&quot;&gt;Monday through Sunday, all day&lt;/time&gt;</code>.</li>\n</ul>',
    domainIncludes: [
      'CivicStructure',
      'LocalBusiness'
    ],
    id:             'openingHours',
    label:          'openingHours',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  openingHoursSpecification:        {
    description:    'The opening hours of a certain place.',
    domainIncludes: 'Place',
    id:             'openingHoursSpecification',
    label:          'openingHoursSpecification',
    rangeIncludes:  'OpeningHoursSpecification',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  opens:                            {
    description:    'The opening hour of the place or service on the given day(s) of the week.',
    domainIncludes: 'OpeningHoursSpecification',
    id:             'opens',
    label:          'opens',
    rangeIncludes:  'Time',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  operatingSystem:                  {
    description:    'Operating systems supported (Windows 7, OSX 10.6, Android 1.6).',
    domainIncludes: 'SoftwareApplication',
    id:             'operatingSystem',
    label:          'operatingSystem',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  opponent:                         {
    description:    'A sub property of participant. The opponent on this action.',
    domainIncludes: 'ExerciseAction',
    id:             'opponent',
    label:          'opponent',
    rangeIncludes:  'Person',
    subPropertyOf:  'participant',
    type:           'Property'
  },
  option:                           {
    description:    'A sub property of object. The options subject to this action.',
    domainIncludes: 'ChooseAction',
    id:             'option',
    label:          'option',
    rangeIncludes:  [
      'Thing',
      'Text'
    ],
    subPropertyOf:  'object',
    supersededBy:   'actionOption',
    type:           'Property'
  },
  orderDate:                        {
    description:    'Date order was placed.',
    domainIncludes: 'Order',
    id:             'orderDate',
    label:          'orderDate',
    rangeIncludes:  'DateTime',
    type:           'Property'
  },
  orderDelivery:                    {
    description:    'The delivery of the parcel related to this order or order item.',
    domainIncludes: [
      'OrderItem',
      'Order'
    ],
    id:             'orderDelivery',
    label:          'orderDelivery',
    rangeIncludes:  'ParcelDelivery',
    type:           'Property'
  },
  orderItemNumber:                  {
    description:    'The identifier of the order item.',
    domainIncludes: 'OrderItem',
    id:             'orderItemNumber',
    label:          'orderItemNumber',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  orderItemStatus:                  {
    description:    'The current status of the order item.',
    domainIncludes: 'OrderItem',
    id:             'orderItemStatus',
    label:          'orderItemStatus',
    rangeIncludes:  'OrderStatus',
    type:           'Property'
  },
  orderNumber:                      {
    description:    'The identifier of the transaction.',
    domainIncludes: 'Order',
    id:             'orderNumber',
    label:          'orderNumber',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  orderQuantity:                    {
    description:    'The number of the item ordered. If the property is not set, assume the quantity is one.',
    domainIncludes: 'OrderItem',
    id:             'orderQuantity',
    label:          'orderQuantity',
    rangeIncludes:  'Number',
    type:           'Property'
  },
  orderStatus:                      {
    description:    'The current status of the order.',
    domainIncludes: 'Order',
    id:             'orderStatus',
    label:          'orderStatus',
    rangeIncludes:  'OrderStatus',
    type:           'Property'
  },
  orderedItem:                      {
    description:    'The item ordered.',
    domainIncludes: [
      'OrderItem',
      'Order'
    ],
    id:             'orderedItem',
    label:          'orderedItem',
    rangeIncludes:  [
      'Product',
      'OrderItem'
    ],
    type:           'Property'
  },
  organizer:                        {
    description:    'An organizer of an Event.',
    domainIncludes: 'Event',
    id:             'organizer',
    label:          'organizer',
    rangeIncludes:  [
      'Organization',
      'Person'
    ],
    type:           'Property'
  },
  originAddress:                    {
    description:    'Shipper\'s address.',
    domainIncludes: 'ParcelDelivery',
    id:             'originAddress',
    label:          'originAddress',
    rangeIncludes:  'PostalAddress',
    type:           'Property'
  },
  ownedFrom:                        {
    description:    'The date and time of obtaining the product.',
    domainIncludes: 'OwnershipInfo',
    id:             'ownedFrom',
    label:          'ownedFrom',
    rangeIncludes:  'DateTime',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  ownedThrough:                     {
    description:    'The date and time of giving up ownership on the product.',
    domainIncludes: 'OwnershipInfo',
    id:             'ownedThrough',
    label:          'ownedThrough',
    rangeIncludes:  'DateTime',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  owns:                             {
    description:    'Products owned by the organization or person.',
    domainIncludes: [
      'Person',
      'Organization'
    ],
    id:             'owns',
    label:          'owns',
    rangeIncludes:  [
      'Product',
      'OwnershipInfo'
    ],
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  pageEnd:                          {
    description:        'The page on which the work ends; for example "138" or "xvi".',
    domainIncludes:     [
      'Article',
      'PublicationIssue',
      'PublicationVolume'
    ],
    equivalentProperty: 'http://purl.org/ontology/bibo/pageEnd',
    id:                 'pageEnd',
    label:              'pageEnd',
    rangeIncludes:      [
      'Integer',
      'Text'
    ],
    source:             'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_bibex',
    type:               'Property'
  },
  pageStart:                        {
    description:        'The page on which the work starts; for example "135" or "xiii".',
    domainIncludes:     [
      'PublicationIssue',
      'Article',
      'PublicationVolume'
    ],
    equivalentProperty: 'http://purl.org/ontology/bibo/pageStart',
    id:                 'pageStart',
    label:              'pageStart',
    rangeIncludes:      [
      'Integer',
      'Text'
    ],
    source:             'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_bibex',
    type:               'Property'
  },
  pagination:                       {
    description:        'Any description of pages that is not separated into pageStart and pageEnd; for example, "1-6, 9, 55" or "10-12, 46-49".',
    domainIncludes:     [
      'PublicationVolume',
      'Article',
      'PublicationIssue'
    ],
    equivalentProperty: 'http://purl.org/ontology/bibo/pages',
    id:                 'pagination',
    label:              'pagination',
    rangeIncludes:      'Text',
    source:             'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_bibex',
    type:               'Property'
  },
  parent:                           {
    description:    'A parent of this person.',
    domainIncludes: 'Person',
    id:             'parent',
    label:          'parent',
    rangeIncludes:  'Person',
    type:           'Property'
  },
  parentItem:                       {
    description:    'The parent of a question, answer or item in general.',
    domainIncludes: 'Comment',
    id:             'parentItem',
    label:          'parentItem',
    rangeIncludes:  'Question',
    type:           'Property'
  },
  parentOrganization:               {
    description:    'The larger organization that this local business is a branch of, if any.',
    domainIncludes: 'Organization',
    id:             'parentOrganization',
    inverseOf:      'subOrganization',
    label:          'parentOrganization',
    rangeIncludes:  'Organization',
    type:           'Property'
  },
  parentService:                    {
    description:    'A broadcast service to which the broadcast service may belong to such as regional variations of a national channel.',
    domainIncludes: 'BroadcastService',
    id:             'parentService',
    label:          'parentService',
    rangeIncludes:  'BroadcastService',
    type:           'Property'
  },
  parents:                          {
    description:    'A parents of the person.',
    domainIncludes: 'Person',
    id:             'parents',
    label:          'parents',
    rangeIncludes:  'Person',
    supersededBy:   'parent',
    type:           'Property'
  },
  partOfEpisode:                    {
    description:    'The episode to which this clip belongs.',
    domainIncludes: 'Clip',
    id:             'partOfEpisode',
    label:          'partOfEpisode',
    rangeIncludes:  'Episode',
    subPropertyOf:  'isPartOf',
    type:           'Property'
  },
  partOfInvoice:                    {
    description:    'The order is being paid as part of the referenced Invoice.',
    domainIncludes: 'Order',
    id:             'partOfInvoice',
    label:          'partOfInvoice',
    rangeIncludes:  'Invoice',
    type:           'Property'
  },
  partOfOrder:                      {
    description:    'The overall order the items in this delivery were included in.',
    domainIncludes: 'ParcelDelivery',
    id:             'partOfOrder',
    label:          'partOfOrder',
    rangeIncludes:  'Order',
    type:           'Property'
  },
  partOfSeason:                     {
    description:    'The season to which this episode belongs.',
    domainIncludes: [
      'Clip',
      'Episode'
    ],
    id:             'partOfSeason',
    label:          'partOfSeason',
    rangeIncludes:  'CreativeWorkSeason',
    subPropertyOf:  'isPartOf',
    type:           'Property'
  },
  partOfSeries:                     {
    description:    'The series to which this episode or season belongs.',
    domainIncludes: [
      'CreativeWorkSeason',
      'Episode',
      'Clip'
    ],
    id:             'partOfSeries',
    label:          'partOfSeries',
    rangeIncludes:  'CreativeWorkSeries',
    subPropertyOf:  'isPartOf',
    type:           'Property'
  },
  partOfTVSeries:                   {
    description:    'The TV series to which this episode or season belongs.',
    domainIncludes: [
      'TVSeason',
      'TVClip',
      'TVEpisode'
    ],
    id:             'partOfTVSeries',
    label:          'partOfTVSeries',
    rangeIncludes:  'TVSeries',
    subPropertyOf:  'isPartOf',
    supersededBy:   'partOfSeries',
    type:           'Property'
  },
  participant:                      {
    description:    'Other co-agents that participated in the action indirectly. e.g. John wrote a book with <em>Steve</em>.',
    domainIncludes: 'Action',
    id:             'participant',
    label:          'participant',
    rangeIncludes:  [
      'Person',
      'Organization'
    ],
    type:           'Property'
  },
  partySize:                        {
    description:    'Number of people the reservation should accommodate.',
    domainIncludes: [
      'TaxiReservation',
      'FoodEstablishmentReservation'
    ],
    id:             'partySize',
    label:          'partySize',
    rangeIncludes:  [
      'Integer',
      'QuantitativeValue'
    ],
    type:           'Property'
  },
  passengerPriorityStatus:          {
    description:    'The priority status assigned to a passenger for security or boarding (e.g. FastTrack or Priority).',
    domainIncludes: 'FlightReservation',
    id:             'passengerPriorityStatus',
    label:          'passengerPriorityStatus',
    rangeIncludes:  [
      'Text',
      'QualitativeValue'
    ],
    type:           'Property'
  },
  passengerSequenceNumber:          {
    description:    'The passenger\'s sequence number as assigned by the airline.',
    domainIncludes: 'FlightReservation',
    id:             'passengerSequenceNumber',
    label:          'passengerSequenceNumber',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  paymentAccepted:                  {
    description:    'Cash, credit card, etc.',
    domainIncludes: 'LocalBusiness',
    id:             'paymentAccepted',
    label:          'paymentAccepted',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  paymentDue:                       {
    description:    'The date that payment is due.',
    domainIncludes: [
      'Invoice',
      'Order'
    ],
    id:             'paymentDue',
    label:          'paymentDue',
    rangeIncludes:  'DateTime',
    supersededBy:   'paymentDueDate',
    type:           'Property'
  },
  paymentDueDate:                   {
    description:    'The date that payment is due.',
    domainIncludes: [
      'Invoice',
      'Order'
    ],
    id:             'paymentDueDate',
    label:          'paymentDueDate',
    rangeIncludes:  'DateTime',
    type:           'Property'
  },
  paymentMethod:                    {
    description:    'The name of the credit card or other method of payment for the order.',
    domainIncludes: [
      'Invoice',
      'Order'
    ],
    id:             'paymentMethod',
    label:          'paymentMethod',
    rangeIncludes:  'PaymentMethod',
    type:           'Property'
  },
  paymentMethodId:                  {
    description:    'An identifier for the method of payment used (e.g. the last 4 digits of the credit card).',
    domainIncludes: [
      'Order',
      'Invoice'
    ],
    id:             'paymentMethodId',
    label:          'paymentMethodId',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  paymentStatus:                    {
    description:    'The status of payment; whether the invoice has been paid or not.',
    domainIncludes: 'Invoice',
    id:             'paymentStatus',
    label:          'paymentStatus',
    rangeIncludes:  [
      'PaymentStatusType',
      'Text'
    ],
    type:           'Property'
  },
  paymentUrl:                       {
    description:    'The URL for sending a payment.',
    domainIncludes: 'Order',
    id:             'paymentUrl',
    label:          'paymentUrl',
    rangeIncludes:  'URL',
    type:           'Property'
  },
  performer:                        {
    description:    'A performer at the event&#x2014;for example, a presenter, musician, musical group or actor.',
    domainIncludes: 'Event',
    id:             'performer',
    label:          'performer',
    rangeIncludes:  [
      'Organization',
      'Person'
    ],
    type:           'Property'
  },
  performerIn:                      {
    description:    'Event that this person is a performer or participant in.',
    domainIncludes: 'Person',
    id:             'performerIn',
    label:          'performerIn',
    rangeIncludes:  'Event',
    type:           'Property'
  },
  performers:                       {
    description:    'The main performer or performers of the event&#x2014;for example, a presenter, musician, or actor.',
    domainIncludes: 'Event',
    id:             'performers',
    label:          'performers',
    rangeIncludes:  [
      'Person',
      'Organization'
    ],
    supersededBy:   'performer',
    type:           'Property'
  },
  permissionType:                   {
    description:    'The type of permission granted the person, organization, or audience.',
    domainIncludes: 'DigitalDocumentPermission',
    id:             'permissionType',
    label:          'permissionType',
    rangeIncludes:  'DigitalDocumentPermissionType',
    type:           'Property'
  },
  permissions:                      {
    description:    'Permission(s) required to run the app (for example, a mobile app may require full internet access or may run only on wifi).',
    domainIncludes: 'SoftwareApplication',
    id:             'permissions',
    label:          'permissions',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  permitAudience:                   {
    description:    'The target audience for this permit.',
    domainIncludes: 'Permit',
    id:             'permitAudience',
    label:          'permitAudience',
    rangeIncludes:  'Audience',
    type:           'Property'
  },
  permittedUsage:                   {
    description:    'Indications regarding the permitted usage of the accommodation.',
    domainIncludes: 'Accommodation',
    id:             'permittedUsage',
    label:          'permittedUsage',
    rangeIncludes:  'Text',
    source:         'https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology',
    type:           'Property'
  },
  petsAllowed:                      {
    description:    'Indicates whether pets are allowed to enter the accommodation or lodging business. More detailed information can be put in a text value.',
    domainIncludes: [
      'Accommodation',
      'LodgingBusiness'
    ],
    id:             'petsAllowed',
    label:          'petsAllowed',
    rangeIncludes:  [
      'Text',
      'Boolean'
    ],
    source:         'https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology',
    type:           'Property'
  },
  photo:                            {
    description:    'A photograph of this place.',
    domainIncludes: 'Place',
    id:             'photo',
    label:          'photo',
    rangeIncludes:  [
      'Photograph',
      'ImageObject'
    ],
    subPropertyOf:  'image',
    type:           'Property'
  },
  photos:                           {
    description:    'Photographs of this place.',
    domainIncludes: 'Place',
    id:             'photos',
    label:          'photos',
    rangeIncludes:  [
      'ImageObject',
      'Photograph'
    ],
    supersededBy:   'photo',
    type:           'Property'
  },
  pickupLocation:                   {
    description:    'Where a taxi will pick up a passenger or a rental car can be picked up.',
    domainIncludes: [
      'RentalCarReservation',
      'TaxiReservation'
    ],
    id:             'pickupLocation',
    label:          'pickupLocation',
    rangeIncludes:  'Place',
    type:           'Property'
  },
  pickupTime:                       {
    description:    'When a taxi will pickup a passenger or a rental car can be picked up.',
    domainIncludes: [
      'RentalCarReservation',
      'TaxiReservation'
    ],
    id:             'pickupTime',
    label:          'pickupTime',
    rangeIncludes:  'DateTime',
    type:           'Property'
  },
  playMode:                         {
    description:    'Indicates whether this game is multi-player, co-op or single-player.  The game can be marked as multi-player, co-op and single-player at the same time.',
    domainIncludes: [
      'VideoGameSeries',
      'VideoGame'
    ],
    id:             'playMode',
    label:          'playMode',
    rangeIncludes:  'GamePlayMode',
    type:           'Property'
  },
  playerType:                       {
    description:    'Player type required&#x2014;for example, Flash or Silverlight.',
    domainIncludes: 'MediaObject',
    id:             'playerType',
    label:          'playerType',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  playersOnline:                    {
    description:    'Number of players on the server.',
    domainIncludes: 'GameServer',
    id:             'playersOnline',
    label:          'playersOnline',
    rangeIncludes:  'Integer',
    type:           'Property'
  },
  polygon:                          {
    description:    'A polygon is the area enclosed by a point-to-point path for which the starting and ending points are the same. A polygon is expressed as a series of four or more space delimited points where the first and final points are identical.',
    domainIncludes: 'GeoShape',
    id:             'polygon',
    label:          'polygon',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  position:                         {
    description:    'The position of an item in a series or sequence of items.',
    domainIncludes: [
      'ListItem',
      'CreativeWork'
    ],
    id:             'position',
    label:          'position',
    rangeIncludes:  [
      'Integer',
      'Text'
    ],
    type:           'Property'
  },
  postOfficeBoxNumber:              {
    description:    'The post office box number for PO box addresses.',
    domainIncludes: 'PostalAddress',
    id:             'postOfficeBoxNumber',
    label:          'postOfficeBoxNumber',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  postalCode:                       {
    description:    'The postal code. For example, 94043.',
    domainIncludes: [
      'GeoCoordinates',
      'PostalAddress',
      'GeoShape'
    ],
    id:             'postalCode',
    label:          'postalCode',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  potentialAction:                  {
    description:    'Indicates a potential Action, which describes an idealized action in which this thing would play an \'object\' role.',
    domainIncludes: 'Thing',
    id:             'potentialAction',
    label:          'potentialAction',
    rangeIncludes:  'Action',
    type:           'Property'
  },
  predecessorOf:                    {
    description:    'A pointer from a previous, often discontinued variant of the product to its newer variant.',
    domainIncludes: 'ProductModel',
    id:             'predecessorOf',
    label:          'predecessorOf',
    rangeIncludes:  'ProductModel',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  prepTime:                         {
    description:    'The length of time it takes to prepare the recipe, in <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO 8601 duration format</a>.',
    domainIncludes: 'Recipe',
    id:             'prepTime',
    label:          'prepTime',
    rangeIncludes:  'Duration',
    type:           'Property'
  },
  previousItem:                     {
    description:    'A link to the ListItem that preceeds the current one.',
    domainIncludes: 'ListItem',
    id:             'previousItem',
    label:          'previousItem',
    rangeIncludes:  'ListItem',
    type:           'Property'
  },
  previousStartDate:                {
    description:    'Used in conjunction with eventStatus for rescheduled or cancelled events. This property contains the previously scheduled start date. For rescheduled events, the startDate property should be used for the newly scheduled start date. In the (rare) case of an event that has been postponed and rescheduled multiple times, this field may be repeated.',
    domainIncludes: 'Event',
    id:             'previousStartDate',
    label:          'previousStartDate',
    rangeIncludes:  'Date',
    type:           'Property'
  },
  price:                            {
    description:    '<p>The offer price of a product, or of a price component when attached to PriceSpecification and its subtypes.</p>\n<p>Usage guidelines:</p>\n<ul>\n<li>Use the <a class="localLink" href="/priceCurrency">priceCurrency</a> property (with <a href="http://en.wikipedia.org/wiki/ISO_4217#Active_codes">ISO 4217 codes</a> e.g. "USD") instead of\n      including <a href="http://en.wikipedia.org/wiki/Dollar_sign#Currencies_that_use_the_dollar_or_peso_sign">ambiguous symbols</a> such as \'$\' in the value.</li>\n<li>Use \'.\' (Unicode \'FULL STOP\' (U+002E)) rather than \',\' to indicate a decimal point. Avoid using these symbols as a readability separator.</li>\n<li>Note that both <a href="http://www.w3.org/TR/xhtml-rdfa-primer/#using-the-content-attribute">RDFa</a> and Microdata syntax allow the use of a "content=" attribute for publishing simple machine-readable values alongside more human-friendly formatting.</li>\n<li>Use values from 0123456789 (Unicode \'DIGIT ZERO\' (U+0030) to \'DIGIT NINE\' (U+0039)) rather than superficially similiar Unicode symbols.</li>\n</ul>',
    domainIncludes: [
      'PriceSpecification',
      'Offer',
      'TradeAction'
    ],
    id:             'price',
    label:          'price',
    rangeIncludes:  [
      'Number',
      'Text'
    ],
    type:           'Property'
  },
  priceComponent:                   {
    description:    'This property links to all <a class="localLink" href="/UnitPriceSpecification">UnitPriceSpecification</a> nodes that apply in parallel for the <a class="localLink" href="/CompoundPriceSpecification">CompoundPriceSpecification</a> node.',
    domainIncludes: 'CompoundPriceSpecification',
    id:             'priceComponent',
    label:          'priceComponent',
    rangeIncludes:  'UnitPriceSpecification',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  priceCurrency:                    {
    description:    'The currency (in 3-letter ISO 4217 format) of the price or a price component, when attached to <a class="localLink" href="/PriceSpecification">PriceSpecification</a> and its subtypes.',
    domainIncludes: [
      'Reservation',
      'Ticket',
      'Offer',
      'PriceSpecification'
    ],
    id:             'priceCurrency',
    label:          'priceCurrency',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  priceRange:                       {
    description:    'The price range of the business, for example <code>$$$</code>.',
    domainIncludes: 'LocalBusiness',
    id:             'priceRange',
    label:          'priceRange',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  priceSpecification:               {
    description:    'One or more detailed price specifications, indicating the unit price and delivery or payment charges.',
    domainIncludes: [
      'TradeAction',
      'Offer',
      'Demand'
    ],
    id:             'priceSpecification',
    label:          'priceSpecification',
    rangeIncludes:  'PriceSpecification',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  priceType:                        {
    description:    'A short text or acronym indicating multiple price specifications for the same offer, e.g. SRP for the suggested retail price or INVOICE for the invoice price, mostly used in the car industry.',
    domainIncludes: 'UnitPriceSpecification',
    id:             'priceType',
    label:          'priceType',
    rangeIncludes:  'Text',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  priceValidUntil:                  {
    description:    'The date after which the price is no longer available.',
    domainIncludes: 'Offer',
    id:             'priceValidUntil',
    label:          'priceValidUntil',
    rangeIncludes:  'Date',
    type:           'Property'
  },
  primaryImageOfPage:               {
    description:    'Indicates the main image on the page.',
    domainIncludes: 'WebPage',
    id:             'primaryImageOfPage',
    label:          'primaryImageOfPage',
    rangeIncludes:  'ImageObject',
    type:           'Property'
  },
  printColumn:                      {
    description:    'The number of the column in which the NewsArticle appears in the print edition.',
    domainIncludes: 'NewsArticle',
    id:             'printColumn',
    label:          'printColumn',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  printEdition:                     {
    description:    'The edition of the print product in which the NewsArticle appears.',
    domainIncludes: 'NewsArticle',
    id:             'printEdition',
    label:          'printEdition',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  printPage:                        {
    description:    'If this NewsArticle appears in print, this field indicates the name of the page on which the article is found. Please note that this field is intended for the exact page name (e.g. A5, B18).',
    domainIncludes: 'NewsArticle',
    id:             'printPage',
    label:          'printPage',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  printSection:                     {
    description:    'If this NewsArticle appears in print, this field indicates the print section in which the article appeared.',
    domainIncludes: 'NewsArticle',
    id:             'printSection',
    label:          'printSection',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  processingTime:                   {
    description:    'Estimated processing time for the service using this channel.',
    domainIncludes: 'ServiceChannel',
    id:             'processingTime',
    label:          'processingTime',
    rangeIncludes:  'Duration',
    type:           'Property'
  },
  processorRequirements:            {
    description:    'Processor architecture required to run the application (e.g. IA64).',
    domainIncludes: 'SoftwareApplication',
    id:             'processorRequirements',
    label:          'processorRequirements',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  producer:                         {
    description:    'The person or organization who produced the work (e.g. music album, movie, tv/radio series etc.).',
    domainIncludes: 'CreativeWork',
    id:             'producer',
    label:          'producer',
    rangeIncludes:  [
      'Person',
      'Organization'
    ],
    type:           'Property'
  },
  produces:                         {
    description:    'The tangible thing generated by the service, e.g. a passport, permit, etc.',
    domainIncludes: 'Service',
    id:             'produces',
    label:          'produces',
    rangeIncludes:  'Thing',
    supersededBy:   'serviceOutput',
    type:           'Property'
  },
  productID:                        {
    description:    'The product identifier, such as ISBN. For example: <code>meta itemprop="productID" content="isbn:123-456-789"</code>.',
    domainIncludes: 'Product',
    id:             'productID',
    label:          'productID',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  productSupported:                 {
    description:    'The product or service this support contact point is related to (such as product support for a particular product line). This can be a specific product or product line (e.g. "iPhone") or a general category of products or services (e.g. "smartphones").',
    domainIncludes: 'ContactPoint',
    id:             'productSupported',
    label:          'productSupported',
    rangeIncludes:  [
      'Product',
      'Text'
    ],
    type:           'Property'
  },
  productionCompany:                {
    description:    'The production company or studio responsible for the item e.g. series, video game, episode etc.',
    domainIncludes: [
      'TVSeries',
      'Movie',
      'Episode',
      'CreativeWorkSeason',
      'MovieSeries',
      'MediaObject',
      'RadioSeries',
      'VideoGameSeries'
    ],
    id:             'productionCompany',
    label:          'productionCompany',
    rangeIncludes:  'Organization',
    type:           'Property'
  },
  productionDate:                   {
    description:    'The date of production of the item, e.g. vehicle.',
    domainIncludes: [
      'Product',
      'Vehicle'
    ],
    id:             'productionDate',
    label:          'productionDate',
    rangeIncludes:  'Date',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group',
    type:           'Property'
  },
  proficiencyLevel:                 {
    description:    'Proficiency needed for this content; expected values: \'Beginner\', \'Expert\'.',
    domainIncludes: 'TechArticle',
    id:             'proficiencyLevel',
    label:          'proficiencyLevel',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  programMembershipUsed:            {
    description:    'Any membership in a frequent flyer, hotel loyalty program, etc. being applied to the reservation.',
    domainIncludes: 'Reservation',
    id:             'programMembershipUsed',
    label:          'programMembershipUsed',
    rangeIncludes:  'ProgramMembership',
    type:           'Property'
  },
  programName:                      {
    description:    'The program providing the membership.',
    domainIncludes: 'ProgramMembership',
    id:             'programName',
    label:          'programName',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  programmingLanguage:              {
    description:    'The computer programming language.',
    domainIncludes: 'SoftwareSourceCode',
    id:             'programmingLanguage',
    label:          'programmingLanguage',
    rangeIncludes:  [
      'Text',
      'ComputerLanguage'
    ],
    type:           'Property'
  },
  programmingModel:                 {
    description:    'Indicates whether API is managed or unmanaged.',
    domainIncludes: 'APIReference',
    id:             'programmingModel',
    label:          'programmingModel',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  propertyID:                       {
    description:    'A commonly used identifier for the characteristic represented by the property, e.g. a manufacturer or a standard code for a property. propertyID can be\n(1) a prefixed string, mainly meant to be used with standards for product properties; (2) a site-specific, non-prefixed string (e.g. the primary key of the property or the vendor-specific id of the property), or (3)\na URL indicating the type of the property, either pointing to an external vocabulary, or a Web resource that describes the property (e.g. a glossary entry).\nStandards bodies should promote a standard prefix for the identifiers of properties from their standards.',
    domainIncludes: 'PropertyValue',
    id:             'propertyID',
    label:          'propertyID',
    rangeIncludes:  [
      'Text',
      'URL'
    ],
    type:           'Property'
  },
  proteinContent:                   {
    description:    'The number of grams of protein.',
    domainIncludes: 'NutritionInformation',
    id:             'proteinContent',
    label:          'proteinContent',
    rangeIncludes:  'Mass',
    type:           'Property'
  },
  provider:                         {
    description:    'The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller.',
    domainIncludes: [
      'Flight',
      'Invoice',
      'Service',
      'TrainTrip',
      'ParcelDelivery',
      'CreativeWork',
      'Reservation',
      'BusTrip'
    ],
    id:             'provider',
    label:          'provider',
    rangeIncludes:  [
      'Person',
      'Organization'
    ],
    type:           'Property'
  },
  providerMobility:                 {
    description:    'Indicates the mobility of a provided service (e.g. \'static\', \'dynamic\').',
    domainIncludes: 'Service',
    id:             'providerMobility',
    label:          'providerMobility',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  providesBroadcastService:         {
    description:    'The BroadcastService offered on this channel.',
    domainIncludes: 'BroadcastChannel',
    id:             'providesBroadcastService',
    label:          'providesBroadcastService',
    rangeIncludes:  'BroadcastService',
    type:           'Property'
  },
  providesService:                  {
    description:    'The service provided by this channel.',
    domainIncludes: 'ServiceChannel',
    id:             'providesService',
    label:          'providesService',
    rangeIncludes:  'Service',
    type:           'Property'
  },
  publication:                      {
    description:    'A publication event associated with the item.',
    domainIncludes: 'CreativeWork',
    id:             'publication',
    label:          'publication',
    rangeIncludes:  'PublicationEvent',
    type:           'Property'
  },
  publishedOn:                      {
    description:    'A broadcast service associated with the publication event.',
    domainIncludes: 'PublicationEvent',
    id:             'publishedOn',
    label:          'publishedOn',
    rangeIncludes:  'BroadcastService',
    type:           'Property'
  },
  publisher:                        {
    description:    'The publisher of the creative work.',
    domainIncludes: 'CreativeWork',
    id:             'publisher',
    label:          'publisher',
    rangeIncludes:  [
      'Person',
      'Organization'
    ],
    type:           'Property'
  },
  publishingPrinciples:             {
    description:    'Link to page describing the editorial principles of the organization primarily responsible for the creation of the CreativeWork.',
    domainIncludes: 'CreativeWork',
    id:             'publishingPrinciples',
    label:          'publishingPrinciples',
    rangeIncludes:  'URL',
    type:           'Property'
  },
  purchaseDate:                     {
    description:    'The date the item e.g. vehicle was purchased by the current owner.',
    domainIncludes: [
      'Vehicle',
      'Product'
    ],
    id:             'purchaseDate',
    label:          'purchaseDate',
    rangeIncludes:  'Date',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group',
    type:           'Property'
  },
  qualifications:                   {
    description:    'Specific qualifications required for this role.',
    domainIncludes: 'JobPosting',
    id:             'qualifications',
    label:          'qualifications',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  query:                            {
    description:    'A sub property of instrument. The query used on this action.',
    domainIncludes: 'SearchAction',
    id:             'query',
    label:          'query',
    rangeIncludes:  'Text',
    subPropertyOf:  'instrument',
    type:           'Property'
  },
  quest:                            {
    description:    'The task that a player-controlled character, or group of characters may complete in order to gain a reward.',
    domainIncludes: [
      'VideoGameSeries',
      'Game'
    ],
    id:             'quest',
    label:          'quest',
    rangeIncludes:  'Thing',
    type:           'Property'
  },
  question:                         {
    description:    'A sub property of object. A question.',
    domainIncludes: 'AskAction',
    id:             'question',
    label:          'question',
    rangeIncludes:  'Question',
    subPropertyOf:  'object',
    type:           'Property'
  },
  rangeIncludes:                    {
    id: 'rangeIncludes'
  },
  ratingCount:                      {
    description:    'The count of total number of ratings.',
    domainIncludes: 'AggregateRating',
    id:             'ratingCount',
    label:          'ratingCount',
    rangeIncludes:  'Integer',
    type:           'Property'
  },
  ratingValue:                      {
    description:    'The rating for the content.',
    domainIncludes: 'Rating',
    id:             'ratingValue',
    label:          'ratingValue',
    rangeIncludes:  [
      'Number',
      'Text'
    ],
    type:           'Property'
  },
  readonlyValue:                    {
    description:    'Whether or not a property is mutable.  Default is false. Specifying this for a property that also has a value makes it act similar to a "hidden" input in an HTML form.',
    domainIncludes: 'PropertyValueSpecification',
    id:             'readonlyValue',
    label:          'readonlyValue',
    rangeIncludes:  'Boolean',
    type:           'Property'
  },
  realEstateAgent:                  {
    description:    'A sub property of participant. The real estate agent involved in the action.',
    domainIncludes: 'RentAction',
    id:             'realEstateAgent',
    label:          'realEstateAgent',
    rangeIncludes:  'RealEstateAgent',
    subPropertyOf:  'participant',
    type:           'Property'
  },
  recipe:                           {
    description:    'A sub property of instrument. The recipe/instructions used to perform the action.',
    domainIncludes: 'CookAction',
    id:             'recipe',
    label:          'recipe',
    rangeIncludes:  'Recipe',
    subPropertyOf:  'instrument',
    type:           'Property'
  },
  recipeCategory:                   {
    description:    'The category of the recipe—for example, appetizer, entree, etc.',
    domainIncludes: 'Recipe',
    id:             'recipeCategory',
    label:          'recipeCategory',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  recipeCuisine:                    {
    description:    'The cuisine of the recipe (for example, French or Ethiopian).',
    domainIncludes: 'Recipe',
    id:             'recipeCuisine',
    label:          'recipeCuisine',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  recipeIngredient:                 {
    description:    'A single ingredient used in the recipe, e.g. sugar, flour or garlic.',
    domainIncludes: 'Recipe',
    id:             'recipeIngredient',
    label:          'recipeIngredient',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  recipeInstructions:               {
    description:    'A step or instruction involved in making the recipe.',
    domainIncludes: 'Recipe',
    id:             'recipeInstructions',
    label:          'recipeInstructions',
    rangeIncludes:  [
      'Text',
      'ItemList'
    ],
    type:           'Property'
  },
  recipeYield:                      {
    description:    'The quantity produced by the recipe (for example, number of people served, number of servings, etc).',
    domainIncludes: 'Recipe',
    id:             'recipeYield',
    label:          'recipeYield',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  recipient:                        {
    description:    'A sub property of participant. The participant who is at the receiving end of the action.',
    domainIncludes: [
      'SendAction',
      'PayAction',
      'ReturnAction',
      'DonateAction',
      'GiveAction',
      'CommunicateAction',
      'AuthorizeAction',
      'Message',
      'TipAction'
    ],
    id:             'recipient',
    label:          'recipient',
    rangeIncludes:  [
      'Organization',
      'Audience',
      'Person'
    ],
    subPropertyOf:  'participant',
    type:           'Property'
  },
  recordLabel:                      {
    description:        'The label that issued the release.',
    domainIncludes:     'MusicRelease',
    equivalentProperty: 'http://purl.org/ontology/mo/label',
    id:                 'recordLabel',
    label:              'recordLabel',
    rangeIncludes:      'Organization',
    source:             'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ',
    type:               'Property'
  },
  recordedAs:                       {
    description:    'An audio recording of the work.',
    domainIncludes: 'MusicComposition',
    id:             'recordedAs',
    inverseOf:      'recordingOf',
    label:          'recordedAs',
    rangeIncludes:  'MusicRecording',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ',
    type:           'Property'
  },
  recordedAt:                       {
    description:    'The Event where the CreativeWork was recorded. The CreativeWork may capture all or part of the event.',
    domainIncludes: 'CreativeWork',
    id:             'recordedAt',
    inverseOf:      'recordedIn',
    label:          'recordedAt',
    rangeIncludes:  'Event',
    type:           'Property'
  },
  recordedIn:                       {
    description:    'The CreativeWork that captured all or part of this Event.',
    domainIncludes: 'Event',
    id:             'recordedIn',
    inverseOf:      'recordedAt',
    label:          'recordedIn',
    rangeIncludes:  'CreativeWork',
    type:           'Property'
  },
  recordingOf:                      {
    description:    'The composition this track is a recording of.',
    domainIncludes: 'MusicRecording',
    id:             'recordingOf',
    inverseOf:      'recordedAs',
    label:          'recordingOf',
    rangeIncludes:  'MusicComposition',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ',
    type:           'Property'
  },
  referenceQuantity:                {
    description:    'The reference quantity for which a certain price applies, e.g. 1 EUR per 4 kWh of electricity. This property is a replacement for unitOfMeasurement for the advanced cases where the price does not relate to a standard unit.',
    domainIncludes: 'UnitPriceSpecification',
    id:             'referenceQuantity',
    label:          'referenceQuantity',
    rangeIncludes:  'QuantitativeValue',
    source:         [
      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
      'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsProperties'
    ],
    type:           'Property'
  },
  referencesOrder:                  {
    description:    'The Order(s) related to this Invoice. One or more Orders may be combined into a single Invoice.',
    domainIncludes: 'Invoice',
    id:             'referencesOrder',
    label:          'referencesOrder',
    rangeIncludes:  'Order',
    type:           'Property'
  },
  regionsAllowed:                   {
    description:    'The regions where the media is allowed. If not specified, then it\'s assumed to be allowed everywhere. Specify the countries in <a href="http://en.wikipedia.org/wiki/ISO_3166">ISO 3166 format</a>.',
    domainIncludes: 'MediaObject',
    id:             'regionsAllowed',
    label:          'regionsAllowed',
    rangeIncludes:  'Place',
    type:           'Property'
  },
  relatedLink:                      {
    description:    'A link related to this web page, for example to other related web pages.',
    domainIncludes: 'WebPage',
    id:             'relatedLink',
    label:          'relatedLink',
    rangeIncludes:  'URL',
    type:           'Property'
  },
  relatedTo:                        {
    description:    'The most generic familial relation.',
    domainIncludes: 'Person',
    id:             'relatedTo',
    label:          'relatedTo',
    rangeIncludes:  'Person',
    type:           'Property'
  },
  releaseDate:                      {
    description:    'The release date of a product or product model. This can be used to distinguish the exact variant of a product.',
    domainIncludes: 'Product',
    id:             'releaseDate',
    label:          'releaseDate',
    rangeIncludes:  'Date',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  releaseNotes:                     {
    description:    'Description of what changed in this version.',
    domainIncludes: 'SoftwareApplication',
    id:             'releaseNotes',
    label:          'releaseNotes',
    rangeIncludes:  [
      'Text',
      'URL'
    ],
    type:           'Property'
  },
  releaseOf:                        {
    description:    'The album this is a release of.',
    domainIncludes: 'MusicRelease',
    id:             'releaseOf',
    inverseOf:      'albumRelease',
    label:          'releaseOf',
    rangeIncludes:  'MusicAlbum',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ',
    type:           'Property'
  },
  releasedEvent:                    {
    description:    'The place and time the release was issued, expressed as a PublicationEvent.',
    domainIncludes: 'CreativeWork',
    id:             'releasedEvent',
    label:          'releasedEvent',
    rangeIncludes:  'PublicationEvent',
    type:           'Property'
  },
  replacee:                         {
    description:    'A sub property of object. The object that is being replaced.',
    domainIncludes: 'ReplaceAction',
    id:             'replacee',
    label:          'replacee',
    rangeIncludes:  'Thing',
    subPropertyOf:  'object',
    type:           'Property'
  },
  replacer:                         {
    description:    'A sub property of object. The object that replaces.',
    domainIncludes: 'ReplaceAction',
    id:             'replacer',
    label:          'replacer',
    rangeIncludes:  'Thing',
    subPropertyOf:  'object',
    type:           'Property'
  },
  replyToUrl:                       {
    description:    'The URL at which a reply may be posted to the specified UserComment.',
    domainIncludes: 'UserComments',
    id:             'replyToUrl',
    label:          'replyToUrl',
    rangeIncludes:  'URL',
    type:           'Property'
  },
  reportNumber:                     {
    description:    'The number or other unique designator assigned to a Report by the publishing organization.',
    domainIncludes: 'Report',
    id:             'reportNumber',
    label:          'reportNumber',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  representativeOfPage:             {
    description:    'Indicates whether this image is representative of the content of the page.',
    domainIncludes: 'ImageObject',
    id:             'representativeOfPage',
    label:          'representativeOfPage',
    rangeIncludes:  'Boolean',
    type:           'Property'
  },
  requiredCollateral:               {
    description:    'Assets required to secure loan or credit repayments. It may take form of third party pledge, goods, financial instruments (cash, securities, etc.)',
    domainIncludes: 'LoanOrCredit',
    id:             'requiredCollateral',
    label:          'requiredCollateral',
    rangeIncludes:  [
      'Thing',
      'Text'
    ],
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#FIBO',
    type:           'Property'
  },
  requiredGender:                   {
    description:    'Audiences defined by a person\'s gender.',
    domainIncludes: 'PeopleAudience',
    id:             'requiredGender',
    label:          'requiredGender',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  requiredMaxAge:                   {
    description:    'Audiences defined by a person\'s maximum age.',
    domainIncludes: 'PeopleAudience',
    id:             'requiredMaxAge',
    label:          'requiredMaxAge',
    rangeIncludes:  'Integer',
    type:           'Property'
  },
  requiredMinAge:                   {
    description:    'Audiences defined by a person\'s minimum age.',
    domainIncludes: 'PeopleAudience',
    id:             'requiredMinAge',
    label:          'requiredMinAge',
    rangeIncludes:  'Integer',
    type:           'Property'
  },
  requirements:                     {
    description:    'Component dependency requirements for application. This includes runtime environments and shared libraries that are not included in the application distribution package, but required to run the application (Examples: DirectX, Java or .NET runtime).',
    domainIncludes: 'SoftwareApplication',
    id:             'requirements',
    label:          'requirements',
    rangeIncludes:  [
      'Text',
      'URL'
    ],
    supersededBy:   'softwareRequirements',
    type:           'Property'
  },
  requiresSubscription:             {
    description:    'Indicates if use of the media require a subscription  (either paid or free). Allowed values are <code>true</code> or <code>false</code> (note that an earlier version had \'yes\', \'no\').',
    domainIncludes: 'MediaObject',
    id:             'requiresSubscription',
    label:          'requiresSubscription',
    rangeIncludes:  'Boolean',
    type:           'Property'
  },
  reservationFor:                   {
    description:    'The thing -- flight, event, restaurant,etc. being reserved.',
    domainIncludes: 'Reservation',
    id:             'reservationFor',
    label:          'reservationFor',
    rangeIncludes:  'Thing',
    type:           'Property'
  },
  reservationId:                    {
    description:    'A unique identifier for the reservation.',
    domainIncludes: 'Reservation',
    id:             'reservationId',
    label:          'reservationId',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  reservationStatus:                {
    description:    'The current status of the reservation.',
    domainIncludes: 'Reservation',
    id:             'reservationStatus',
    label:          'reservationStatus',
    rangeIncludes:  'ReservationStatusType',
    type:           'Property'
  },
  reservedTicket:                   {
    description:    'A ticket associated with the reservation.',
    domainIncludes: 'Reservation',
    id:             'reservedTicket',
    label:          'reservedTicket',
    rangeIncludes:  'Ticket',
    type:           'Property'
  },
  responsibilities:                 {
    description:    'Responsibilities associated with this role.',
    domainIncludes: 'JobPosting',
    id:             'responsibilities',
    label:          'responsibilities',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  result:                           {
    description:    'The result produced in the action. e.g. John wrote <em>a book</em>.',
    domainIncludes: 'Action',
    id:             'result',
    label:          'result',
    rangeIncludes:  'Thing',
    type:           'Property'
  },
  resultComment:                    {
    description:    'A sub property of result. The Comment created or sent as a result of this action.',
    domainIncludes: [
      'ReplyAction',
      'CommentAction'
    ],
    id:             'resultComment',
    label:          'resultComment',
    rangeIncludes:  'Comment',
    subPropertyOf:  'result',
    type:           'Property'
  },
  resultReview:                     {
    description:    'A sub property of result. The review that resulted in the performing of the action.',
    domainIncludes: 'ReviewAction',
    id:             'resultReview',
    label:          'resultReview',
    rangeIncludes:  'Review',
    subPropertyOf:  'result',
    type:           'Property'
  },
  review:                           {
    description:    'A review of the item.',
    domainIncludes: [
      'Product',
      'Place',
      'Offer',
      'Brand',
      'Event',
      'CreativeWork',
      'Organization',
      'Service'
    ],
    id:             'review',
    label:          'review',
    rangeIncludes:  'Review',
    type:           'Property'
  },
  reviewBody:                       {
    description:    'The actual body of the review.',
    domainIncludes: 'Review',
    id:             'reviewBody',
    label:          'reviewBody',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  reviewCount:                      {
    description:    'The count of total number of reviews.',
    domainIncludes: 'AggregateRating',
    id:             'reviewCount',
    label:          'reviewCount',
    rangeIncludes:  'Integer',
    type:           'Property'
  },
  reviewRating:                     {
    description:    'The rating given in this review. Note that reviews can themselves be rated. The <code>reviewRating</code> applies to rating given by the review. The <a class="localLink" href="/aggregateRating">aggregateRating</a> property applies to the review itself, as a creative work.',
    domainIncludes: 'Review',
    id:             'reviewRating',
    label:          'reviewRating',
    rangeIncludes:  'Rating',
    type:           'Property'
  },
  reviewedBy:                       {
    description:    'People or organizations that have reviewed the content on this web page for accuracy and/or completeness.',
    domainIncludes: 'WebPage',
    id:             'reviewedBy',
    label:          'reviewedBy',
    rangeIncludes:  [
      'Organization',
      'Person'
    ],
    type:           'Property'
  },
  reviews:                          {
    description:    'Review of the item.',
    domainIncludes: [
      'Offer',
      'Place',
      'Organization',
      'Product',
      'CreativeWork'
    ],
    id:             'reviews',
    label:          'reviews',
    rangeIncludes:  'Review',
    supersededBy:   'review',
    type:           'Property'
  },
  roleName:                         {
    description:    'A role played, performed or filled by a person or organization. For example, the team of creators for a comic book might fill the roles named \'inker\', \'penciller\', and \'letterer\'; or an athlete in a SportsTeam might play in the position named \'Quarterback\'.',
    domainIncludes: 'Role',
    id:             'roleName',
    label:          'roleName',
    rangeIncludes:  [
      'URL',
      'Text'
    ],
    type:           'Property'
  },
  rsvpResponse:                     {
    description:    'The response (yes, no, maybe) to the RSVP.',
    domainIncludes: 'RsvpAction',
    id:             'rsvpResponse',
    label:          'rsvpResponse',
    rangeIncludes:  'RsvpResponseType',
    type:           'Property'
  },
  runtime:                          {
    description:    'Runtime platform or script interpreter dependencies (Example - Java v1, Python2.3, .Net Framework 3.0).',
    domainIncludes: 'SoftwareSourceCode',
    id:             'runtime',
    label:          'runtime',
    rangeIncludes:  'Text',
    supersededBy:   'runtimePlatform',
    type:           'Property'
  },
  runtimePlatform:                  {
    description:    'Runtime platform or script interpreter dependencies (Example - Java v1, Python2.3, .Net Framework 3.0).',
    domainIncludes: 'SoftwareSourceCode',
    id:             'runtimePlatform',
    label:          'runtimePlatform',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  salaryCurrency:                   {
    description:    'The currency (coded using <a href="http://en.wikipedia.org/wiki/ISO_4217">ISO 4217</a> ) used for the main salary information in this job posting or for this employee.',
    domainIncludes: [
      'JobPosting',
      'EmployeeRole'
    ],
    id:             'salaryCurrency',
    label:          'salaryCurrency',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  sameAs:                           {
    description:    'URL of a reference Web page that unambiguously indicates the item\'s identity. E.g. the URL of the item\'s Wikipedia page, Freebase page, or official website.',
    domainIncludes: 'Thing',
    id:             'sameAs',
    label:          'sameAs',
    rangeIncludes:  'URL',
    type:           'Property'
  },
  sampleType:                       {
    description:    'What type of code sample: full (compile ready) solution, code snippet, inline code, scripts, template.',
    domainIncludes: 'SoftwareSourceCode',
    id:             'sampleType',
    label:          'sampleType',
    rangeIncludes:  'Text',
    supersededBy:   'codeSampleType',
    type:           'Property'
  },
  saturatedFatContent:              {
    description:    'The number of grams of saturated fat.',
    domainIncludes: 'NutritionInformation',
    id:             'saturatedFatContent',
    label:          'saturatedFatContent',
    rangeIncludes:  'Mass',
    type:           'Property'
  },
  scheduledPaymentDate:             {
    description:    'The date the invoice is scheduled to be paid.',
    domainIncludes: 'Invoice',
    id:             'scheduledPaymentDate',
    label:          'scheduledPaymentDate',
    rangeIncludes:  'Date',
    type:           'Property'
  },
  scheduledTime:                    {
    description:    'The time the object is scheduled to.',
    domainIncludes: 'PlanAction',
    id:             'scheduledTime',
    label:          'scheduledTime',
    rangeIncludes:  'DateTime',
    type:           'Property'
  },
  schemaVersion:                    {
    description:    'Indicates (by URL or string) a particular version of a schema used in some CreativeWork. For example, a document could declare a schemaVersion using an URL such as http://schema.org/version/2.0/ if precise indication of schema version was required by some application.',
    domainIncludes: 'CreativeWork',
    id:             'schemaVersion',
    label:          'schemaVersion',
    rangeIncludes:  [
      'URL',
      'Text'
    ],
    type:           'Property'
  },
  screenCount:                      {
    description:    'The number of screens in the movie theater.',
    domainIncludes: 'MovieTheater',
    id:             'screenCount',
    label:          'screenCount',
    rangeIncludes:  'Number',
    type:           'Property'
  },
  screenshot:                       {
    description:    'A link to a screenshot image of the app.',
    domainIncludes: 'SoftwareApplication',
    id:             'screenshot',
    label:          'screenshot',
    rangeIncludes:  [
      'ImageObject',
      'URL'
    ],
    type:           'Property'
  },
  season:                           {
    description:    'A season in a media series.',
    domainIncludes: [
      'VideoGameSeries',
      'RadioSeries',
      'TVSeries'
    ],
    id:             'season',
    label:          'season',
    rangeIncludes:  'CreativeWorkSeason',
    subPropertyOf:  'hasPart',
    supersededBy:   'containsSeason',
    type:           'Property'
  },
  seasonNumber:                     {
    description:    'Position of the season within an ordered group of seasons.',
    domainIncludes: 'CreativeWorkSeason',
    id:             'seasonNumber',
    label:          'seasonNumber',
    rangeIncludes:  [
      'Text',
      'Integer'
    ],
    subPropertyOf:  'position',
    type:           'Property'
  },
  seasons:                          {
    description:    'A season in a media series.',
    domainIncludes: [
      'TVSeries',
      'RadioSeries',
      'VideoGameSeries'
    ],
    id:             'seasons',
    label:          'seasons',
    rangeIncludes:  'CreativeWorkSeason',
    supersededBy:   'season',
    type:           'Property'
  },
  seatNumber:                       {
    description:    'The location of the reserved seat (e.g., 27).',
    domainIncludes: 'Seat',
    id:             'seatNumber',
    label:          'seatNumber',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  seatRow:                          {
    description:    'The row location of the reserved seat (e.g., B).',
    domainIncludes: 'Seat',
    id:             'seatRow',
    label:          'seatRow',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  seatSection:                      {
    description:    'The section location of the reserved seat (e.g. Orchestra).',
    domainIncludes: 'Seat',
    id:             'seatSection',
    label:          'seatSection',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  seatingType:                      {
    description:    'The type/class of the seat.',
    domainIncludes: 'Seat',
    id:             'seatingType',
    label:          'seatingType',
    rangeIncludes:  [
      'Text',
      'QualitativeValue'
    ],
    type:           'Property'
  },
  securityScreening:                {
    description:    'The type of security screening the passenger is subject to.',
    domainIncludes: 'FlightReservation',
    id:             'securityScreening',
    label:          'securityScreening',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  seeks:                            {
    description:    'A pointer to products or services sought by the organization or person (demand).',
    domainIncludes: [
      'Organization',
      'Person'
    ],
    id:             'seeks',
    label:          'seeks',
    rangeIncludes:  'Demand',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  seller:                           {
    description:    'An entity which offers (sells / leases / lends / loans) the services / goods.  A seller may also be a provider.',
    domainIncludes: [
      'Demand',
      'Flight',
      'BuyAction',
      'Offer',
      'Order'
    ],
    id:             'seller',
    label:          'seller',
    rangeIncludes:  [
      'Organization',
      'Person'
    ],
    subPropertyOf:  'participant',
    type:           'Property'
  },
  sender:                           {
    description:    'A sub property of participant. The participant who is at the sending end of the action.',
    domainIncludes: [
      'Message',
      'ReceiveAction'
    ],
    id:             'sender',
    label:          'sender',
    rangeIncludes:  [
      'Organization',
      'Person',
      'Audience'
    ],
    subPropertyOf:  'participant',
    type:           'Property'
  },
  serialNumber:                     {
    description:    'The serial number or any alphanumeric identifier of a particular product. When attached to an offer, it is a shortcut for the serial number of the product included in the offer.',
    domainIncludes: [
      'Offer',
      'IndividualProduct',
      'Demand'
    ],
    id:             'serialNumber',
    label:          'serialNumber',
    rangeIncludes:  'Text',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  serverStatus:                     {
    description:    'Status of a game server.',
    domainIncludes: 'GameServer',
    id:             'serverStatus',
    label:          'serverStatus',
    rangeIncludes:  'GameServerStatus',
    type:           'Property'
  },
  servesCuisine:                    {
    description:    'The cuisine of the restaurant.',
    domainIncludes: 'FoodEstablishment',
    id:             'servesCuisine',
    label:          'servesCuisine',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  serviceArea:                      {
    description:    'The geographic area where the service is provided.',
    domainIncludes: [
      'ContactPoint',
      'Organization',
      'Service'
    ],
    id:             'serviceArea',
    label:          'serviceArea',
    rangeIncludes:  [
      'AdministrativeArea',
      'GeoShape',
      'Place'
    ],
    supersededBy:   'areaServed',
    type:           'Property'
  },
  serviceAudience:                  {
    description:    'The audience eligible for this service.',
    domainIncludes: 'Service',
    id:             'serviceAudience',
    label:          'serviceAudience',
    rangeIncludes:  'Audience',
    supersededBy:   'audience',
    type:           'Property'
  },
  serviceLocation:                  {
    description:    'The location (e.g. civic structure, local business, etc.) where a person can go to access the service.',
    domainIncludes: 'ServiceChannel',
    id:             'serviceLocation',
    label:          'serviceLocation',
    rangeIncludes:  'Place',
    type:           'Property'
  },
  serviceOperator:                  {
    description:    'The operating organization, if different from the provider.  This enables the representation of services that are provided by an organization, but operated by another organization like a subcontractor.',
    domainIncludes: 'GovernmentService',
    id:             'serviceOperator',
    label:          'serviceOperator',
    rangeIncludes:  'Organization',
    type:           'Property'
  },
  serviceOutput:                    {
    description:    'The tangible thing generated by the service, e.g. a passport, permit, etc.',
    domainIncludes: 'Service',
    id:             'serviceOutput',
    label:          'serviceOutput',
    rangeIncludes:  'Thing',
    type:           'Property'
  },
  servicePhone:                     {
    description:    'The phone number to use to access the service.',
    domainIncludes: 'ServiceChannel',
    id:             'servicePhone',
    label:          'servicePhone',
    rangeIncludes:  'ContactPoint',
    type:           'Property'
  },
  servicePostalAddress:             {
    description:    'The address for accessing the service by mail.',
    domainIncludes: 'ServiceChannel',
    id:             'servicePostalAddress',
    label:          'servicePostalAddress',
    rangeIncludes:  'PostalAddress',
    type:           'Property'
  },
  serviceSmsNumber:                 {
    description:    'The number to access the service by text message.',
    domainIncludes: 'ServiceChannel',
    id:             'serviceSmsNumber',
    label:          'serviceSmsNumber',
    rangeIncludes:  'ContactPoint',
    type:           'Property'
  },
  serviceType:                      {
    description:    'The type of service being offered, e.g. veterans\' benefits, emergency relief, etc.',
    domainIncludes: 'Service',
    id:             'serviceType',
    label:          'serviceType',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  serviceUrl:                       {
    description:    'The website to access the service.',
    domainIncludes: 'ServiceChannel',
    id:             'serviceUrl',
    label:          'serviceUrl',
    rangeIncludes:  'URL',
    type:           'Property'
  },
  servingSize:                      {
    description:    'The serving size, in terms of the number of volume or mass.',
    domainIncludes: 'NutritionInformation',
    id:             'servingSize',
    label:          'servingSize',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  sharedContent:                    {
    description:    'A CreativeWork such as an image, video, or audio clip shared as part of this posting.',
    domainIncludes: 'SocialMediaPosting',
    id:             'sharedContent',
    label:          'sharedContent',
    rangeIncludes:  'CreativeWork',
    type:           'Property'
  },
  sibling:                          {
    description:    'A sibling of the person.',
    domainIncludes: 'Person',
    id:             'sibling',
    label:          'sibling',
    rangeIncludes:  'Person',
    type:           'Property'
  },
  siblings:                         {
    description:    'A sibling of the person.',
    domainIncludes: 'Person',
    id:             'siblings',
    label:          'siblings',
    rangeIncludes:  'Person',
    supersededBy:   'sibling',
    type:           'Property'
  },
  significantLink:                  {
    description:    'One of the more significant URLs on the page. Typically, these are the non-navigation links that are clicked on the most.',
    domainIncludes: 'WebPage',
    id:             'significantLink',
    label:          'significantLink',
    rangeIncludes:  'URL',
    type:           'Property'
  },
  significantLinks:                 {
    description:    'The most significant URLs on the page. Typically, these are the non-navigation links that are clicked on the most.',
    domainIncludes: 'WebPage',
    id:             'significantLinks',
    label:          'significantLinks',
    rangeIncludes:  'URL',
    supersededBy:   'significantLink',
    type:           'Property'
  },
  skills:                           {
    description:    'Skills required to fulfill this role.',
    domainIncludes: 'JobPosting',
    id:             'skills',
    label:          'skills',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  sku:                              {
    description:    'The Stock Keeping Unit (SKU), i.e. a merchant-specific identifier for a product or service, or the product to which the offer refers.',
    domainIncludes: [
      'Product',
      'Demand',
      'Offer'
    ],
    id:             'sku',
    label:          'sku',
    rangeIncludes:  'Text',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  smokingAllowed:                   {
    description:    'Indicates whether it is allowed to smoke in the place, e.g. in the restaurant, hotel or hotel room.',
    domainIncludes: 'Place',
    id:             'smokingAllowed',
    label:          'smokingAllowed',
    rangeIncludes:  'Boolean',
    source:         'https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology',
    type:           'Property'
  },
  sodiumContent:                    {
    description:    'The number of milligrams of sodium.',
    domainIncludes: 'NutritionInformation',
    id:             'sodiumContent',
    label:          'sodiumContent',
    rangeIncludes:  'Mass',
    type:           'Property'
  },
  softwareAddOn:                    {
    description:    'Additional content for a software application.',
    domainIncludes: 'SoftwareApplication',
    id:             'softwareAddOn',
    label:          'softwareAddOn',
    rangeIncludes:  'SoftwareApplication',
    type:           'Property'
  },
  softwareHelp:                     {
    description:    'Software application help.',
    domainIncludes: 'SoftwareApplication',
    id:             'softwareHelp',
    label:          'softwareHelp',
    rangeIncludes:  'CreativeWork',
    type:           'Property'
  },
  softwareRequirements:             {
    description:    'Component dependency requirements for application. This includes runtime environments and shared libraries that are not included in the application distribution package, but required to run the application (Examples: DirectX, Java or .NET runtime).',
    domainIncludes: 'SoftwareApplication',
    id:             'softwareRequirements',
    label:          'softwareRequirements',
    rangeIncludes:  [
      'URL',
      'Text'
    ],
    type:           'Property'
  },
  softwareVersion:                  {
    description:    'Version of the software instance.',
    domainIncludes: 'SoftwareApplication',
    id:             'softwareVersion',
    label:          'softwareVersion',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  sourceOrganization:               {
    description:    'The Organization on whose behalf the creator was working.',
    domainIncludes: 'CreativeWork',
    id:             'sourceOrganization',
    label:          'sourceOrganization',
    rangeIncludes:  'Organization',
    type:           'Property'
  },
  spatial:                          {
    description:        'The range of spatial applicability of a dataset, e.g. for a dataset of New York weather, the state of New York.',
    domainIncludes:     'Dataset',
    equivalentProperty: 'http://purl.org/dc/terms/spatial',
    id:                 'spatial',
    label:              'spatial',
    rangeIncludes:      'Place',
    supersededBy:       'spatialCoverage',
    type:               'Property'
  },
  spatialCoverage:                  {
    description:        'The spatialCoverage of a CreativeWork indicates the place(s) which are the focus of the content. It is a subproperty of\n      contentLocation intended primarily for more technical and detailed materials. For example with a Dataset, it indicates\n      areas that the dataset describes: a dataset of New York weather would have spatialCoverage which was the place: the state of New York.',
    domainIncludes:     'CreativeWork',
    equivalentProperty: 'http://purl.org/dc/terms/spatial',
    id:                 'spatialCoverage',
    label:              'spatialCoverage',
    rangeIncludes:      'Place',
    subPropertyOf:      'contentLocation',
    type:               'Property'
  },
  specialCommitments:               {
    description:    'Any special commitments associated with this job posting. Valid entries include VeteranCommit, MilitarySpouseCommit, etc.',
    domainIncludes: 'JobPosting',
    id:             'specialCommitments',
    label:          'specialCommitments',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  specialOpeningHoursSpecification: {
    description:    'The special opening hours of a certain place.</p>\n<p>Use this to explicitly override general opening hours brought in scope by <a class="localLink" href="/openingHoursSpecification">openingHoursSpecification</a> or <a class="localLink" href="/openingHours">openingHours</a>.',
    domainIncludes: 'Place',
    id:             'specialOpeningHoursSpecification',
    label:          'specialOpeningHoursSpecification',
    rangeIncludes:  'OpeningHoursSpecification',
    type:           'Property'
  },
  specialty:                        {
    description:    'One of the domain specialities to which this web page\'s content applies.',
    domainIncludes: 'WebPage',
    id:             'specialty',
    label:          'specialty',
    rangeIncludes:  'Specialty',
    type:           'Property'
  },
  sponsor:                          {
    description:    'A person or organization that supports a thing through a pledge, promise, or financial contribution. e.g. a sponsor of a Medical Study or a corporate sponsor of an event.',
    domainIncludes: [
      'Organization',
      'Event',
      'CreativeWork',
      'Person'
    ],
    id:             'sponsor',
    label:          'sponsor',
    rangeIncludes:  [
      'Person',
      'Organization'
    ],
    type:           'Property'
  },
  sport:                            {
    description:    'A type of sport (e.g. Baseball).',
    domainIncludes: 'SportsOrganization',
    id:             'sport',
    label:          'sport',
    rangeIncludes:  [
      'URL',
      'Text'
    ],
    type:           'Property'
  },
  sportsActivityLocation:           {
    description:    'A sub property of location. The sports activity location where this action occurred.',
    domainIncludes: 'ExerciseAction',
    id:             'sportsActivityLocation',
    label:          'sportsActivityLocation',
    rangeIncludes:  'SportsActivityLocation',
    subPropertyOf:  'location',
    type:           'Property'
  },
  sportsEvent:                      {
    description:    'A sub property of location. The sports event where this action occurred.',
    domainIncludes: 'ExerciseAction',
    id:             'sportsEvent',
    label:          'sportsEvent',
    rangeIncludes:  'SportsEvent',
    subPropertyOf:  'location',
    type:           'Property'
  },
  sportsTeam:                       {
    description:    'A sub property of participant. The sports team that participated on this action.',
    domainIncludes: 'ExerciseAction',
    id:             'sportsTeam',
    label:          'sportsTeam',
    rangeIncludes:  'SportsTeam',
    subPropertyOf:  'participant',
    type:           'Property'
  },
  spouse:                           {
    description:    'The person\'s spouse.',
    domainIncludes: 'Person',
    id:             'spouse',
    label:          'spouse',
    rangeIncludes:  'Person',
    type:           'Property'
  },
  starRating:                       {
    description:    'An official rating for a lodging business or food establishment, e.g. from national associations or standards bodies. Use the author property to indicate the rating organization, e.g. as an Organization with name such as (e.g. HOTREC, DEHOGA, WHR, or Hotelstars).',
    domainIncludes: [
      'FoodEstablishment',
      'LodgingBusiness'
    ],
    id:             'starRating',
    label:          'starRating',
    rangeIncludes:  'Rating',
    source:         'https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology',
    type:           'Property'
  },
  startDate:                        {
    description:    'The start date and time of the item (in <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO 8601 date format</a>).',
    domainIncludes: [
      'Role',
      'CreativeWorkSeason',
      'DatedMoneySpecification',
      'CreativeWorkSeries',
      'Event'
    ],
    id:             'startDate',
    label:          'startDate',
    rangeIncludes:  [
      'Date',
      'DateTime'
    ],
    type:           'Property'
  },
  startTime:                        {
    description:    'The startTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to start. For actions that span a period of time, when the action was performed. e.g. John wrote a book from <em>January</em> to December.</p>\n<p>Note that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.',
    domainIncludes: [
      'FoodEstablishmentReservation',
      'Action'
    ],
    id:             'startTime',
    label:          'startTime',
    rangeIncludes:  'DateTime',
    type:           'Property'
  },
  steeringPosition:                 {
    description:    'The position of the steering wheel or similar device (mostly for cars).',
    domainIncludes: 'Vehicle',
    id:             'steeringPosition',
    label:          'steeringPosition',
    rangeIncludes:  'SteeringPositionValue',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group',
    type:           'Property'
  },
  stepValue:                        {
    description:    'The stepValue attribute indicates the granularity that is expected (and required) of the value in a PropertyValueSpecification.',
    domainIncludes: 'PropertyValueSpecification',
    id:             'stepValue',
    label:          'stepValue',
    rangeIncludes:  'Number',
    type:           'Property'
  },
  storageRequirements:              {
    description:    'Storage requirements (free space required).',
    domainIncludes: 'SoftwareApplication',
    id:             'storageRequirements',
    label:          'storageRequirements',
    rangeIncludes:  [
      'URL',
      'Text'
    ],
    type:           'Property'
  },
  streetAddress:                    {
    description:    'The street address. For example, 1600 Amphitheatre Pkwy.',
    domainIncludes: 'PostalAddress',
    id:             'streetAddress',
    label:          'streetAddress',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  subEvent:                         {
    description:    'An Event that is part of this event. For example, a conference event includes many presentations, each of which is a subEvent of the conference.',
    domainIncludes: 'Event',
    id:             'subEvent',
    inverseOf:      'superEvent',
    label:          'subEvent',
    rangeIncludes:  'Event',
    type:           'Property'
  },
  subEvents:                        {
    description:    'Events that are a part of this event. For example, a conference event includes many presentations, each subEvents of the conference.',
    domainIncludes: 'Event',
    id:             'subEvents',
    label:          'subEvents',
    rangeIncludes:  'Event',
    supersededBy:   'subEvent',
    type:           'Property'
  },
  subOrganization:                  {
    description:    'A relationship between two organizations where the first includes the second, e.g., as a subsidiary. See also: the more specific \'department\' property.',
    domainIncludes: 'Organization',
    id:             'subOrganization',
    inverseOf:      'parentOrganization',
    label:          'subOrganization',
    rangeIncludes:  'Organization',
    type:           'Property'
  },
  subReservation:                   {
    description:    'The individual reservations included in the package. Typically a repeated property.',
    domainIncludes: 'ReservationPackage',
    id:             'subReservation',
    label:          'subReservation',
    rangeIncludes:  'Reservation',
    type:           'Property'
  },
  subtitleLanguage:                 {
    description:    'Languages in which subtitles/captions are available, in <a href="http://tools.ietf.org/html/bcp47">IETF BCP 47 standard format</a>.',
    domainIncludes: [
      'TVEpisode',
      'ScreeningEvent',
      'Movie'
    ],
    id:             'subtitleLanguage',
    label:          'subtitleLanguage',
    rangeIncludes:  [
      'Language',
      'Text'
    ],
    type:           'Property'
  },
  successorOf:                      {
    description:    'A pointer from a newer variant of a product  to its previous, often discontinued predecessor.',
    domainIncludes: 'ProductModel',
    id:             'successorOf',
    label:          'successorOf',
    rangeIncludes:  'ProductModel',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  sugarContent:                     {
    description:    'The number of grams of sugar.',
    domainIncludes: 'NutritionInformation',
    id:             'sugarContent',
    label:          'sugarContent',
    rangeIncludes:  'Mass',
    type:           'Property'
  },
  suggestedAnswer:                  {
    description:    'An answer (possibly one of several, possibly incorrect) to a Question, e.g. on a Question/Answer site.',
    domainIncludes: 'Question',
    id:             'suggestedAnswer',
    label:          'suggestedAnswer',
    rangeIncludes:  'Answer',
    type:           'Property'
  },
  suggestedGender:                  {
    description:    'The gender of the person or audience.',
    domainIncludes: 'PeopleAudience',
    id:             'suggestedGender',
    label:          'suggestedGender',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  suggestedMaxAge:                  {
    description:    'Maximal age recommended for viewing content.',
    domainIncludes: 'PeopleAudience',
    id:             'suggestedMaxAge',
    label:          'suggestedMaxAge',
    rangeIncludes:  'Number',
    type:           'Property'
  },
  suggestedMinAge:                  {
    description:    'Minimal age recommended for viewing content.',
    domainIncludes: 'PeopleAudience',
    id:             'suggestedMinAge',
    label:          'suggestedMinAge',
    rangeIncludes:  'Number',
    type:           'Property'
  },
  suitableForDiet:                  {
    description:    'Indicates a dietary restriction or guideline for which this recipe is suitable, e.g. diabetic, halal etc.',
    domainIncludes: 'Recipe',
    id:             'suitableForDiet',
    label:          'suitableForDiet',
    rangeIncludes:  'RestrictedDiet',
    type:           'Property'
  },
  superEvent:                       {
    description:    'An event that this event is a part of. For example, a collection of individual music performances might each have a music festival as their superEvent.',
    domainIncludes: 'Event',
    id:             'superEvent',
    inverseOf:      'subEvent',
    label:          'superEvent',
    rangeIncludes:  'Event',
    type:           'Property'
  },
  supportingData:                   {
    description:    'Supporting data for a SoftwareApplication.',
    domainIncludes: 'SoftwareApplication',
    id:             'supportingData',
    label:          'supportingData',
    rangeIncludes:  'DataFeed',
    type:           'Property'
  },
  surface:                          {
    description:    'e.g. Canvas, Paper, Wood, Board, etc.',
    domainIncludes: 'VisualArtwork',
    id:             'surface',
    label:          'surface',
    rangeIncludes:  [
      'Text',
      'URL'
    ],
    supersededBy:   'artworkSurface',
    type:           'Property'
  },
  tags:                             {
    description:    [
      {
        termType: 'Literal',
        value:    'Keywords or tags used to describe this content. Multiple entries in a keywords list are typically delimited by commas.'
      }
    ],
    domainIncludes: [
      'CreativeWork'
    ],
    id:             'tags',
    label:          [
      {
        termType: 'Literal',
        value:    'keywords'
      }
    ],
    rangeIncludes:  [
      'Text'
    ],
    type:           [
      'Property'
    ]
  },
  target:                           {
    description:    'Indicates a target EntryPoint for an Action.',
    domainIncludes: 'Action',
    id:             'target',
    label:          'target',
    rangeIncludes:  'EntryPoint',
    type:           'Property'
  },
  targetCollection:                 {
    description:    'A sub property of object. The collection target of the action.',
    domainIncludes: 'UpdateAction',
    id:             'targetCollection',
    label:          'targetCollection',
    rangeIncludes:  'Thing',
    subPropertyOf:  'object',
    type:           'Property'
  },
  targetDescription:                {
    description:    'The description of a node in an established educational framework.',
    domainIncludes: 'AlignmentObject',
    id:             'targetDescription',
    label:          'targetDescription',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  targetName:                       {
    description:    'The name of a node in an established educational framework.',
    domainIncludes: 'AlignmentObject',
    id:             'targetName',
    label:          'targetName',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  targetPlatform:                   {
    description:    'Type of app development: phone, Metro style, desktop, XBox, etc.',
    domainIncludes: 'APIReference',
    id:             'targetPlatform',
    label:          'targetPlatform',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  targetProduct:                    {
    description:    'Target Operating System / Product to which the code applies.  If applies to several versions, just the product name can be used.',
    domainIncludes: 'SoftwareSourceCode',
    id:             'targetProduct',
    label:          'targetProduct',
    rangeIncludes:  'SoftwareApplication',
    type:           'Property'
  },
  targetUrl:                        {
    description:    'The URL of a node in an established educational framework.',
    domainIncludes: 'AlignmentObject',
    id:             'targetUrl',
    label:          'targetUrl',
    rangeIncludes:  'URL',
    type:           'Property'
  },
  taxID:                            {
    description:    'The Tax / Fiscal ID of the organization or person, e.g. the TIN in the US or the CIF/NIF in Spain.',
    domainIncludes: [
      'Organization',
      'Person'
    ],
    id:             'taxID',
    label:          'taxID',
    rangeIncludes:  'Text',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  telephone:                        {
    description:    'The telephone number.',
    domainIncludes: [
      'Place',
      'ContactPoint',
      'Person',
      'Organization'
    ],
    id:             'telephone',
    label:          'telephone',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  temporal:                         {
    description:    'The range of temporal applicability of a dataset, e.g. for a 2011 census dataset, the year 2011 (in ISO 8601 time interval format).',
    domainIncludes: 'Dataset',
    id:             'temporal',
    label:          'temporal',
    rangeIncludes:  'DateTime',
    supersededBy:   'temporalCoverage',
    type:           'Property'
  },
  temporalCoverage:                 {
    description:        'The temporalCoverage of a CreativeWork indicates the period that the content applies to, i.e. that it describes, either as a DateTime or as a textual string indicating a time period in <a href="https://en.wikipedia.org/wiki/ISO_8601#Time_intervals">ISO 8601 time interval format</a>. In\n      the case of a Dataset it will typically indicate the relevant time period in a precise notation (e.g. for a 2011 census dataset, the year 2011 would be written "2011/2012"). Other forms of content e.g. ScholarlyArticle, Book, TVSeries or TVEpisode may indicate their temporalCoverage in broader terms - textually or via well-known URL.\n      Written works such as books may sometimes have precise temporal coverage too, e.g. a work set in 1939 - 1945 can be indicated in ISO 8601 interval format format via "1939/1945".',
    domainIncludes:     'CreativeWork',
    equivalentProperty: 'http://purl.org/dc/terms/temporal',
    id:                 'temporalCoverage',
    label:              'temporalCoverage',
    rangeIncludes:      [
      'DateTime',
      'URL',
      'Text'
    ],
    type:               'Property'
  },
  text:                             {
    description:    'The textual content of this CreativeWork.',
    domainIncludes: 'CreativeWork',
    id:             'text',
    label:          'text',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  thumbnail:                        {
    description:    'Thumbnail image for an image or video.',
    domainIncludes: [
      'ImageObject',
      'VideoObject'
    ],
    id:             'thumbnail',
    label:          'thumbnail',
    rangeIncludes:  'ImageObject',
    type:           'Property'
  },
  thumbnailUrl:                     {
    description:    'A thumbnail image relevant to the Thing.',
    domainIncludes: 'CreativeWork',
    id:             'thumbnailUrl',
    label:          'thumbnailUrl',
    rangeIncludes:  'URL',
    type:           'Property'
  },
  tickerSymbol:                     {
    description:    'The exchange traded instrument associated with a Corporation object. The tickerSymbol is expressed as an exchange and an instrument name separated by a space character. For the exchange component of the tickerSymbol attribute, we reccommend using the controlled vocaulary of Market Identifier Codes (MIC) specified in ISO15022.',
    domainIncludes: 'Corporation',
    id:             'tickerSymbol',
    label:          'tickerSymbol',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  ticketNumber:                     {
    description:    'The unique identifier for the ticket.',
    domainIncludes: 'Ticket',
    id:             'ticketNumber',
    label:          'ticketNumber',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  ticketToken:                      {
    description:    'Reference to an asset (e.g., Barcode, QR code image or PDF) usable for entrance.',
    domainIncludes: 'Ticket',
    id:             'ticketToken',
    label:          'ticketToken',
    rangeIncludes:  [
      'URL',
      'Text'
    ],
    type:           'Property'
  },
  ticketedSeat:                     {
    description:    'The seat associated with the ticket.',
    domainIncludes: 'Ticket',
    id:             'ticketedSeat',
    label:          'ticketedSeat',
    rangeIncludes:  'Seat',
    type:           'Property'
  },
  timeRequired:                     {
    description:    'Approximate or typical time it takes to work with or through this learning resource for the typical intended target audience, e.g. \'P30M\', \'P1H25M\'.',
    domainIncludes: 'CreativeWork',
    id:             'timeRequired',
    label:          'timeRequired',
    rangeIncludes:  'Duration',
    type:           'Property'
  },
  title:                            {
    description:    'The title of the job.',
    domainIncludes: 'JobPosting',
    id:             'title',
    label:          'title',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  toLocation:                       {
    description:    'A sub property of location. The final location of the object or the agent after the action.',
    domainIncludes: [
      'MoveAction',
      'InsertAction',
      'ExerciseAction',
      'TransferAction'
    ],
    id:             'toLocation',
    label:          'toLocation',
    rangeIncludes:  'Place',
    subPropertyOf:  'location',
    type:           'Property'
  },
  totalPaymentDue:                  {
    description:    'The total amount due.',
    domainIncludes: 'Invoice',
    id:             'totalPaymentDue',
    label:          'totalPaymentDue',
    rangeIncludes:  [
      'MonetaryAmount',
      'PriceSpecification'
    ],
    type:           'Property'
  },
  totalPrice:                       {
    description:    'The total price for the reservation or ticket, including applicable taxes, shipping, etc.',
    domainIncludes: [
      'Ticket',
      'Reservation'
    ],
    id:             'totalPrice',
    label:          'totalPrice',
    rangeIncludes:  [
      'PriceSpecification',
      'Number',
      'Text'
    ],
    type:           'Property'
  },
  totalTime:                        {
    description:    'The total time it takes to prepare and cook the recipe, in <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO 8601 duration format</a>.',
    domainIncludes: 'Recipe',
    id:             'totalTime',
    label:          'totalTime',
    rangeIncludes:  'Duration',
    type:           'Property'
  },
  track:                            {
    description:    'A music recording (track)&#x2014;usually a single song. If an ItemList is given, the list should contain items of type MusicRecording.',
    domainIncludes: [
      'MusicPlaylist',
      'MusicGroup'
    ],
    id:             'track',
    label:          'track',
    rangeIncludes:  [
      'MusicRecording',
      'ItemList'
    ],
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#MBZ',
    type:           'Property'
  },
  trackingNumber:                   {
    description:    'Shipper tracking number.',
    domainIncludes: 'ParcelDelivery',
    id:             'trackingNumber',
    label:          'trackingNumber',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  trackingUrl:                      {
    description:    'Tracking url for the parcel delivery.',
    domainIncludes: 'ParcelDelivery',
    id:             'trackingUrl',
    label:          'trackingUrl',
    rangeIncludes:  'URL',
    type:           'Property'
  },
  tracks:                           {
    description:    'A music recording (track)&#x2014;usually a single song.',
    domainIncludes: [
      'MusicPlaylist',
      'MusicGroup'
    ],
    id:             'tracks',
    label:          'tracks',
    rangeIncludes:  'MusicRecording',
    supersededBy:   'track',
    type:           'Property'
  },
  trailer:                          {
    description:    'The trailer of a movie or tv/radio series, season, episode, etc.',
    domainIncludes: [
      'CreativeWorkSeason',
      'RadioSeries',
      'MovieSeries',
      'TVSeries',
      'Movie',
      'VideoGame',
      'Episode',
      'VideoGameSeries'
    ],
    id:             'trailer',
    label:          'trailer',
    rangeIncludes:  'VideoObject',
    type:           'Property'
  },
  trainName:                        {
    description:    'The name of the train (e.g. The Orient Express).',
    domainIncludes: 'TrainTrip',
    id:             'trainName',
    label:          'trainName',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  trainNumber:                      {
    description:    'The unique identifier for the train.',
    domainIncludes: 'TrainTrip',
    id:             'trainNumber',
    label:          'trainNumber',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  transFatContent:                  {
    description:    'The number of grams of trans fat.',
    domainIncludes: 'NutritionInformation',
    id:             'transFatContent',
    label:          'transFatContent',
    rangeIncludes:  'Mass',
    type:           'Property'
  },
  transcript:                       {
    description:    'If this MediaObject is an AudioObject or VideoObject, the transcript of that object.',
    domainIncludes: [
      'AudioObject',
      'VideoObject'
    ],
    id:             'transcript',
    label:          'transcript',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  translator:                       {
    description:    'Organization or person who adapts a creative work to different languages, regional differences and technical requirements of a target market, or that translates during some event.',
    domainIncludes: [
      'Event',
      'CreativeWork'
    ],
    id:             'translator',
    label:          'translator',
    rangeIncludes:  [
      'Organization',
      'Person'
    ],
    type:           'Property'
  },
  typeOfBed:                        {
    description:    'The type of bed to which the BedDetail refers, i.e. the type of bed available in the quantity indicated by quantity.',
    domainIncludes: 'BedDetails',
    id:             'typeOfBed',
    label:          'typeOfBed',
    rangeIncludes:  'Text',
    source:         'https://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#STI_Accommodation_Ontology',
    type:           'Property'
  },
  typeOfGood:                       {
    description:    'The product that this structured value is referring to.',
    domainIncludes: [
      'OwnershipInfo',
      'TypeAndQuantityNode'
    ],
    id:             'typeOfGood',
    label:          'typeOfGood',
    rangeIncludes:  [
      'Service',
      'Product'
    ],
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  typicalAgeRange:                  {
    description:    'The typical expected age range, e.g. \'7-9\', \'11-\'.',
    domainIncludes: [
      'CreativeWork',
      'Event'
    ],
    id:             'typicalAgeRange',
    label:          'typicalAgeRange',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  underName:                        {
    description:    'The person or organization the reservation or ticket is for.',
    domainIncludes: [
      'Reservation',
      'Ticket'
    ],
    id:             'underName',
    label:          'underName',
    rangeIncludes:  [
      'Person',
      'Organization'
    ],
    type:           'Property'
  },
  unitCode:                         {
    description:    'The unit of measurement given using the UN/CEFACT Common Code (3 characters) or a URL. Other codes than the UN/CEFACT Common Code may be used with a prefix followed by a colon.',
    domainIncludes: [
      'UnitPriceSpecification',
      'PropertyValue',
      'TypeAndQuantityNode',
      'QuantitativeValue'
    ],
    id:             'unitCode',
    label:          'unitCode',
    rangeIncludes:  [
      'URL',
      'Text'
    ],
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  unitText:                         {
    description:    'A string or text indicating the unit of measurement. Useful if you cannot provide a standard unit code for\n<a href=\'unitCode\'>unitCode</a>.',
    domainIncludes: [
      'UnitPriceSpecification',
      'QuantitativeValue',
      'PropertyValue',
      'TypeAndQuantityNode'
    ],
    id:             'unitText',
    label:          'unitText',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  unsaturatedFatContent:            {
    description:    'The number of grams of unsaturated fat.',
    domainIncludes: 'NutritionInformation',
    id:             'unsaturatedFatContent',
    label:          'unsaturatedFatContent',
    rangeIncludes:  'Mass',
    type:           'Property'
  },
  uploadDate:                       {
    description:    'Date when this media object was uploaded to this site.',
    domainIncludes: 'MediaObject',
    id:             'uploadDate',
    label:          'uploadDate',
    rangeIncludes:  'Date',
    type:           'Property'
  },
  upvoteCount:                      {
    description:    'The number of upvotes this question, answer or comment has received from the community.',
    domainIncludes: [
      'Comment',
      'Question'
    ],
    id:             'upvoteCount',
    label:          'upvoteCount',
    rangeIncludes:  'Integer',
    type:           'Property'
  },
  url:                              {
    description:    'URL of the item.',
    domainIncludes: 'Thing',
    id:             'url',
    label:          'url',
    rangeIncludes:  'URL',
    type:           'Property'
  },
  urlTemplate:                      {
    description:    'An url template (RFC6570) that will be used to construct the target of the execution of the action.',
    domainIncludes: 'EntryPoint',
    id:             'urlTemplate',
    label:          'urlTemplate',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  userInteractionCount:             {
    description:    'The number of interactions for the CreativeWork using the WebSite or SoftwareApplication.',
    domainIncludes: 'InteractionCounter',
    id:             'userInteractionCount',
    label:          'userInteractionCount',
    rangeIncludes:  'Integer',
    type:           'Property'
  },
  validFor:                         {
    description:    'The time validity of the permit.',
    domainIncludes: 'Permit',
    id:             'validFor',
    label:          'validFor',
    rangeIncludes:  'Duration',
    type:           'Property'
  },
  validFrom:                        {
    description:    'The date when the item becomes valid.',
    domainIncludes: [
      'Offer',
      'LocationFeatureSpecification',
      'OpeningHoursSpecification',
      'MonetaryAmount',
      'PriceSpecification',
      'Permit',
      'Demand'
    ],
    id:             'validFrom',
    label:          'validFrom',
    rangeIncludes:  'DateTime',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  validIn:                          {
    description:    'The geographic area where the permit is valid.',
    domainIncludes: 'Permit',
    id:             'validIn',
    label:          'validIn',
    rangeIncludes:  'AdministrativeArea',
    type:           'Property'
  },
  validThrough:                     {
    description:    'The date after when the item is not valid. For example the end of an offer, salary period, or a period of opening hours.',
    domainIncludes: [
      'Demand',
      'OpeningHoursSpecification',
      'MonetaryAmount',
      'LocationFeatureSpecification',
      'JobPosting',
      'Offer',
      'PriceSpecification'
    ],
    id:             'validThrough',
    label:          'validThrough',
    rangeIncludes:  'DateTime',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  validUntil:                       {
    description:    'The date when the item is no longer valid.',
    domainIncludes: 'Permit',
    id:             'validUntil',
    label:          'validUntil',
    rangeIncludes:  'Date',
    type:           'Property'
  },
  value:                            {
    description:    '<p>The value of the quantitative value or property value node.</p>\n<ul>\n<li>For <a class="localLink" href="/QuantitativeValue">QuantitativeValue</a> and <a class="localLink" href="/MonetaryAmount">MonetaryAmount</a>, the recommended type for values is \'Number\'.</li>\n<li>For <a class="localLink" href="/PropertyValue">PropertyValue</a>, it can be \'Text;\', \'Number\', \'Boolean\', or \'StructuredValue\'.</li>\n</ul>',
    domainIncludes: [
      'PropertyValue',
      'QuantitativeValue',
      'MonetaryAmount'
    ],
    id:             'value',
    label:          'value',
    rangeIncludes:  [
      'Text',
      'Boolean',
      'Number',
      'StructuredValue'
    ],
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  valueAddedTaxIncluded:            {
    description:    'Specifies whether the applicable value-added tax (VAT) is included in the price specification or not.',
    domainIncludes: 'PriceSpecification',
    id:             'valueAddedTaxIncluded',
    label:          'valueAddedTaxIncluded',
    rangeIncludes:  'Boolean',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  valueMaxLength:                   {
    description:    'Specifies the allowed range for number of characters in a literal value.',
    domainIncludes: 'PropertyValueSpecification',
    id:             'valueMaxLength',
    label:          'valueMaxLength',
    rangeIncludes:  'Number',
    type:           'Property'
  },
  valueMinLength:                   {
    description:    'Specifies the minimum allowed range for number of characters in a literal value.',
    domainIncludes: 'PropertyValueSpecification',
    id:             'valueMinLength',
    label:          'valueMinLength',
    rangeIncludes:  'Number',
    type:           'Property'
  },
  valueName:                        {
    description:    'Indicates the name of the PropertyValueSpecification to be used in URL templates and form encoding in a manner analogous to HTML\'s input@name.',
    domainIncludes: 'PropertyValueSpecification',
    id:             'valueName',
    label:          'valueName',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  valuePattern:                     {
    description:    'Specifies a regular expression for testing literal values according to the HTML spec.',
    domainIncludes: 'PropertyValueSpecification',
    id:             'valuePattern',
    label:          'valuePattern',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  valueReference:                   {
    description:    'A pointer to a secondary value that provides additional information on the original value, e.g. a reference temperature.',
    domainIncludes: [
      'QuantitativeValue',
      'QualitativeValue',
      'PropertyValue'
    ],
    id:             'valueReference',
    label:          'valueReference',
    rangeIncludes:  [
      'QuantitativeValue',
      'PropertyValue',
      'Enumeration',
      'StructuredValue',
      'QualitativeValue'
    ],
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  valueRequired:                    {
    description:    'Whether the property must be filled in to complete the action.  Default is false.',
    domainIncludes: 'PropertyValueSpecification',
    id:             'valueRequired',
    label:          'valueRequired',
    rangeIncludes:  'Boolean',
    type:           'Property'
  },
  vatID:                            {
    description:    'The Value-added Tax ID of the organization or person.',
    domainIncludes: [
      'Person',
      'Organization'
    ],
    id:             'vatID',
    label:          'vatID',
    rangeIncludes:  'Text',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  vehicleConfiguration:             {
    description:    'A short text indicating the configuration of the vehicle, e.g. \'5dr hatchback ST 2.5 MT 225 hp\' or \'limited edition\'.',
    domainIncludes: 'Vehicle',
    id:             'vehicleConfiguration',
    label:          'vehicleConfiguration',
    rangeIncludes:  'Text',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group',
    type:           'Property'
  },
  vehicleEngine:                    {
    description:    'Information about the engine or engines of the vehicle.',
    domainIncludes: 'Vehicle',
    id:             'vehicleEngine',
    label:          'vehicleEngine',
    rangeIncludes:  'EngineSpecification',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group',
    type:           'Property'
  },
  vehicleIdentificationNumber:      {
    description:    'The Vehicle Identification Number (VIN) is a unique serial number used by the automotive industry to identify individual motor vehicles.',
    domainIncludes: 'Vehicle',
    id:             'vehicleIdentificationNumber',
    label:          'vehicleIdentificationNumber',
    rangeIncludes:  'Text',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group',
    subPropertyOf:  'serialNumber',
    type:           'Property'
  },
  vehicleInteriorColor:             {
    description:    'The color or color combination of the interior of the vehicle.',
    domainIncludes: 'Vehicle',
    id:             'vehicleInteriorColor',
    label:          'vehicleInteriorColor',
    rangeIncludes:  'Text',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group',
    type:           'Property'
  },
  vehicleInteriorType:              {
    description:    'The type or material of the interior of the vehicle (e.g. synthetic fabric, leather, wood, etc.). While most interior types are characterized by the material used, an interior type can also be based on vehicle usage or target audience.',
    domainIncludes: 'Vehicle',
    id:             'vehicleInteriorType',
    label:          'vehicleInteriorType',
    rangeIncludes:  'Text',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group',
    type:           'Property'
  },
  vehicleModelDate:                 {
    description:    'The release date of a vehicle model (often used to differentiate versions of the same make and model).',
    domainIncludes: 'Vehicle',
    id:             'vehicleModelDate',
    label:          'vehicleModelDate',
    rangeIncludes:  'Date',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group',
    type:           'Property'
  },
  vehicleSeatingCapacity:           {
    description:    'The number of passengers that can be seated in the vehicle, both in terms of the physical space available, and in terms of limitations set by law.</p>\n<p>Typical unit code(s): C62 for persons.',
    domainIncludes: 'Vehicle',
    id:             'vehicleSeatingCapacity',
    label:          'vehicleSeatingCapacity',
    rangeIncludes:  [
      'Number',
      'QuantitativeValue'
    ],
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group',
    type:           'Property'
  },
  vehicleSpecialUsage:              {
    description:    'Indicates whether the vehicle has been used for special purposes, like commercial rental, driving school, or as a taxi. The legislation in many countries requires this information to be revealed when offering a car for sale.',
    domainIncludes: 'Vehicle',
    id:             'vehicleSpecialUsage',
    label:          'vehicleSpecialUsage',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  vehicleTransmission:              {
    description:    'The type of component used for transmitting the power from a rotating power source to the wheels or other relevant component(s) ("gearbox" for cars).',
    domainIncludes: 'Vehicle',
    id:             'vehicleTransmission',
    label:          'vehicleTransmission',
    rangeIncludes:  [
      'Text',
      'URL',
      'QualitativeValue'
    ],
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#Automotive_Ontology_Working_Group',
    type:           'Property'
  },
  vendor:                           {
    description:    '\'vendor\' is an earlier term for \'seller\'.',
    domainIncludes: 'BuyAction',
    id:             'vendor',
    label:          'vendor',
    rangeIncludes:  [
      'Person',
      'Organization'
    ],
    subPropertyOf:  'participant',
    supersededBy:   'seller',
    type:           'Property'
  },
  version:                          {
    description:    'The version of the CreativeWork embodied by a specified resource.',
    domainIncludes: 'CreativeWork',
    id:             'version',
    label:          'version',
    rangeIncludes:  [
      'Number',
      'Text'
    ],
    type:           'Property'
  },
  video:                            {
    description:    'An embedded video object.',
    domainIncludes: 'CreativeWork',
    id:             'video',
    label:          'video',
    rangeIncludes:  'VideoObject',
    type:           'Property'
  },
  videoFormat:                      {
    description:    'The type of screening or video broadcast used (e.g. IMAX, 3D, SD, HD, etc.).',
    domainIncludes: [
      'ScreeningEvent',
      'BroadcastEvent',
      'BroadcastService'
    ],
    id:             'videoFormat',
    label:          'videoFormat',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  videoFrameSize:                   {
    description:    'The frame size of the video.',
    domainIncludes: 'VideoObject',
    id:             'videoFrameSize',
    label:          'videoFrameSize',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  videoQuality:                     {
    description:    'The quality of the video.',
    domainIncludes: 'VideoObject',
    id:             'videoQuality',
    label:          'videoQuality',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  volumeNumber:                     {
    description:        'Identifies the volume of publication or multi-part work; for example, "iii" or "2".',
    domainIncludes:     'PublicationVolume',
    equivalentProperty: 'http://purl.org/ontology/bibo/volume',
    id:                 'volumeNumber',
    label:              'volumeNumber',
    rangeIncludes:      [
      'Integer',
      'Text'
    ],
    source:             'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_bibex',
    subPropertyOf:      'position',
    type:               'Property'
  },
  warranty:                         {
    description:    'The warranty promise(s) included in the offer.',
    domainIncludes: [
      'Demand',
      'Offer'
    ],
    id:             'warranty',
    label:          'warranty',
    rangeIncludes:  'WarrantyPromise',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  warrantyPromise:                  {
    description:    'The warranty promise(s) included in the offer.',
    domainIncludes: [
      'SellAction',
      'BuyAction'
    ],
    id:             'warrantyPromise',
    label:          'warrantyPromise',
    rangeIncludes:  'WarrantyPromise',
    supersededBy:   'warranty',
    type:           'Property'
  },
  warrantyScope:                    {
    description:    'The scope of the warranty promise.',
    domainIncludes: 'WarrantyPromise',
    id:             'warrantyScope',
    label:          'warrantyScope',
    rangeIncludes:  'WarrantyScope',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  webCheckinTime:                   {
    description:    'The time when a passenger can check into the flight online.',
    domainIncludes: 'Flight',
    id:             'webCheckinTime',
    label:          'webCheckinTime',
    rangeIncludes:  'DateTime',
    type:           'Property'
  },
  weight:                           {
    description:    'The weight of the product or person.',
    domainIncludes: [
      'Person',
      'Product'
    ],
    id:             'weight',
    label:          'weight',
    rangeIncludes:  'QuantitativeValue',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_GoodRelationsTerms',
    type:           'Property'
  },
  width:                            {
    description:    'The width of the item.',
    domainIncludes: [
      'VisualArtwork',
      'Product',
      'MediaObject'
    ],
    id:             'width',
    label:          'width',
    rangeIncludes:  [
      'Distance',
      'QuantitativeValue'
    ],
    type:           'Property'
  },
  winner:                           {
    description:    'A sub property of participant. The winner of the action.',
    domainIncludes: 'LoseAction',
    id:             'winner',
    label:          'winner',
    rangeIncludes:  'Person',
    subPropertyOf:  'participant',
    type:           'Property'
  },
  wordCount:                        {
    description:    'The number of words in the text of the Article.',
    domainIncludes: 'Article',
    id:             'wordCount',
    label:          'wordCount',
    rangeIncludes:  'Integer',
    type:           'Property'
  },
  workExample:                      {
    description:    'Example/instance/realization/derivation of the concept of this creative work. eg. The paperback edition, first edition, or eBook.',
    domainIncludes: 'CreativeWork',
    id:             'workExample',
    inverseOf:      'exampleOfWork',
    label:          'workExample',
    rangeIncludes:  'CreativeWork',
    source:         'http://www.w3.org/wiki/WebSchemas/SchemaDotOrgSources#source_bibex',
    type:           'Property'
  },
  workFeatured:                     {
    description:    'A work featured in some event, e.g. exhibited in an ExhibitionEvent.\n       Specific subproperties are available for workPerformed (e.g. a play), or a workPresented (a Movie at a ScreeningEvent).',
    domainIncludes: 'Event',
    id:             'workFeatured',
    label:          'workFeatured',
    rangeIncludes:  'CreativeWork',
    type:           'Property'
  },
  workHours:                        {
    description:    'The typical working hours for this job (e.g. 1st shift, night shift, 8am-5pm).',
    domainIncludes: 'JobPosting',
    id:             'workHours',
    label:          'workHours',
    rangeIncludes:  'Text',
    type:           'Property'
  },
  workLocation:                     {
    description:    'A contact location for a person\'s place of work.',
    domainIncludes: 'Person',
    id:             'workLocation',
    label:          'workLocation',
    rangeIncludes:  [
      'ContactPoint',
      'Place'
    ],
    subPropertyOf:  'location',
    type:           'Property'
  },
  workPerformed:                    {
    description:    'A work performed in some event, for example a play performed in a TheaterEvent.',
    domainIncludes: 'Event',
    id:             'workPerformed',
    label:          'workPerformed',
    rangeIncludes:  'CreativeWork',
    subPropertyOf:  'workFeatured',
    type:           'Property'
  },
  workPresented:                    {
    description:    'The movie presented during this event.',
    domainIncludes: 'ScreeningEvent',
    id:             'workPresented',
    label:          'workPresented',
    rangeIncludes:  'Movie',
    subPropertyOf:  'workFeatured',
    type:           'Property'
  },
  worksFor:                         {
    description:    'Organizations that the person works for.',
    domainIncludes: 'Person',
    id:             'worksFor',
    label:          'worksFor',
    rangeIncludes:  'Organization',
    type:           'Property'
  },
  worstRating:                      {
    description:    'The lowest value allowed in this rating system. If worstRating is omitted, 1 is assumed.',
    domainIncludes: 'Rating',
    id:             'worstRating',
    label:          'worstRating',
    rangeIncludes:  [
      'Text',
      'Number'
    ],
    type:           'Property'
  },
  yearlyRevenue:                    {
    description:    'The size of the business in annual revenue.',
    domainIncludes: 'BusinessAudience',
    id:             'yearlyRevenue',
    label:          'yearlyRevenue',
    rangeIncludes:  'QuantitativeValue',
    type:           'Property'
  },
  yearsInOperation:                 {
    description:    'The age of the business.',
    domainIncludes: 'BusinessAudience',
    id:             'yearsInOperation',
    label:          'yearsInOperation',
    rangeIncludes:  'QuantitativeValue',
    type:           'Property'
  }
}
