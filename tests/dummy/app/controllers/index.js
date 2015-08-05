import Ember from 'ember';

var names = ("Ingeborg Jim Rigoberto Ian Wei Otilia Wendell Chasity " +
"Billi Chester Omer Paulene Hiram Laurice Deneen Chuck Petrina Lamonica " +
"Roy Ai Marsha Kiana Tamar Fabiola Travis Mazie Dawna Fe Tommye Jene").split(' ');

var surnames = ("Brown Smith Patel Jones Williams Johnson Taylor Thomas " +
"Roberts Khan Lewis Jackson Clarke James Phillips Wilson Ali Mason " +
"Mitchell Rose Davis Davies Rodríguez Cox Alexander " +
"Stewart Quinn Robinson Murphy Graham").split(' ');

var cities = ["Shanghai", "Karachi", "Beijing", "Tianjin", "Istanbul", "Lagos",
  "Guangzhou", "Mumbai", "Moscow", "Dhaka", "Cairo", "São Paulo",
  "Lahore", "Shenzhen", "Seoul", "Jakarta", "Kinshasa", "Tokyo", "Mexico City",
  "Lima", "New York City", "Bengaluru", "London", "Bangkok", "Dongguan",
  "Nanjing", "Tehran", "Shenyang", "Ahmedabad", "Bogotá"];

var generateContent = function (recordsCount) {
  var ret = Ember.A([]);
  for (let i = 0; i < recordsCount; i++) {
    ret.push(Ember.Object.create({
      id: i + 1,
      firstName: names[i],
      lastName: surnames[i],
      age: Math.floor(Math.random() * (50 - 18)) + 18,
      city: cities[i],
      cityWithHtml: `<i>${cities[i]}</i>`
    }));
  }
  return ret;
};

