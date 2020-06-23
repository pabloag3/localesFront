import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerMedidasDeEmpresaPage } from './ver-medidas-de-empresa.page';

describe('VerMedidasDeEmpresaPage', () => {
  let component: VerMedidasDeEmpresaPage;
  let fixture: ComponentFixture<VerMedidasDeEmpresaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerMedidasDeEmpresaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerMedidasDeEmpresaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
