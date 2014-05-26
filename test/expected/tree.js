// {
//   "name": "a",
//   "version": "0.1.0",
//   "dependencies": {
//     "b": {
//       "from": "b@~1.0.0",
//       "version": "1.0.3",
//       "dependencies": {
//         "c": {
//           "from": "c@~2.0.0",
//           "version": "2.0.9"
//         }
//       },
//       "asyncDependencies": {
//         "d": {
//           "from": "d@~3.0.0",
//           "version": "3.0.12"
//         }
//       }
//     },
//     "c": {
//       "from": "c@~2.0.0", 
//       "// commments": "this is a version different from the c of b's dependencies",
//       "version": "2.0.10"
//     }
//   }
// }

module.exports = [
{
  a: {
    '0.1.0': {
      dependencies: {
        b: {
          '~1.0.0': '1.0.3'
        },
        c: {
          '~2.0.0': '2.0.10'
        }
      }
    }
  },

  b: {
    '1.0.3': {
      dependencies: {
        c: {
          '~2.0.0': '2.0.9'
        }
      }
    }
  },

  c: {
    '2.0.9': {},
    '2.0.10': {}
  }
},
{
  a: {
    '0.1.0': {
      dependencies: {
        b: {
          '~1.0.0': '1.0.3'
        },
        c: {
          '~2.0.0': '2.0.10'
        }
      }
    }
  },

  b: {
    '1.0.3': {
      dependencies: {
        c: {
          '~2.0.0': '2.0.9'
        }
      },
      asyncDependencies: {
        d: {
          '~3.0.0': '3.0.12'
        }
      }
    }
  },

  c: {
    '2.0.9': {},
    '2.0.10': {}
  },

  d: {
    '3.0.12': {}
  }
}];