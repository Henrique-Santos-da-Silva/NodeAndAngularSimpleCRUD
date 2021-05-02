import { Component, OnInit } from '@angular/core';
import {Telephone} from '../models/Telephone';
import {TelephonebookService} from '../telephonebook.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  telephones: Telephone[];

  constructor(private service: TelephonebookService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllTelephones();
  }


  getAllTelephones() {
    this.service.getAllTelephones().subscribe(data => {
      this.telephones = data
    });
  }

  onEdit(id) {
    this.router.navigate(['editTelephone', id], {relativeTo: this.activatedRoute});
  }

  onDelete(telephone) {
    this.service.deleteTelephone(telephone.id).subscribe(
      success => {
        this.getAllTelephones();
      }
    )
  }
}
