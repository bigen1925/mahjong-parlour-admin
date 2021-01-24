import {Entity, Column, PrimaryGeneratedColumn, BaseEntity} from "typeorm";

@Entity()
export class Parlour extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id?: string;

    @Column('varchar', {nullable: false})
    name?: string;
}