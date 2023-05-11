import { Given, When, Then } from 'cucumber';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from '../app/app.component';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { defineSupportCode } from 'cucumber';

// Import your step definitions
import './sample.steps';
import { By } from '@angular/platform-browser';

// Initialize Cucumber
defineSupportCode(({ configure }: { configure: Function }) => {
    configure(() => {
      TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
    });
  });

// defineSupportCode(({ configure }) => {
//   configure(() => {
//     TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
//   });
// });



// Define your Jasmine tests
describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  Given('I am on the home page', function () {
    // implementation code goes here
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

});

  it('should create the app', () => {
    expect(app).toBeTruthy();
});

  // Add more unit tests based on your feature file scenarios and steps
  // For example:
  it('should display the login form when the user clicks the login button', () => {
    // Use Jasmine's test syntax to write unit tests
    // Write code that executes the steps defined in your sample.steps.ts file
    // Use Angular's testing utilities to interact with the app and check its state
    // For example:
    const loginButton = fixture.debugElement.query(By.css('#login-button'));
    loginButton.triggerEventHandler('click', null);

    fixture.detectChanges();

    const loginForm = fixture.debugElement.query(By.css('#login-form'));
    expect(loginForm).toBeTruthy();
  });
});

Given('I am on the home page', function () {
  // implementation code goes here
});

When('I click the login button', function () {
  // implementation code goes here
});

Then('I should see the login form', function () {
  // implementation code goes here
});