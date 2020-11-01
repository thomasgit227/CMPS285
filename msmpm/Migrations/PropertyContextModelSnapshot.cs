﻿// <auto-generated />
using System;
using MSMBackend.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace MSMBackend.Migrations
{
    [DbContext(typeof(PropertyContext))]
    partial class PropertyContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.8")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("MSMBackend.Models.Property", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("Average")
                        .HasColumnType("int");

                    b.Property<int>("Chimney")
                        .HasColumnType("int");

                    b.Property<int>("Door")
                        .HasColumnType("int");

                    b.Property<string>("EditTime")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTimeOffset>("EditTimeOffset")
                        .HasColumnType("datetimeoffset");

                    b.Property<int>("Electrical")
                        .HasColumnType("int");

                    b.Property<int>("ExtOpenings")
                        .HasColumnType("int");

                    b.Property<int>("ExtWalls")
                        .HasColumnType("int");

                    b.Property<int>("Flooring")
                        .HasColumnType("int");

                    b.Property<int>("Framework")
                        .HasColumnType("int");

                    b.Property<int>("HVAC")
                        .HasColumnType("int");

                    b.Property<string>("ImageURL")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Location")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(250)")
                        .HasMaxLength(250);

                    b.Property<int>("Piers")
                        .HasColumnType("int");

                    b.Property<int>("Plumbing")
                        .HasColumnType("int");

                    b.Property<int>("Roof")
                        .HasColumnType("int");

                    b.Property<int>("Sewer")
                        .HasColumnType("int");

                    b.Property<int>("Shutters")
                        .HasColumnType("int");

                    b.Property<string>("Username")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("Utilities")
                        .HasColumnType("bit");

                    b.Property<int>("Windows")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("Properties");
                });
#pragma warning restore 612, 618
        }
    }
}
