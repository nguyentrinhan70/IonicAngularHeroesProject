import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HeroSearchPage } from './hero-search.page';

describe('HeroSearchPage', () => {
  let component: HeroSearchPage;
  let fixture: ComponentFixture<HeroSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroSearchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HeroSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
