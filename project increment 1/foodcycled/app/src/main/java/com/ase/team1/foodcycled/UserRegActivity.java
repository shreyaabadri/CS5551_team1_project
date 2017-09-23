package com.ase.team1.foodcycled;

import android.content.Intent;
import android.content.SharedPreferences;
import android.graphics.PorterDuff;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.EditText;

/**
 * Created by Shreya on 9/22/2017.
 */

public class UserRegActivity extends AppCompatActivity {
    private EditText pas;
    private EditText email;
    private EditText nam;
    private EditText pno;
    private EditText ad;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_register_user);
        pas = (EditText) findViewById(R.id.pass);
        email = (EditText) findViewById(R.id.email);
        nam =    (EditText) findViewById(R.id.na);
        pno =    (EditText) findViewById(R.id.phnumber);
        ad =    (EditText) findViewById(R.id.address);

    }

    public void regUser(View v)
    {

        String s=email.getText().toString();
        SharedPreferences settings = getSharedPreferences(s,0);
        SharedPreferences.Editor editor = settings.edit();
        editor.putString("email",s);
        editor.putString("name",nam.getText().toString());
        editor.putString("password",pas.getText().toString());
        editor.putString("PhoneNumber",pno.getText().toString());
        editor.putString("Address",ad.getText().toString());
        editor.commit();
        Intent redirect=new Intent(UserRegActivity.this,LoginActivity.class);
        redirect.putExtra("email",s);
        startActivity(redirect);
    }

    public void onCancelUser(View v)
    {
        Intent redirect=new Intent(UserRegActivity.this,MainActivity.class);
        startActivity(redirect);
    }


}
