package com.ase.team1.foodcycled;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;

/**
 * Created by Shreya on 9/22/2017.
 */

public class SignupActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_register_main);
    }

    public void userRegisterPage(View v)
    {


        Intent redirect=new Intent(SignupActivity.this,UserRegActivity.class);
        startActivity(redirect);
    }



    public void volunteerRegisterPage(View v)
    {
        Intent redirect=new Intent(SignupActivity.this,VolunteerRegActivity.class);
        startActivity(redirect);
    }
}
