#!/usr/bin/env bash

############################################################
# Help                                                     #
############################################################
Help()
{
   # Display Help
   echo "Increment the latest tag and create a new tag & release."
   echo
   echo "Syntax: release [-major|-minor|-patch|-h]"
   echo "options:"
   echo "-M | -major  Increment the major version. (Ex: 1.0.0 -> 2.0.0)"
   echo "-m | -minor  Increment the minor version. (Ex: 1.0.0 -> 1.1.0)"
   echo "-p | -patch  Increment the patch version. (Ex: 1.0.0 -> 1.0.1)"
   echo "-h | -help   Print this Help."
   echo
}

############################################################

releaseme() {

    while [ $# -gt 0 ] ; do
    case $1 in
        -M | --major) part="0"; name="major" ;;
        -m | --minor) part="1"; name="minor";;
        -p | --patch) part="2"; name="patch" ;;
        -h | --help) Help ; exit 0 ;;
        -v | --version) shift; override=$1;
    esac
    shift
    done

    echo "Override: $override"

    echo "Incrementing ($name) version... "
    # Create the github tag
    if [ -z "$override" ]; then
        TAG=$(git rev-list --tags --max-count=1)
        if [[ "$TAG" == "" ]]; then 
            TAG="0.0.0"
            echo "No tags found, starting at 0.0.0"
        else
            TAG=$(git describe --tags $TAG)
        fi
    else
        TAG=$override
    fi

    delimiter=.
    array=($(echo "$TAG" | tr $delimiter '\n'))
    array[$part]=$((array[$part]+1))
    if [ $part -lt 2 ]; then array[2]=0; fi
    if [ $part -lt 1 ]; then array[1]=0; fi
    VERSION=`echo $(IFS=$delimiter ; echo "${array[*]}")`

    echo "New version is: $VERSION"

    git add .
    git commit -m "Release of version $VERSION"
    git tag -a $VERSION -m "Release of version $VERSION"
    git push --tags
    git release create v$VERSION --generate-notes
}

releaseme $@