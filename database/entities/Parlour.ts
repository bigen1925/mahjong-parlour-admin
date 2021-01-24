import {Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToMany} from "typeorm";
import {Table} from "./Table";

@Entity()
export class Parlour extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id?: string;

    @Column('varchar', {nullable: false})
    name?: string;

    @OneToMany(() => Table, table => table.parlour)
    tables?: Table[];
}