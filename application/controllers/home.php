<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller {

    /**
     * Index Page for this controller.
     *
     * Maps to the following URL
     * 		http://example.com/index.php/welcome
     * 	- or -
     * 		http://example.com/index.php/welcome/index
     * 	- or -
     * Since this controller is set as the default controller in
     * config/routes.php, it's displayed at http://example.com/
     *
     * So any other public methods not prefixed with an underscore will
     * map to /index.php/welcome/<method_name>
     * @see http://codeigniter.com/user_guide/general/urls.html
     */
    public function index() {
        $this->load->view('home_view');

        $this->load->helper("form");
    }

    function process() {
        $this->load->library('email');
        //grab the post data
        $this->email->from($this->input->post('email'), $this->input->post('name'));
        $this->email->to('vagner@styl.com.br');
        $this->email->subject($this->input->post('subject'));
        $this->email->message($this->input->post('message'));

        if ($this->email->send()) {
            echo "We have successfully received your email. We will Contact you ASAP.";
        } else {
            echo "Some problem occurred.";
        }
    }

}
