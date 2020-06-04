import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditarMedidasPage } from './editar-medidas.page';

describe('EditarMedidasPage', () => {
  let component: EditarMedidasPage;
  let fixture: ComponentFixture<EditarMedidasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarMedidasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarMedidasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
