import {  Param, Body, Get, Post, Put, Delete, JsonController, Req, Res, NotFoundError } from 'routing-controllers';
import { BaseEntity, Connection, Repository, getCustomRepository, ObjectType, getRepository } from 'typeorm';
import { Client } from '../models/Client.model';
import { ClientRepository } from '../repository/client.repository';

@JsonController()
export abstract class GenericController<T, R extends Repository<T>>{
    protected repository: R;

    @Get('')
    getAll() {
        const entities = this.repository.find();
        return entities;
    }

    @Get('/:id')
    getOne(@Param("id") id: number){
        const client = this.repository.findOne(id);
        if(!client)
            throw new NotFoundError(`Client with ID '${id}' not found`);
        return client;
    }

    @Post('')
    create(@Body() client: T){
            this.repository.save(client);
            return client;
    }

    @Put("/:id")
    put(@Param("id") id: number, @Body() client: T) {
        const clientDB = this.repository.findOne(id);
        if (clientDB){
            console.log('TODO: Actualizar metodo update generico');
            return client;
        } else {
            throw new NotFoundError(`Client with ID '${id}' not found`)
        }
    }

    @Delete("/:id")
    remove(@Param("id") id: number) {
       return "Removing client...";
    }
}