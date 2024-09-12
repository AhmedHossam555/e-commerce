import { Component } from '@angular/core';
import { FlowbitService } from '../../../shared/services/flowbit.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(private flowbiteService: FlowbitService) {}

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite(flowbite => {

    });
  }

}
