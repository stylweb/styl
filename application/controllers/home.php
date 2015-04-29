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

    function send() {
       $this->load->library('email');
        //grab the post data
        $this->email->from($this->input->post('email'), $this->input->post('name'));
        $this->email->to('rodolfoqmartins@gmail.com');
        $this->email->subject($this->input->post('subject'));
        $this->email->message($this->input->post('message'));

        if ($this->email->send()) {
            echo "Sua mensagem foi enviada corretamente!";
        } else {
            echo "Erro! Confira suas informações no formulário";
        }
    }
    
    function tests(){
        /*
	DONT FORGET TO DELETE THIS SCRIPT WHEN FINISHED!
	*/

	ini_set( 'display_errors', 1 );
	error_reporting( E_ALL );
	
	$from = 'webmaster@example.com';
	
	/*
	ini_set( 'SMTP', 'smtp.example.com' );
	ini_set( 'SMTP_PORT', 25 );
	ini_set( 'sendmail_from', $from );
	*/
	
	$server = array( 
		'HTTP_HOST', 'SERVER_NAME', 'SERVER_ADDR', 'SERVER_PORT',
 		'SERVER_ADMIN', 'SERVER_SIGNATURE', 'SERVER_SOFTWARE', 
		'REMOTE_ADDR', 'DOCUMENT_ROOT', 'REQUEST_URI', 
		'SCRIPT_NAME', 'SCRIPT_FILENAME',
	);
	
	$to      = ( isset( $_GET['email'] ) ? $_GET['email'] : FALSE );
	$subject = 'Mail Test Successful for ' . $_SERVER['HTTP_HOST'];
	$message = '';
	
	if ( ! $to )
	{
		echo '<strong>Set $_GET[\'email\'].</strong>';
		exit;
	};
	
	foreach ( $server as $s )
	{
		$message .= sprintf( '%s: %s', $s, $_SERVER[$s] ) . PHP_EOL;
	};
	
	$headers = 'From: ' . $from . PHP_EOL 
		 . 'Reply-To: ' . $from . PHP_EOL 
		 . 'X-Mailer: PHP/' . phpversion(); 
	
	if ( isset( $_GET['send'] ) && $_GET['send'] === 'true' )
	{					
		$success = mail( $to, $subject, $message, $headers );
	}
	else
	{
		echo '<strong>Set &quot;<a href="./?email=' . $to . '&send=true">'
		 . './?email=' . $to . '&send=true</a>&quot; to send a test e-mail.</strong>';
	};
	
	if ( isset( $success ) )
	{	
		echo 'E-mail sent to: ' . $to;
		echo '<br />';
		echo 'Successful mail?: <strong ' . ( $success ? 'style="color:green;">YES' : 'style="color:red;">NO' ) . '</strong>';
	}
	else
	{
		echo '<br />';
		echo 'E-mail set as: '.$to;
	};
	
	echo '<hr />';	
	echo '<style>	* { font-family: Helvetica, Arial, sans-serif;  } th { text-align: left; } td { padding: 3px 5px; }	</style>';
	echo '<table>';	
	
	foreach ( $server as $s )
	{
		echo '<tr><th>$_SERVER[\'' . $s . '\']</th><td>' . $_SERVER[$s] . '</td></tr>';
	};
	
	echo '</table>';
	
	if ( isset( $success ) )
	{
		echo '<!--'; 
		var_dump( $success );		
		echo '-->';
	};
    }

}
