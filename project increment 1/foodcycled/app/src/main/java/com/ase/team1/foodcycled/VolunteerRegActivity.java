package com.ase.team1.foodcycled;

import android.content.Intent;
import android.content.SharedPreferences;
import android.content.pm.PackageManager;
import android.graphics.Bitmap;
import android.os.Bundle;
import android.provider.MediaStore;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.Toast;

/**
 * Created by Shreya on 9/22/2017.
 */

public class VolunteerRegActivity extends AppCompatActivity {


    private EditText pas1;
    private EditText email1;
    private EditText nam1;
    private EditText pno1;
    private EditText ad1;
    private EditText id1;
    int TAKE_PHOTO_CODE = 0;
    ImageView userImage ;
    private static final int MY_CAMERA_REQUEST_CODE = 100;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_register_volun);

        pas1 = (EditText) findViewById(R.id.pass1);
        email1 = (EditText) findViewById(R.id.email1);
        nam1 =    (EditText) findViewById(R.id.na1);
        pno1 =    (EditText) findViewById(R.id.phnumber1);
        ad1 =    (EditText) findViewById(R.id.address1);
        id1 =(EditText) findViewById(R.id.identi);
        Button capture = (Button) findViewById(R.id.btn_take_photo);
        userImage = (ImageView) findViewById(R.id.view_photo);
        //Button click eventlistener. Initializes the camera.
     //   Toast.makeText(this,"In camera activity",Toast.LENGTH_SHORT).show();
       // if (checkSelfPermission(android.Manifest.permission.CAMERA) != PackageManager.PERMISSION_GRANTED) {
         //   requestPermissions(new String[]{android.Manifest.permission.CAMERA}, MY_CAMERA_REQUEST_CODE);
       // }

    }
    public void callCamera(View v) {
        //Toast.makeText(getApplicationContext(),"on take photo click",Toast.LENGTH_SHORT).show();
        Intent cameraIntent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
        if (cameraIntent.resolveActivity(getPackageManager()) != null) {
            startActivityForResult(cameraIntent, TAKE_PHOTO_CODE);
        }
    }

    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (requestCode == TAKE_PHOTO_CODE && resultCode == RESULT_OK) {
            Bitmap photo = (Bitmap) data.getExtras().get("data");
            userImage.setImageBitmap(photo);
            Log.d("CameraDemo", "Pic saved");
        }
    }
    public void regVolun(View v)
    {

        String s1=email1.getText().toString();
        SharedPreferences settings = getSharedPreferences(s1,0);
        SharedPreferences.Editor editor = settings.edit();
        editor.putString("email",s1);
        editor.putString("name",nam1.getText().toString());
        editor.putString("password",pas1.getText().toString());
        editor.putString("PhoneNumber",pno1.getText().toString());
        editor.putString("Address",ad1.getText().toString());
        editor.putString("ID",id1.getText().toString());
        editor.commit();
        Intent redirect=new Intent(VolunteerRegActivity.this,LoginActivity.class);
        redirect.putExtra("email",s1);
        startActivity(redirect);
    }

    public void onCancelvolun(View v)
    {
        Intent redirect=new Intent(VolunteerRegActivity.this,MainActivity.class);
        startActivity(redirect);
    }

}
