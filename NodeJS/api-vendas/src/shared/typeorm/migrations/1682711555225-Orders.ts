import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Orders1682711555225 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      new Table({
        name: 'orders',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      })
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('orders')
    }

}
