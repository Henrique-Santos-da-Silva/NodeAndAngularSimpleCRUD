import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class TelephoneBook1619973145545 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'telephone_book',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'name',
                    type: 'varchar(50)',
                },
                {
                    name: 'email',
                    type: 'varchar(50)',
                },
                {
                    name: 'telephone',
                    type: 'varchar(20)',
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('telephone_book');
    }

}
