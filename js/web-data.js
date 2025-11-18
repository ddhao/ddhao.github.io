const ProductsCates = [
  {
    id: 1,
    name: 'Instrument Transformer',
    brief: 'Current Transformer Voltage Transformer Combined Instrument Transformer',
    image: 'image1.png'
  },
  {
    id: 2,
    name: 'Power Transformer',
    brief: 'Oil Immersed Power Transformer Dry Type Power Transformer',
    image: 'image2.png'
  },
  {
    id: 3,
    name: 'Circuit Breaker',
    brief: 'Live Tank Circuit Breaker Dead Tank Circuit Breaker',
    image: 'image3.png'
  },
  {
    id: 4,
    name: 'Disconnector',
    brief: 'Disconnector',
    image: 'image4.png'
  },
  {
    id: 5,
    name: 'Power Capacitor',
    brief: 'Power Capacitor',
    image: 'image5.png'
  },
  {
    id: 6,
    name: 'Cable / Conductor',
    brief: 'Power Cable Control Cable Aluminium Conductor with Steel-reinforced',
    image: 'image6.png'
  },
  {
    id: 7,
    name: 'Tools',
    brief: 'Tools',
    image: 'image7.png'
  },
  {
    id: 8,
    name: 'Materials',
    brief: 'Connector',
    image: 'image8.png'
  }
]

