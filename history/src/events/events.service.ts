import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { Repository } from 'typeorm';
import { Event } from '@lib/entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Event)
    private eventsRepository: Repository<Event>,
  ) {}
  create(createEventDto: CreateEventDto) {
    return this.eventsRepository.insert(createEventDto);
  }
  findAll() {
    return this.eventsRepository.find();
  }
}
