/*
 * Stimulus-Parsley
 *
 * Copyright (C) 2019 Boris Raicheff
 * All rights reserved
 */


import $ from "jquery";
import { Controller } from "@hotwired/stimulus";


export default class extends Controller {

  connect() {

    $(this.element).parsley();

  }

  disconnect() {

    $(this.element).parsley().destroy();

  }

}


/* EOF */
