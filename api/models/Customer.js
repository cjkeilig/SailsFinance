/**
 * Customer.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      id: { 
        type: "number",
        autoPK: true,
        required: true
      },
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
	    }
	 }
};

