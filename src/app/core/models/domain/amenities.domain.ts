import { Injectable } from '@angular/core';

@Injectable()
export class AmenitiesDomain {

  private static readonly amenities = [
    //*******************START MAKATI**************************//
    {
      projectID: 11,
      amenities : [
        {
          header: 'Amenities',
          data : [
            "Function room (Tower 1)",
            "Board room (Tower 1)",
            "Fitness gym (Tower 2)",
            "Library (Tower 2)",
            "Game room (Tower 2)",
            "Lap pool",
            "Lounge pool",
            "Children’s pool",
            "Pool deck",
            "Outdoor lounge",
            "Lawn area",
            "Children’s play area",
            "Function room spill-over area"]
        },
        {
          header: 'Building Features',
          data : [
            "Interior-designed lobby",
            "Mail room",
            "100% stand-by back-up automatic generator system for common areas",
            "Fire alarm and smoke detection system",
            "Two (2) fire exits per residential floor",
            "24-hour security services and maintenance",
            "Proximity card access at elevators",
            "Amenities located at the podium level",
            "Centralized sanitary disposal system",
            "Allocated emergency load for residential units in case of power outage",
            "Automatic fire sprinkler system",
            "Water reservoir with separate fire reserves",
            "CCTV cameras",
            "Davit system for unit maintenance"]
        },
        {
          header: 'SUSTAINABILITY FEATURES',
          data : [
            "Four (4) notches that promote natural ventilation in residential corridors",
            "Dual-flush toilets",
            "Low-flow valves",
            "LED lighting in common areas",
            "Maximized natural lighting",
            "Maximized cross ventilation"]
        },
      ],
    },
    {
      projectID: 12,
      amenities : [
        {
          header: 'Amenities',
          data : [
            "Signature lobby and retail outlets",
            "Food hall",
            "Business center",
            "Executive dining and outdoor deck"]
        },
        {
          header: 'Building Features',
          data : [
            "Building Management System (BMS)",
            "Interior-designed signature lobby and select common areas",
            "Automatic standby generator system providing 100% back-up power",
            "Centralized chilled water cooling system",
            "Water reservoir with separate fire reserves",
            "Fire security system24-hour security services and maintenance",
            "Common restrooms on typical office floors",
            "Centralized sanitary disposal system",
            "Building management by Ayala Property Management Corporation (APMC)"]
        },
        {
          header: 'SUSTAINABILITY FEATURES',
          data : [
            "Architectural re-useLEED-certified",
            "LED general Lighting in common areas",
            "48% glass ratio with maximized natural lighting within office units and elevator lobbies",
            "Double-glazed low-e windows",
            "Maximized natural air",
            "Dual-flush toilets in common restrooms",
            "Low-flow valves in common restrooms",
            "Materials Recycling Facility (MRF)"]
        },
      ],
    },
    {
      projectID: 13,
      amenities : [
        {
          header: 'Amenities',
          data : [
            "Gym",
            "Function room",
            "Covered al fresco lounge",
            "Male/female changing room",
            "Kiddie pool",
            "Adult pool",
            "Pool deck",
            "Enterprise lounge",
            "Roof deck"]
        },
        {
          header: 'Building Features',
          data : [
            "Vehicle drop-off area",
            "Reception lobby",
            "Mail room",
            "Centralized garbage disposal system",
            "Materials recovery facility",
            "Fire detection system",
            "Key card building access",
            "24-hour security services",
            "100% common area back-up power",
            "Water reservoir with separate fire reserves"]
        },
        {
          header: 'SUSTAINABILITY FEATURES',
          data : [
            "Dual-flush toilets",
            "Low-flow valves",
            "LED lighting for common areas",
            "Maximized natural lighting",
            "Maximized cross ventilation along corridors"]
        },
      ],
    },
    {
      projectID: 14,
      amenities : [
        {
          header: 'Amenities',
          data : [
            "Specialty retail area",
            "Fitness hub",
            "Function room",
            "Lap pool",
            "Children's pool",
            "Open lounge"]
        },
        {
          header: 'Building Features',
          data : [
            "Mail room",
            "Designer reception lobby",
            "Centralized sanitary disposal system",
            "Fire detection and alarm system",
            "Sprinkler system",
            "Proximity card building access from the lobby",
            "24-hour security services and maintenance",
            "Automatic stand-by generator system",
            "CCTV cameras",
            "Provision for building maintenance unit",
            "Amenities located on the ground and podium deck floors",
            "Water reservoir and separate fire reserves",
            "Garbage disposal system",
            "Drop-off canopy"]
        },
        {
          header: 'SUSTAINABILITY FEATURES',
          data : [
            "Dual-flush toilets",
            "Low-flow valves",
            "LED lighting for common areas",
            "Maximized natural lighting",
            "Maximized cross ventilation"]
        },
      ],
    },

    {
      projectID: 15,
      amenities : [
        {
          header: 'Outdoor Amenities',
          data : [
            "Lap pool",
            "Outdoor pool theater",
            "Relaxation pool deck",
            "Heated jacuzzis",
            "Adult lounge pool",
            "Kiddie pool",
            "Private roof garden",
            "Party lawn",
            "Rock garden",
            "Multi-purpose deck",
            "Putting green",
            "Barbecue area"]
        },
        {
          header: 'Indoor Amenities',
          data : [
            "Fitness gym overlooking the park",
            "Function room",
            "Outdoor kiddie play area",
            "Indoor kiddie play area",
            "Ground floor retail area",
            "Wi-Fi connectivity",
            "CCTV security cameras"]
        }
      ],
    },

    {
      projectID: 16,
      amenities : [
        {
          header: 'Amenities',
          data : [
            "Function room (Tower 2)",
            "Indoor fitness gym (Tower 1)",
            "Board room (Tower 1)",
            "Lap pool",
            "Lounge pool",
            "Kiddie pool",
            "Pool deck",
            "Juice bar",
            "Outdoor lounge",
            "Outdoor gym",
            "Lawn area",
            "Children's play area",
            "Pocket garden",
            "Bamboo garden"]
        },
        {
          header: 'Building Features',
          data : [
            "Interior designed lobby and drop-off areas",
            "Mail room",
            "100% stand-by back-up automatic generator system for common areas",
            "Fire alarm and smoke detection system",
            "Two (2) fire exits per residential floor",
            "24-hour security services and maintenance",
            "Proximity card access at elevators",
            "Amenities located on the podium level",
            "Centralized sanitary disposal system",
            "Allocated emergency load for residential units in case of power outage",
            "Automatic fire sprinkler system",
            "Water reservoir with separate fire reserves",
            "CCTV cameras",
            "Provision for building maintenance unit (davit system)"]
        },
        {
          header: 'SUSTAINABILITY FEATURES',
          data : [
            "Notches that promote natural ventilation in residential corridors - three (3) notches for Tower One and four (4) notches for Tower Two",
            "Dual-flush toilets",
            "Low-flow valves",
            "LED lighting in common areas",
            "Maximized natural lighting",
            "Maximized cross ventilation"]
        },
      ],
    },

    {
      projectID: 18,
      amenities : [
        {
          header: 'Amenities',
          data : [
            "Conference rooms (approx. 134 sq.m.) on the 3rd floor",
            "Retail units from the ground up to the 3rd floor"]
        },
        {
          header: 'Building Features',
          data : [
            "100% glass ratio",
            "LEED certification",
            "Interior-designed drop-off area",
            "Ground floor lobby (178 sq.m.; 6 m. ceiling height)",
            "3rd floor lobby directly connected to the retail area (2017 sq.m.; 5 m. ceiling height)",
            "Building management system (BMS)",
            "Water-cooled VRF system for aircon",
            "Water reservoir with separate fire reserves",
            "Security services and maintenance",
            "Fire security system",
            "LED lighting for common areas",
            "Maximized natural lighting"]
        }
      ],
    },


    {
      projectID: 19,
      amenities : [
        {
          header: 'Amenities',
          data : [
            "Lap pool",
            "Kiddie pool",
            "Function room",
            "Outdoor kid's play area",
            "Gym"]
        },
        {
          header: 'Building Features',
          data : [
            "Interior lobby",
            "Mail room",
            "Standby generators for common areas",
            "Fire alarm and smoke detection system",
            "Two (2) fire exits per residential floor",
            "24-hour security services and maintenance",
            "Proximity card access for elevators",
            "Amenities located at the podium level",
            "Centralized sanitary disposal system",
            "Emergency electrical loads in case of power outage",
            "Automatic fire sprinkler system",
            "Water reservoir with separate fire reserves",
            "CCTV cameras",
            "Davit system for unit maintenance"]
        },
        {
          header: 'SUSTAINABILITY FEATURES',
          data : [
            "Two (2) ventilation notches for residential corridors",
            "Dual flush toilets",
            "Low flow valves",
            "LED lighting in common areas",
            "Maximized natural lighting",
            "Maximized cross ventilation"]
        },
      ],
    },


    {
      projectID: 110,
      amenities : [
        {
          header: 'Building Features',
          data : [
            "Various amenities on the 6th level podium with interconnected open spaces",
            "Naturally-ventilated elevator lobbies",
            "Fire detection and alarm system",
            "Water reservoir and separate fire reserves",
            "Building management by Ayala Property Management Corporation (APMC)",
            "Mail area",
            "Automatic standby generator system (100% back-up for common areas/basic back-up pwer on all units)"]
        },
        {
          header: 'SUSTAINABILITY FEATURES',
          data : [
            "Three (3) notches that promotes natural ventilation in residential corridors",
            "Dual-flush toilets",
            "Low-flow valves",
            "LED lighting in common areas",
            "Maximized natural lighting",
            "Maximized cross ventilation"]
        },
        {
          header: 'OUTDOOR PODIUM AMENITIES',
          data : [
            "Adult leisure pool",
            "Kiddie pool",
            "Lap pool ",
            "Gazebo ",
            "Children's play area ",
            "Jogging trail ",
            "Lounge areas/Gardens"]
        },
        {
          header: 'INDOOR AMENITIES - Tower One',
          data : [
            "Workout studio",
            "Game room",
            "Meditation room ",
            "Landscaped roof deck"]
        },
        {
          header: 'INDOOR AMENITIES - Tower Two',
          data : [
            "Function rooms ",
            "Kid's art laboratory",
            "Music room ",
            "Theater room"]
        },
        {
          header: 'INDOOR AMENITIES - Tower Three',
          data : [
            "Culinary studio",
            "Mega function room",
            "Library",
            "Lounge area"]
        },
      ],
    },


    {
      projectID: 111,
      amenities : [
        {
          header: 'Amenities',
          data : [
            "Ground floor: Eight (8) retail units with a total approx. size of 863.95 sq.m.",
            "Ground floor: Business center (conference rooms)",
            "10th floor: Accessory units for retail",
            "10th floor: Landscaped deck"]
        },
        {
          header: 'Building Features',
          data : [
            "Building management system",
            "Water-cooled VRF/VRV",
            "Water reservoir with separate fire reserves",
            "Security services and maintenance",
            "Fire security system",
            "LED lighting for common areas",
            "Maximized natural lighting",
            "Green landscaping features on the 10th floor",
            "LEED certification"]
        },
        {
          header: 'UNIT FEATURES AND PROVISIONS',
          data : [
            "Bare and rough cement finish on flooring",
            "Bare and plain cement finish on ceiling",
            "Unit to unit partitions (party wall)",
            "Unit to hallway partitions - temporary partitions (gypsum board) along common hallway",
            "Balcony to balcony partitions (for certain 10th floor units) - None",
            "Provision for 1 executive toilet in all office units",
            "100% back-up power",
            "2 telecom and broadband providers (Globe, PLDT ) with provision for 1 additional",
            "Fiber optic backbone",
            "Smoke detector, monitor module, and stub-outs for sprinkler heads",
            "Stub-outs for A/C system with BTU meter"]
        },
      ],
    },

    //*******************END MAKATI**************************//

    //*******************START ORTIGAS**************************//

    {
      projectID: 32,
      amenities : [
        {
          header: 'Outdoor Amenities',
          data : [
            "Lap Pool",
            "Kiddie Pool",
            "Wading Pool",
            "Pool Deck",
            "Outdoor Lounge",
            "Lawn Area",
            "Themed Garden Courtyards"]
        },
        {
          header: 'Indoor Amenities',
          data : [
            "Clubhouse (Portico Phase One)",
            "Function Room",
            "Indoor Fitness Gym",
            "Board Room",
            "Indoor Play Area",
            "Indoor Lounge"]
        },
      ],
    },

    //*******************END ORTIGAS**************************//


    {
      projectID: 44,
      amenities : [
        {
          header: 'Central Amenity Area',
          data : [
            "Viewing Pavilion",
            "Adult and Leisure Pool",
            "Kiddie Pools",
            "Cascading Jacuzzis",
            "Pavilions",
            "Open Lawn",
            "Jungle Play Area"]
        },
        {
          header: 'Pocket Parks',
          data : [
            "Open GreensNooks/Pocket Seating Areas",
            "Herb Garden",
            "Coffee Orchar",
            "dRain Garden",
            "Elevated Creekside Walkway",
            "Tree House"]
        },
        {
          header: 'Indoor Amenities',
          data : [
            "Function Halls with Spill-over",
            "Community Lounge per Floor",
            "Community Deck (roof deck)"]
        },
      ],
    }
  ];


  /*
   * Get Location Name by ID.
   */
  getAmenityById(projectID: number){
   let response = AmenitiesDomain.amenities.filter(loc => loc.projectID === projectID);
   return response && response.length > 0 ? response[0].amenities : null;
  }
}
