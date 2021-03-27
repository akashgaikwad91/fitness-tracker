import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject'
import { TrainingService } from '../training/training.service';
import { AuthData } from "./auth-data.model";


@Injectable()
export class AuthService {
    authChange = new Subject<boolean>();
    private isAuthenticated = false;

    constructor(private router: Router,
        private afAuth: AngularFireAuth,
        private trainingService: TrainingService) { }

    initAuthListener() {
        this.afAuth.authState.subscribe(user => {
            if (user) {
                this.isAuthenticated = true
                this.authChange.next(true);
                this.router.navigate(['/training'])
            } else {
                this.trainingService.cancelSubscription()
                this.isAuthenticated = false
                this.authChange.next(false);
                this.router.navigate(['/login'])
            }
        })
    }
    registerUser(authData: AuthData) {
        this.afAuth.createUserWithEmailAndPassword(
            authData.email,
            authData.password
        ).then(result => {
        })
    }

    login(authData: AuthData) {
        this.afAuth.signInWithEmailAndPassword(
            authData.email,
            authData.password
        ).then(result => {
        })
    }

    logout() {
        this.afAuth.signOut()
    }

    isAuth() {
        return this.isAuthenticated;
    }


}