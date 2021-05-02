import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('telephone_book')
export default class TelephoneBook {

    constructor() {
        this.id = 0;
        this.name = "";
        this.email = "";
        this.telephone = "";
    }

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    telephone: string;
}