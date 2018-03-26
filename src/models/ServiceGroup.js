import { observable } from 'mobx';
import uuidv1 from 'uuid/v1';

export default class ServiceGroup {
  id = uuidv1();

  @observable name = '';
  @observable order = 99;

  @observable unreadDirectMessageCount = 0;
  @observable unreadIndirectMessageCount = 0;

  services = [];

  constructor(data) {
    if (!data) {
      console.error('Service config not valid');
      return null;
    }

    this.id = data.id || this.id;
    this.name = data.name || this.name;

    this.order = data.order !== undefined
      ? data.order : this.order;
  }
}