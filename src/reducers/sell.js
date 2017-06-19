import _ from 'lodash';

const initalState = {
	step: 0,
	step0: {
		requiredField: ['for','residentialType','topic','announcementDetails','areaSize','bedroom','bathroom','price','fee','province','amphur','district','location'],
		for: '',
		residentialType: '',
		topic: '',
		announcementDetails: '',
		areaSize0: '',
		areaSize1: '',
		areaSize: '',
		landSize0: '',
		landSize1: '',
		landSize: '',
		bedroom: '',
		bathroom: '',
		price: '',
		pricePerUnit: '',
		fee: '',
		project: '',
		province: '',
		amphur: '',
		district: '',
		address: '',
		street: '',
		zipcode: '',
		googleMap: {
			zoom: 10,
			markers: [{
	      position: {
	        lat: 13.7248946,
	        lng: 100.4930246,
	      },
	      key: `Bangkok`,
	      defaultAnimation: 2,
	    }],
		},
	},
	step1: {},
	step2: {
		requiredField: ['mainImage'],
		mainImage: {},
    images: [],
	},
	step3: {
		acceptTerms: false,
	},
	sendingData: false,
	redirect: false,
}

const reducers = (state = initalState, action) => {
	switch (action.type) {
		case 'SELL/STEP/NEXT': return {...state, step: state.step + 1 };
		case 'SELL/STEP/PREV': return {...state, step: state.step - 1 };
		case 'SELL/STEP/SAVE': return {...state, [action.step]: action.data };
		case 'SELL/REQUIREDFIELD/ADD': return {
			...state,
			step0: {
				...state.step0,
				requiredField: state.step0.requiredField.includes(action.field) ? state.step0.requiredField : [...state.step0.requiredField, action.field],
			}
		};
		case 'SELL/REQUIREDFIELD/REMOVE': return {
			...state,
			step0: {
				...state.step0,
				requiredField: _.filter(state.step0.requiredField, (field) => { return field !== action.field; }),
			}
		};
		case 'SELL/DATA/SENDING': return {...state, sendingData: true };
		case 'SELL/DATA/SEND/SUCCESS': return {...state, sendingData: false };
		case 'SELL/REDIRECT': return {...state, redirect: true };
		default:
			return state;
	}
}

export default reducers;