import { makeAutoObservable, observable, action } from "mobx";
import axios from "axios";

type Availability = {
    weekDay: string;
    startAt: string;
    endAt: string;
  };

type Provider = {
    id: number | null;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    availabilities: Availability[];
}

export class ProvidersStore {
    profiles: ProviderStore[] = [];

    constructor() {
        makeAutoObservable(this, {
            profiles: observable,
            addProfile: action,
        });
    };

    get getProfiles() {
        return this.profiles;
    }

    async addProfile(profile: Provider) {
        let provider = new ProviderStore();
        console.log(`adding profile: ${profile}`);
        provider.addProfile(profile);
        this.profiles.push(provider);
        console.log(`checking ProvidersStore profile`, this.profiles);
        await this.save(profile);
        console.log(`save complete`);
    }

    async save(profile: Provider) {
        await axios.post('http://localhost:3000/provider/', {
            firstName: profile.firstName,
            lastName: profile.lastName,
            email: profile.email,
            phone: profile.phone,
            availabilities: profile.availabilities,
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    };
};

class ProviderStore {
    profile: Provider | {} = {};
    bookings = [];
    availabilities = [];

    constructor() {
        makeAutoObservable(this, {
            profile: observable,
            bookings: observable,
            availabilities: observable,
            addProfile: action,
        });
    };

    addProfile(profile: Provider) {
        this.profile = profile;
    }

    get getProfile() {
        return this.profile;
    };

    get getBookings() {
        return this.bookings;
    };

    get getAvailabilities() {
        return this.availabilities;
    };
}
