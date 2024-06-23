import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';

@Injectable()
export class EventsService {
  create(createEventDto: CreateEventDto) {
    return `This action adds a new event ${createEventDto}`;
  }
}