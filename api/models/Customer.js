/**
 * Customer.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
	    name: {
	    	type: "string",
	    	required: true
	    },
	    address: {
	    	type: "string",
	    	required: true
	    },
	    city: {
	    	type: "string",
	    	required: true
	    },
	    state: {
	    	type: "string",
	    	required: true
	    },
	    zip: {
	    	type: "string",
	    	required: true
	    },
	    homephone: {
	    	type: "string"
	    },
	    cellphone: {
	    	type:"string"
	    },
	    email: {
	    	type: "string",
	    },
	    assets : {
			collection: 'asset',
			via: 'owner'
		},
		stocks : {
    		collection: 'stock',
    		via: 'owner'
		}
  }
};