export default Ember.Controller.extend({

  example1: {
    title: 'Common table',
    content: generateContent(10),
    columns: Ember.A([
      Ember.Object.create({
        propertyName: 'id',
        title: 'ID'
      }),
      Ember.Object.create({
        propertyName: 'firstName',
        title: 'First Name'
      }),
      Ember.Object.create({
        propertyName: 'lastName',
        title: 'Last Name'
      }),
      Ember.Object.create({
        propertyName: 'city',
        title: 'City'
      })
    ])
  },

  example2: {
    title: 'Table without footer',
    content: generateContent(10),
    columns: Ember.A([
      Ember.Object.create({
        propertyName: 'id',
        title: 'ID'
      }),
      Ember.Object.create({
        propertyName: 'firstName',
        title: 'First Name'
      }),
      Ember.Object.create({
        propertyName: 'lastName',
        title: 'Last Name'
      }),
      Ember.Object.create({
        propertyName: 'city',
        title: 'City'
      })
    ]),
    showTableFooter: false
  },

  example4: {
    title: 'Table with custom sort column',
    message: 'Click on `Last Name` triggers sorting by `First Name`',
    content: generateContent(30),
    columns: Ember.A([
      Ember.Object.create({
        propertyName: 'id',
        title: 'ID'
      }),
      Ember.Object.create({
        propertyName: 'firstName',
        title: 'First Name'
      }),
      Ember.Object.create({
        propertyName: 'lastName',
        title: 'Last Name',
        sortedBy: 'firstName'
      }),
      Ember.Object.create({
        propertyName: 'city',
        title: 'City'
      })
    ])
  },

  example5: {
    title: 'Table with custom template in the cell',
    content: generateContent(30),
    columns: Ember.A([
      Ember.Object.create({
        propertyName: 'id',
        title: 'ID'
      }),
      Ember.Object.create({
        propertyName: 'firstName',
        title: 'First Name'
      }),
      Ember.Object.create({
        propertyName: 'lastName',
        title: 'Last Name'
      }),
      Ember.Object.create({
        propertyName: 'city',
        title: 'City'
      }),
      Ember.Object.create({
        template: 'custom/fullname',
        title: 'Full name'
      })
    ])
  },

  example6: {
    title: 'Table without `table-bordered table-striped table-condensed` classes',
    content: generateContent(30),
    columns: Ember.A([
      Ember.Object.create({
        propertyName: 'id',
        title: 'ID'
      }),
      Ember.Object.create({
        propertyName: 'firstName',
        title: 'First Name'
      }),
      Ember.Object.create({
        propertyName: 'lastName',
        title: 'Last Name'
      }),
      Ember.Object.create({
        propertyName: 'city',
        title: 'City'
      })
    ])
  },

  example7: {
    title: 'Table with numeric navigation',
    content: Ember.A(Array.prototype.concat(generateContent(30), generateContent(30), generateContent(30), generateContent(30))).map((item, index) => {Ember.set(item, 'id', index + 1); return item;}),
    columns: Ember.A([
      Ember.Object.create({
        propertyName: 'id',
        title: 'ID'
      }),
      Ember.Object.create({
        propertyName: 'firstName',
        title: 'First Name'
      }),
      Ember.Object.create({
        propertyName: 'lastName',
        title: 'Last Name'
      }),
      Ember.Object.create({
        propertyName: 'city',
        title: 'City'
      }),
      Ember.Object.create({
        template: 'custom/fullname',
        title: 'Full name'
      })
    ])
  },

  example8: {
    title: 'Custom pagination',
    content: generateContent(30),
    columns: Ember.A([
      Ember.Object.create({
        propertyName: 'id',
        title: 'ID'
      }),
      Ember.Object.create({
        propertyName: 'firstName',
        title: 'First Name'
      }),
      Ember.Object.create({
        propertyName: 'lastName',
        title: 'Last Name'
      }),
      Ember.Object.create({
        propertyName: 'city',
        title: 'City'
      })
    ])
  },

  example9: {
    title: 'Custom Actions',
    content: generateContent(30),
    columns: Ember.A([
      Ember.Object.create({
        propertyName: 'id',
        title: 'ID'
      }),
      Ember.Object.create({
        propertyName: 'firstName',
        title: 'First Name'
      }),
      Ember.Object.create({
        propertyName: 'lastName',
        title: 'Last Name'
      }),
      Ember.Object.create({
        propertyName: 'city',
        title: 'City'
      }),
      Ember.Object.create({
        title: 'Delete',
        template: 'custom/delete'
      })
    ])
  },

  example10: {
    title: 'Custom Messages',
    content: generateContent(10),
    columns: Ember.A([
      Ember.Object.create({
        propertyName: 'id',
        title: 'ID'
      }),
      Ember.Object.create({
        propertyName: 'firstName',
        title: 'First Name'
      }),
      Ember.Object.create({
        propertyName: 'lastName',
        title: 'Last Name'
      }),
      Ember.Object.create({
        propertyName: 'city',
        title: 'City'
      })
    ]),
    customMessages: {
      searchLabel: 'Se@rch',
      'columns-title': 'ColumnZ',
      'columns-showAll': 'Show Me All!',
      'columns-hideAll': 'Hide All!',
      'columns-restoreDefaults': 'Restore My Columns',
      tableSummary: 'Now are showing %@ - %@ of %@',
      allColumnsAreHidden: 'No visible columns, dude!',
      noDataToShow: 'No data. Sorry, bro...'
    }
  },

  example11: {
    title: 'Common table with width',
    content: generateContent(10),
    columns: Ember.A([
      Ember.Object.create({
        propertyName: 'id',
        title: 'ID',
        relativeWidth: '10%'
      }),
      Ember.Object.create({
        propertyName: 'firstName',
        title: 'First Name',
        relativeWidth: '30%'
      }),
      Ember.Object.create({
        propertyName: 'lastName',
        title: 'Last Name',
        relativeWidth: '40%'
      }),
      Ember.Object.create({
        propertyName: 'city',
        title: 'City',
        relativeWidth: '20%'
      })
    ])
  },

  actions: {
    deleteRecord: function(record) {
      var content = this.get('example9.content');
      this.set('example9.content', content.without(record));
    }
  }
});
