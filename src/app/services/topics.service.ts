import { Injectable } from '@angular/core'
import { Headers, Http, RequestOptions, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'
import { MainTopicsModel } from 'app/data-models/main-topics.model'
import { SubTopicsResponseModel } from 'app/data-models/sub-topics-response.model'
import { SubListingResponse } from 'app/data-models/sub-listing-response.model'
import { SubListingRequest } from 'app/data-models/sub-listing-request.model'
import 'rxjs/Rx';
import { SubListingAllResponse } from 'app/data-models/sub-listing-all-response.model'
import { CarousalResponse } from 'app/data-models/carousal-response.model'
import { BlogsResponse } from 'app/data-models/blogs-response.model'
import { SubListingEntityModel } from 'app/data-models/sub-listing-entity-response.model'

@Injectable()
export class TopicService {

    constructor(private http: Http) { }

    getMainTopics(): Observable<MainTopicsModel[]> {
        return this.http.get('https://topicsmicroservices.herokuapp.com/topics/mainTopics').map((response: Response) => {
            return response.json() as MainTopicsModel[];
        }).catch(this.handleError);
        //         return this.http.get('/topics/mainTopics').map((response: Response) => {
        //     return response.json() as MainTopicsModel[];
        // }).catch(this.handleError);
    }

    getAllSubListings(): Observable<SubListingAllResponse[]> {
        return this.http.get('https://topicsmicroservices.herokuapp.com/topics/sublistings').map((response: Response) => {
            return response.json() as SubListingAllResponse[];
        }).catch(this.handleError);
        //         return this.http.get('/topics/sublistings').map((response: Response) => {
        //     return response.json() as SubListingAllResponse[];
        // }).catch(this.handleError);
    }

    getSubTopics(subTopicId): Observable<SubTopicsResponseModel[]> {
        return this.http.get('https://topicsmicroservices.herokuapp.com/topics/subTopics/' + subTopicId).map((response: Response) => {
            return response.json() as SubTopicsResponseModel[];
        }).catch(this.handleError);
        //         return this.http.get('/topics/subTopics/' + subTopicId).map((response: Response) => {
        //     return response.json() as SubTopicsResponseModel[];
        // }).catch(this.handleError);
    }

    getSubListings(subListingRequest: SubListingRequest): Observable<SubListingResponse[]> {
        const headers = new Headers({ 'Content-Type': 'application/json' })
        const requestop = new RequestOptions({ headers })

        return this.http.post('https://topicsmicroservices.herokuapp.com/topics/getListings', JSON.stringify(subListingRequest), requestop).map((response: Response) => {
            return response.json() as SubListingResponse[];
        }).catch(this.handleError);
        //         return this.http.post('/topics/getListings', JSON.stringify(subListingRequest), requestop).map((response: Response) => {
        //     return response.json() as SubListingResponse[];
        // }).catch(this.handleError);
    }

    getAllCarousals(): Observable<CarousalResponse[]> {
        return this.http.get('https://topicsmicroservices.herokuapp.com/topics/carousal').map((response: Response) => {
            return response.json() as CarousalResponse[];
        }).catch(this.handleError);
        //         return this.http.get('/topics/carousal').map((response: Response) => {
        //     return response.json() as CarousalResponse[];
        // }).catch(this.handleError);
    }

    getAllBlogs(): Observable<BlogsResponse[]> {
        return this.http.get('https://topicsmicroservices.herokuapp.com/topics/blogs').map((response: Response) => {
            return response.json() as BlogsResponse[];
        }).catch(this.handleError);
        //         return this.http.get('/topics/blogs').map((response: Response) => {
        //     return response.json() as BlogsResponse[];
        // }).catch(this.handleError);
    }

    getSublistingByName(subListingName: string): Observable<SubListingEntityModel> {
        return this.http.get('https://topicsmicroservices.herokuapp.com/topics/sublistings/' + subListingName).map((response: Response) => {
             return response.json() as SubListingEntityModel;
        }).catch(this.handleError);
        //         return this.http.get('/topics/sublistings/'+ subListingName).map((response: Response) => {
        //     return response.json() as SubListingEntityModel;
        // }).catch(this.handleError);
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText)
    }
}
