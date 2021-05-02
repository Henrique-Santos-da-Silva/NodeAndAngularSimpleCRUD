import { Request, Response } from "express";
import { getRepository } from "typeorm";
import TelephoneBook from '../models/TelephoneBook';


export const index = async (request: Request, response: Response) => {
    const telephones = await getRepository(TelephoneBook).find();
    return response.json(telephones);
};

export const show = async (request: Request, response: Response) => {
    const { id } = request.params;
    const telephones = await getRepository(TelephoneBook).findOne(id);

    return response.json(telephones);
};

export const create = async (request: Request, response: Response) => {
    const telephone = await getRepository(TelephoneBook).save(request.body);
    return response.status(201).json(telephone);
};


export const update = async (request: Request, response: Response) => {
    const telephone = await getRepository(TelephoneBook).findOne(request.params.id);

    if (telephone) {
        getRepository(TelephoneBook).merge(telephone, request.body);
        const result = await getRepository(TelephoneBook).save(telephone);
        return response.status(200).json(result);
    }

    response.status(404).json({ message: 'Telephone not found' });


};

export const deleteTelephone = async (request: Request, response: Response) => {
    const { id } = request.params;
    const telephoneRepository = await getRepository(TelephoneBook);
    let telephone: TelephoneBook;

    try {
        telephone = await telephoneRepository.findOneOrFail(id);
    } catch (error) {
        response.status(404).json({ message: 'Telephone not found' });
        return;
    }
    telephoneRepository.delete(id);
    response.status(200).json({ message: 'Telephone deleted successfully' });
}