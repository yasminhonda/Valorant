import { Component } from '@angular/core';
import { AgentsService } from 'src/app/services/agents.service';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.scss']
})
export class AgentsComponent {
  agent: any
  icon: any
  description: any
  agentList: any = [
  ]

  constructor(private agentService: AgentsService) { }

  ngOnInit(): void {
    this.agentService.getAllAgents().subscribe({
      next: res => {
        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i].isPlayableCharacter == true) {
            this.agent = res.data[i].displayName
            this.icon = res.data[i].displayIcon
            this.agentList.push({ icon: this.icon, agent: this.agent })
          }
          //this.getUserPhoto(res.data[i].uuid);
        }
      },
      error: erro => {
        console.log(erro)
      }
    })
  }

  clicou(agent: any) {
    console.log('clicou')
    console.log(agent)

  }

}
