import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
export interface Tile {
  
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  constructor(private router:Router){}
  p: Number = 1;
  panelOpenState = false;
  tiles: Tile[] = [

    {  "firstname": "Vinay", "surname": "kumar", "mobile": 8867609885, "email": "nareshkumar@accionlabs.com", "dob": 15081994, "password": "AccionLabs@123", "gender": "male", "id": 1, "__v": 0, "emp_id": 2346 },
    {  "firstname": "Vinay", "surname": "kumar", "mobile": 8867609885, "email": "nareshkumar@accionlabs.com", "dob": 15081994, "password": "AccionLabs@123", "emp_id": 2346, "gender": "male", "id": 3, "__v": 0 },
    { "firstname": "shant", "surname": "kumar", "mobile": 8867609885, "email": "nareshkumar@accionlabs.com", "dob": 15081994, "password": "AccionLabs@123", "emp_id": 2347, "gender": "male", "id": 4, "__v": 0 },
    { "firstname": "shant", "surname": "kumar", "mobile": 8867609885, "email": "nareshkumar@accionlabs.com", "dob": 15081994, "password": "AccionLabs@123", "emp_id": 2347, "gender": "male", "id": 4, "__v": 0 },
    {  "firstname": "Vinay", "surname": "kumar", "mobile": 8867609885, "email": "nareshkumar@accionlabs.com", "dob": 15081994, "password": "AccionLabs@123", "gender": "male", "id": 1, "__v": 0, "emp_id": 2346 },
    {  "firstname": "Vinay", "surname": "kumar", "mobile": 8867609885, "email": "nareshkumar@accionlabs.com", "dob": 15081994, "password": "AccionLabs@123", "gender": "male", "id": 1, "__v": 0, "emp_id": 2346 },
    {  "firstname": "Vinay", "surname": "kumar", "mobile": 8867609885, "email": "nareshkumar@accionlabs.com", "dob": 15081994, "password": "AccionLabs@123", "gender": "male", "id": 1, "__v": 0, "emp_id": 2346 },
    {  "firstname": "Vinay", "surname": "kumar", "mobile": 8867609885, "email": "nareshkumar@accionlabs.com", "dob": 15081994, "password": "AccionLabs@123", "gender": "male", "id": 1, "__v": 0, "emp_id": 2346 },
    {  "firstname": "Vinay", "surname": "kumar", "mobile": 8867609885, "email": "nareshkumar@accionlabs.com", "dob": 15081994, "password": "AccionLabs@123", "gender": "male", "id": 1, "__v": 0, "emp_id": 2346 },
    {  "firstname": "Vinay", "surname": "kumar", "mobile": 8867609885, "email": "nareshkumar@accionlabs.com", "dob": 15081994, "password": "AccionLabs@123", "gender": "male", "id": 1, "__v": 0, "emp_id": 2346 },
    {  "firstname": "Vinay", "surname": "kumar", "mobile": 8867609885, "email": "nareshkumar@accionlabs.com", "dob": 15081994, "password": "AccionLabs@123", "gender": "male", "id": 1, "__v": 0, "emp_id": 2346 },
    {  "firstname": "Vinay", "surname": "kumar", "mobile": 8867609885, "email": "nareshkumar@accionlabs.com", "dob": 15081994, "password": "AccionLabs@123", "gender": "male", "id": 1, "__v": 0, "emp_id": 2346 },
    {  "firstname": "Vinay", "surname": "kumar", "mobile": 8867609885, "email": "nareshkumar@accionlabs.com", "dob": 15081994, "password": "AccionLabs@123", "gender": "male", "id": 1, "__v": 0, "emp_id": 2346 },
    {  "firstname": "Vinay", "surname": "kumar", "mobile": 8867609885, "email": "nareshkumar@accionlabs.com", "dob": 15081994, "password": "AccionLabs@123", "gender": "male", "id": 1, "__v": 0, "emp_id": 2346 },
    {  "firstname": "Vinay", "surname": "kumar", "mobile": 8867609885, "email": "nareshkumar@accionlabs.com", "dob": 15081994, "password": "AccionLabs@123", "gender": "male", "id": 1, "__v": 0, "emp_id": 2346 },
    {  "firstname": "Vinay", "surname": "kumar", "mobile": 8867609885, "email": "nareshkumar@accionlabs.com", "dob": 15081994, "password": "AccionLabs@123", "gender": "male", "id": 1, "__v": 0, "emp_id": 2346 },
    {  "firstname": "Vinay", "surname": "kumar", "mobile": 8867609885, "email": "nareshkumar@accionlabs.com", "dob": 15081994, "password": "AccionLabs@123", "gender": "male", "id": 1, "__v": 0, "emp_id": 2346 },
    {  "firstname": "Vinay", "surname": "kumar", "mobile": 8867609885, "email": "nareshkumar@accionlabs.com", "dob": 15081994, "password": "AccionLabs@123", "gender": "male", "id": 1, "__v": 0, "emp_id": 2346 },
    {  "firstname": "Vinay", "surname": "kumar", "mobile": 8867609885, "email": "nareshkumar@accionlabs.com", "dob": 15081994, "password": "AccionLabs@123", "gender": "male", "id": 1, "__v": 0, "emp_id": 2346 },
    {  "firstname": "Vinay", "surname": "kumar", "mobile": 8867609885, "email": "nareshkumar@accionlabs.com", "dob": 15081994, "password": "AccionLabs@123", "gender": "male", "id": 1, "__v": 0, "emp_id": 2346 },
    {  "firstname": "Vinay", "surname": "kumar", "mobile": 8867609885, "email": "nareshkumar@accionlabs.com", "dob": 15081994, "password": "AccionLabs@123", "gender": "male", "id": 1, "__v": 0, "emp_id": 2346 },
    {  "firstname": "Vinay", "surname": "kumar", "mobile": 8867609885, "email": "nareshkumar@accionlabs.com", "dob": 15081994, "password": "AccionLabs@123", "gender": "male", "id": 1, "__v": 0, "emp_id": 2346 },
    {  "firstname": "Vinay", "surname": "kumar", "mobile": 8867609885, "email": "nareshkumar@accionlabs.com", "dob": 15081994, "password": "AccionLabs@123", "gender": "male", "id": 1, "__v": 0, "emp_id": 2346 },
    {  "firstname": "Vinay", "surname": "kumar", "mobile": 8867609885, "email": "nareshkumar@accionlabs.com", "dob": 15081994, "password": "AccionLabs@123", "gender": "male", "id": 1, "__v": 0, "emp_id": 2346 },
    {  "firstname": "Vinay", "surname": "kumar", "mobile": 8867609885, "email": "nareshkumar@accionlabs.com", "dob": 15081994, "password": "AccionLabs@123", "gender": "male", "id": 1, "__v": 0, "emp_id": 2346 },
    {  "firstname": "Vinay", "surname": "kumar", "mobile": 8867609885, "email": "nareshkumar@accionlabs.com", "dob": 15081994, "password": "AccionLabs@123", "gender": "male", "id": 1, "__v": 0, "emp_id": 2346 },
    {  "firstname": "Vinay", "surname": "kumar", "mobile": 8867609885, "email": "nareshkumar@accionlabs.com", "dob": 15081994, "password": "AccionLabs@123", "gender": "male", "id": 1, "__v": 0, "emp_id": 2346 },
    {  "firstname": "Vinay", "surname": "kumar", "mobile": 8867609885, "email": "nareshkumar@accionlabs.com", "dob": 15081994, "password": "AccionLabs@123", "gender": "male", "id": 1, "__v": 0, "emp_id": 2346 },
    {  "firstname": "Vinay", "surname": "kumar", "mobile": 8867609885, "email": "nareshkumar@accionlabs.com", "dob": 15081994, "password": "AccionLabs@123", "gender": "male", "id": 1, "__v": 0, "emp_id": 2346 },
    {  "firstname": "Vinay", "surname": "kumar", "mobile": 8867609885, "email": "nareshkumar@accionlabs.com", "dob": 15081994, "password": "AccionLabs@123", "gender": "male", "id": 1, "__v": 0, "emp_id": 2346 },
    {  "firstname": "Vinay", "surname": "kumar", "mobile": 8867609885, "email": "nareshkumar@accionlabs.com", "dob": 15081994, "password": "AccionLabs@123", "gender": "male", "id": 1, "__v": 0, "emp_id": 2346 },
    {  "firstname": "Vinay", "surname": "kumar", "mobile": 8867609885, "email": "nareshkumar@accionlabs.com", "dob": 15081994, "password": "AccionLabs@123", "gender": "male", "id": 1, "__v": 0, "emp_id": 2346 },
    {  "firstname": "Vinay", "surname": "kumar", "mobile": 8867609885, "email": "nareshkumar@accionlabs.com", "dob": 15081994, "password": "AccionLabs@123", "gender": "male", "id": 1, "__v": 0, "emp_id": 2346 },
    {  "firstname": "Vinay", "surname": "kumar", "mobile": 8867609885, "email": "nareshkumar@accionlabs.com", "dob": 15081994, "password": "AccionLabs@123", "gender": "male", "id": 1, "__v": 0, "emp_id": 2346 },
    {  "firstname": "Vinay", "surname": "kumar", "mobile": 8867609885, "email": "nareshkumar@accionlabs.com", "dob": 15081994, "password": "AccionLabs@123", "gender": "male", "id": 1, "__v": 0, "emp_id": 2346 },
    {  "firstname": "Vinay", "surname": "kumar", "mobile": 8867609885, "email": "nareshkumar@accionlabs.com", "dob": 15081994, "password": "AccionLabs@123", "gender": "male", "id": 1, "__v": 0, "emp_id": 2346 },
    {  "firstname": "Vinay", "surname": "kumar", "mobile": 8867609885, "email": "nareshkumar@accionlabs.com", "dob": 15081994, "password": "AccionLabs@123", "gender": "male", "id": 1, "__v": 0, "emp_id": 2346 },
    {  "firstname": "Vinay", "surname": "kumar", "mobile": 8867609885, "email": "nareshkumar@accionlabs.com", "dob": 15081994, "password": "AccionLabs@123", "gender": "male", "id": 1, "__v": 0, "emp_id": 2346 },
    {  "firstname": "Vinay", "surname": "kumar", "mobile": 8867609885, "email": "nareshkumar@accionlabs.com", "dob": 15081994, "password": "AccionLabs@123", "gender": "male", "id": 1, "__v": 0, "emp_id": 2346 },
    {  "firstname": "Vinay", "surname": "kumar", "mobile": 8867609885, "email": "nareshkumar@accionlabs.com", "dob": 15081994, "password": "AccionLabs@123", "gender": "male", "id": 1, "__v": 0, "emp_id": 2346 },
    {  "firstname": "Vinay", "surname": "kumar", "mobile": 8867609885, "email": "nareshkumar@accionlabs.com", "dob": 15081994, "password": "AccionLabs@123", "gender": "male", "id": 1, "__v": 0, "emp_id": 2346 },
    { "firstname": "shant", "surname": "kumar", "mobile": 8867609885, "email": "nareshkumar@accionlabs.com", "dob": 15081994, "password": "AccionLabs@123", "emp_id": 2347, "gender": "male", "id": 4, "__v": 0 },
    { "firstname": "shant", "surname": "kumar", "mobile": 8867609885, "email": "nareshkumar@accionlabs.com", "dob": 15081994, "password": "AccionLabs@123", "emp_id": 2347, "gender": "male", "id": 4, "__v": 0 },
    { "firstname": "shant", "surname": "kumar", "mobile": 8867609885, "email": "nareshkumar@accionlabs.com", "dob": 15081994, "password": "AccionLabs@123", "emp_id": 2347, "gender": "male", "id": 4, "__v": 0 },
    { "firstname": "shant", "surname": "kumar", "mobile": 8867609885, "email": "nareshkumar@accionlabs.com", "dob": 15081994, "password": "AccionLabs@123", "emp_id": 2347, "gender": "male", "id": 4, "__v": 0 },



  ];
  

}
