<h1>
    {{$job->title}}
</h1>

<p>
    Congratulations , the job is now live on our Website
</p>

<p>
    <a href="{{url("/jobs/" . $job->id)}}">view your posted job</a>
</p>
