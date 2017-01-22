City.create(name: 'Baltimore') if City.where(name:'Baltimore').blank?
State.create(name: 'Maryland') if State.where(name: 'Maryland').blank?
