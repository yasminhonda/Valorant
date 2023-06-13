import { Component } from '@angular/core';
import { AgentsService } from './services/agents.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Valorant';
  members: any

  constructor(private agentService: AgentsService) { }

  ngOnInit(): void {
    this.agentService.getAllMembers().subscribe(
      res => {
        this.members = res.data
        console.log(this.members)
      },
      erro => {
        console.log(erro)
      }
    )
  }

}
