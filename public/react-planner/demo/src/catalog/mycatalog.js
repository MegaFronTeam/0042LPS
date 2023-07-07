import {Catalog} from 'react-planner';

let catalog = new Catalog();

import * as Areas from './areas/**/planner-element.jsx';
import * as Lines from './lines/**/planner-element.jsx';
import * as Holes from './holes/**/planner-element.jsx';
import * as Items from './items/**/planner-element.jsx';

for( let x in Lines ) catalog.registerElement( Lines[x] );
// for( let x in Areas ) catalog.registerElement( Areas[x] );
// for( let x in Holes ) catalog.registerElement( Holes[x] );
// for( let x in Items ) catalog.registerElement( Items[x] );

// catalog.registerCategory('windows', 'Windows', [Holes.window, Holes.sashWindow, Holes.venetianBlindWindow, Holes.windowCurtain] );
// catalog.registerCategory('doors', 'Doors', [Holes.door, Holes.doorDouble, Holes.panicDoor, Holes.panicDoorDouble, Holes.slidingDoor] );



catalog.registerElement( Items.balcony );
catalog.registerElement( Holes.door );
catalog.registerElement( Holes.doorDouble );
catalog.registerElement( Holes.panicDoor );
catalog.registerElement( Holes.panicDoorDouble );
catalog.registerElement( Holes.sashWindow );
catalog.registerElement( Holes.slidingDoor );
catalog.registerElement( Holes.venetianBlindWindow );
catalog.registerElement( Holes.window );
catalog.registerElement( Holes.windowCurtain );
catalog.registerElement( Holes.gate );

catalog.registerCategory('windows', 'Окна', [Holes.window, Holes.sashWindow, Holes.venetianBlindWindow, Holes.windowCurtain] );
catalog.registerCategory('doors', 'Двери', [Holes.door, Holes.doorDouble, Holes.panicDoor, Holes.panicDoorDouble, Holes.slidingDoor] );

export default catalog;