const Products = [
  {
    id: 1,
    name: 'Oil Immersed Current Transformer',
    brief: '',
    cate: 1,
    image: 'item1_1.png',
    detail: 'detail1_1.png'
  },
  {
    id: 2,
    name: 'Gas Insulated Current Transformer',
    brief: '',
    cate: 1,
    image: 'item1_2.png',
    detail: 'detail1_2.png'
  },
  {
    id: 3,
    name: 'Inductive Voltage Transformer',
    brief: '',
    cate: 1,
    image: 'item1_3.png',
    detail: 'detail1_3.png'
  },
  {
    id: 4,
    name: 'AGU Type Oil Immersed Current Transformer',
    brief: '',
    cate: 1,
    image: 'item1_4.png',
    detail: 'detail1_4.png'
  },
  {
    id: 5,
    name: 'APU Type Oil Immersed Current Transformer',
    brief: '',
    cate: 1,
    image: 'item1_5.png',
    detail: 'detail1_5.png'
  },
  {
    id: 6,
    name: 'LVQBT Type Gas Insulated Current Transformer',
    brief: '',
    cate: 1,
    image: 'item1_6.png',
    detail: 'detail1_6.png'
  },
  {
    id: 7,
    name: 'VPU Type Inductive Voltage Transformer',
    brief: '',
    cate: 1,
    image: 'item1_7.png',
    detail: 'detail1_7.png'
  },
  {
    id: 8,
    name: 'VCU Type Capacitor Voltage Transformer',
    brief: '',
    cate: 1,
    image: 'item1_8.png',
    detail: 'detail1_8.png'
  },
  {
    id: 9,
    name: 'VAU Type Oil Immersed Combined CT-VT Instrument Transformer',
    brief: '',
    cate: 1,
    image: 'item1_9.png',
    detail: 'detail1_9.png'
  },
  {
    id: 10,
    name: 'Capacitor Voltage Transformer',
    brief: '',
    cate: 1,
    image: 'item1_10.png',
    detail: 'detail1_10.png'
  },
  {
    id: 11,
    name: 'Dry Type Current Transformer',
    brief: '',
    cate: 1,
    image: 'item1_11.png',
    detail: 'detail1_11.png'
  },
  {
    id: 12,
    name: 'Oil Immersed Power Transformer',
    brief: '',
    cate: 2,
    image: 'item2_1.png',
    detail: 'detail2_1.png',
    htmls: [
      {
        name: 'Oil Immersed Power Transformer',
        html: `
          <p>Application: suitable for power plant, substation, large-scale industrial etc. Standards: IEC 60076-1, IEC 60076-2, IEC 60076-3, IEC 60076-5; ANSI, IEEE, AS, etc. Parameters: Voltage range: 50/60Hz 110kV  Capacity range: 6300kVA-120000kVA. Features:</p>
          <p>1.High security and reliability in operation.</p>
          <p>2.Economic and efficient to reduce network loss and operation cost.</p>
          <p>3.High short circuit strength and insulating strength.</p>
          <p>4.Compact design, Low-noise and light in weight.</p>
          <p>5.Customized transformers are available on your requirement.</p>
          <p>6.Competitive short delivery time.</p>
        `
      }
    ]
  },
  {
    id: 13,
    name: 'Dry Type Power Transformer',
    brief: '',
    cate: 2,
    image: 'item2_2.png',
    detail: 'detail2_2.png',
    htmls: [
      {
        name: 'Dry Type Power Transformer',
        html: `
          <p>Application: for power distribution system and large industrial enterprises, etc.  Standards: IEC 60076-11  Parameters: Rated Voltage: 10kV-35kV.  Rated Capacity: 30-20000kVA. Features:</p>
          <p>1.High security and reliability in operation.</p>
          <p>2.Economic and efficient to reduce network loss and operation cost.</p>
          <p>3.Low temperature rise.</p>
          <p>4.Low noise.</p>
          <p>5.Operation in moist place with high moisture-proof capability.</p>
          <p>6.Customized transformers are available on your requirement.</p>
        `
      }
    ]
  },
  {
    id: 14,
    name: 'Live Tank Circuit Breaker',
    brief: '',
    cate: 3,
    image: 'item3_1.png',
    detail: 'detail3_1.png',
    htmls: [
      {
        name: 'Live Tank Circuit Breaker',
        html: `
          <p>Application: For control and protection of 126, 145kV power system. Standards: IEC 62271-100 Parameters: Rated voltage: 126, 145kV.</p>
          <p>Rated short-circuit breaking current: 40kA. Features:</p>
          <p>1.Reliable insulation performances.</p>
          <p>2.Utilization of spring operating mechanism.</p>
          <p>3.Low noise, easy or free of maintenance.</p>
          <p>4.Easy installation and adjustment.</p>
        `
      }
    ]
  },
  {
    id: 15,
    name: 'Dead Tank Circuit Breaker',
    brief: '',
    cate: 3,
    image: 'item3_2.png',
    detail: 'detail3_2.png',
    htmls: [
      {
        name: 'Dead Tank Circuit Breaker',
        html: `
          <p>Main features</p>
          <p>Toroidal-core current transformers on bushings (compact construction)</p>
          <p>High short-circuit breaking currents possible (up to 90 kA with one interrupter unit)</p>
          <p>Low center of gravity of the bases (higher seismic withstand capability)</p>
          <p>Gas-insulated components ensure highest availability with minimum maintenance effort</p>
          <p>Metal-enclosed interrupter unit (grounded housing)</p>
          <p>Available with porcelain or composite insulators</p>
          <p>Suitable for temperatures from -60 to 55°C with mixed gas solutions or various heating systems</p>
          <p>High seismic safety up to 0.5 g</p>
          <p>Suitable for altitudes of up to 1,000 meters</p>
        `
      },
      {
        name: 'Advantages',
        html: `
          <p>Gas leakage rate of less than 0.1 % per year</p>
          <p>Inspection after 12 and maintenance after 25 years</p>
          <p>10,000 switching operations are guaranteed</p>
          <p>Product life time of up to 50 years</p>
          <p>Easy installation and commissioning: only few assemblies</p>
          <p>Installation, commissioning, maintenance, training and technical advice from a single source</p>
          <p>Guaranteed availability of spare parts for all circuit breakers for a minimum of 25 years after delivery</p>
        `
      }
    ]
  },
  {
    id: 16,
    name: 'Most important features',
    brief: '',
    cate: 4,
    image: 'item4_1.png',
    detail: 'detail4_1.png',
    htmls: [
      {
        name: 'Most important features',
        html: `
          <p>Voltage range from 36 kV to 800 kV</p>
          <p>Rated current up to 5000 A (80 kA - 1 s)</p>
          <p>Short-circuit currents are maximum values and maybe only valid for 1 s - needs to be verified for specific application</p>
          <p>Durable materials for use in strong seismic activity</p>
          <p>Suitable for indoor and outdoor use</p>
          <p>Switching capacity requirements, such as the commutating currents, electromagnetic and/or electrostatic couplings (also with values above and beyond the IEC).</p>
        `
      },
      {
        name: 'Advantages',
        html: `
          <p>Maintenance-free contact system without spring elements</p>
          <p>Outstanding price-performance ratio</p>
          <p>Operational under all severe climatic conditions, including in coastal regions and areas with dramatic temperature differences, high risk of ice formation or strong seismic activity</p>
          <p>Type-tested according to IEC 62271-102</p>
          <p>Quality control system certified according to DIN EN ISO 9001</p>
          <p>Delivery of completely routine-tested and pre-adjusted assemblies simplifies setup and commissioning</p>
          <p>Life-time technical support and service on short notice</p>
        `
      }
    ]
  },
  {
    id: 17,
    name: 'Power Capacitor',
    brief: '',
    cate: 5,
    image: 'item5_1.png',
    detail: 'detail5_1.png',
    htmls: [
      {
        name: 'Product Overview',
        html: `
          <p>Application: for enhancement of power factor, lowering circuit loss and improve voltage quality of rated voltage 1kV and above power distribution system.</p>
          <p>Standards: IEC 60871-1</p>
          <p>Parameters: Rated voltage: 1-21kV.</p>
          <p>Rated capacity: 150-500kVar.</p>
          <p>Features:</p>
          <p>1.Compact design and light in weight.</p>
          <p>2.Low loss and temperature-rise.</p>
          <p>3.Long operation endurance.</p>
          <p>4.Low partial discharge performances.</p>
        `
      }
    ]
  }
]