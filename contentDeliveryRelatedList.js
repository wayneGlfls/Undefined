import { LightningElement,api,wire ,track} from 'lwc';
import getContacts from '@salesforce/apex/ContentDelivery.getCDs';

const columns = [
    { label: 'FileName', fieldName: 'Name' },
    { label: 'Shared URL', fieldName: 'DistributionPublicUrl', type: 'url' },
    { label: 'Password', fieldName: 'Password', type: 'String' }
];

export default class ContentDeliveryRelatedList extends LightningElement {
    @api recordId;
    @track columns = columns;
    @wire(getContacts, {recId:'$recordId' })
    CDs;

    constructor(){
        super();
        //console.log('record id is'+recordId);
    }

    connectedCallback(){
        console.log('Debug record id is'+  this.recordId);
    }

    renderedCallback(){
        console.log('Debug record id is'+  this.recordId);
    }



}